import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

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
                    <h3 className="precioProducto">{item.precio}</h3>
                    <ItemCount stock={item.stock} className="stockProducto"/>
                    <h3 className="stockProducto">Quedan disponibles {item.stock} unidades en stock</h3>
                </div>
            </div>
        : <p>Cargando...</p>    
        }
        </>
    );
}

export default ItemDetail;