import { Link } from "react-router-dom";
import { useContext} from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const test = useContext(CartContext);

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
                <div>
                    <p>Resumen de compra</p>
                    <div>
                        <p>Subtotal</p>
                        {/* <p>{test.subtotal()}</p> */}
                    </div>
                    <div>
                        <p>Impuestos</p>
                        {/* <p>{test.impuestos()}</p> */}
                    </div>
                    <div>
                        <p>Descuento de impuestos</p>
                        {/* <p>- {test.impuestos()}</p> */}
                    </div>
                    <div>
                        <p>Total</p>
                        {/* <p>{test.total()}</p> */}
                    </div>
                    <button>Confirmar compra</button>
                </div>
        }
        </>
    )
}

export default Cart;