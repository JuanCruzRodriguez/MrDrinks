import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Añadiste " + qty + " productos al carrito");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
        item && item.imagen ? 
            <div className="divProducto">
                <div className="tituloImagen">
                    <h3 className="tituloProducto">{item.nombre}</h3>
                    <img src={item.imagen.url} alt={item.imgAlt} className="imagenProducto"/>
                </div>
                <div className="precioStock">
                    <p className="descripcionProducto">{item.descripcion}</p>
                    <h3 className="precioProducto">{item.precio}</h3>
                    {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} className="stockProducto"/>
                    : <Checkout />
                    }
                    <h3 className="stockProducto">Quedan disponibles {item.stock} unidades en stock</h3>
                </div>
            </div>
        : <p>Cargando...</p>    
        }
        </>
    );
}

export default ItemDetail;