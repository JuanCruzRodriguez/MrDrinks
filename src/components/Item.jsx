const Item = ({id, nombre, imagen, imgAlt, precio}) => {
    return (
        <div className="productos" key={id}>
            <div className="cardProducto">
                <h3>{nombre}</h3>
                <img src={imagen.url} alt={imgAlt} />
                <h3>{precio}</h3>
            </div>
        </div>
    );
}

export default Item;