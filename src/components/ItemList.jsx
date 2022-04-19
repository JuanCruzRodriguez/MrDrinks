import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <div className='productos'>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} stock={item.stock}/>)
            : <p>Cargando...</p>
        }
        </div>
    );
}

export default ItemList;
