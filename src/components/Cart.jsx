import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
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
                        ? <button onClick={test.removeList}>Borrar todos los productos</button>
                        : <p>El carrito esta vacío</p>
                    }
            </div>
        </div>
        {
            test.cartList.length > 0 ? 
            test.cartList.map(item => 
            <div key={item.idItem} className="productoCarrito">
                <img src={item.imagenItem} alt={item.imgAltItem} />
                <p>{item.nombreItem}</p>
                <p>Cantidad: {item.qtyItem}</p>
                <p>{item.precioItem} c/u </p> 
                <button className="buttonBorrarProducto" onClick={() => test.deleteItem(item.idItem)}>X</button>
            </div>
            )
            : <div></div>
        }
        </>
    )
}

export default Cart;