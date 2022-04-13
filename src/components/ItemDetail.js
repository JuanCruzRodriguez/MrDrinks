import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    console.log(item.nombre);

    return (
        <>
        {
        item && item.imagen ? 
            <div>
                <h3>{item.nombre}</h3>
                <img src={item.imagen} alt={item.imgAlt} />
                <h3>{item.precio}</h3>
                <ItemCount />
            </div>
        : <p>cargando...</p>    
        }
        </>
    );
}

export default ItemDetail;