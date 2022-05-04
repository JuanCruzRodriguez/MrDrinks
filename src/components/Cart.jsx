import { Link } from "react-router-dom";
import { useContext} from 'react';
import { CartContext } from './CartContext';
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);

    const confirmarCompra = () => {
        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.qtyItem)
            });
        });

        let orden = {
            comprador:{
                nombre: "Pepe",
                email: "pepe87@pepito.com.ar",
                telefono:"1123456789"
            },
            date: serverTimestamp(),
            items: test.cartList.map(item => ({
                id: item.idItem,
                title: item.nombreItem,
                prize: item.precioItem,
                qty: item.qtyItem
            })),
            total: test.total()
        }
        console.log(orden);

        const createOrderInFirestore = async () => {
            // Add a new document with a generated id
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, orden);
            return newOrderRef;
        }
        
        createOrderInFirestore()
            .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
            .catch(err => console.log(err));
        
        test.eliminarList();
    }

    return(
        <>
        <div className="topCarrito">
            <h1>Carrito</h1>
            <div className="buttonsTopCarrito">
                <Link to='/'><button>Continuar comprando</button></Link>
                    {
                        (test.cartList.length > 0)
                        ? <button onClick={test.eliminarList}>Borrar todos los productos</button>
                        : <p>El carrito esta vacío</p>
                    }
            </div>
        </div>
        {
            test.cartList.length > 0 &&
            test.cartList.map(item => 
            <div key={item.idItem} className="productoCarrito">
                <img src={item.imagenItem} alt={item.imgAltItem} />
                <p>{item.nombreItem}</p>
                <p>Cantidad: {item.qtyItem}</p>
                <p>$ {item.precioItem} c/u </p>
                <p>Total = $ {test.totalItem(item.idItem)} </p>
                <button className="buttonBorrarProducto" onClick={() => test.eliminarItem(item.idItem)}>X</button>
            </div>
            )
        }
        {
            test.cartList.length > 0 &&
                <div className="resumenCompra">
                    <h2>Resumen de compra</h2>
                    <div className="resumenDeCompra">
                        <p>Subtotal:</p>
                        <p>$ {test.subtotal()}</p>
                    </div>
                    <div className="resumenDeCompra">
                        <p>Impuestos:</p>
                        <p>$ {test.impuestos()}</p>
                    </div>
                    <div className="resumenDeCompra">
                        <p>Descuento de impuestos:</p>
                        <p>- $ {test.impuestos()}</p>
                    </div>
                    <div className="total">
                        <p>Total:</p>
                        <p>$ {test.total()}</p>
                    </div>
                    <button onClick={confirmarCompra} className="buttonConfirmarCompra">Confirmar compra</button>
                </div>
        }
        </>
    )
}

export default Cart;