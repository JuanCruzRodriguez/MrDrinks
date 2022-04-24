import { Link } from "react-router-dom";

const Item = ({id, nombre, imagen, imgAlt, precio}) => {
    return (
            <div className="productos" key={id}>
                <div className="cardProducto">
                    <h3>{nombre}</h3>
                    <Link to={`/producto/${id}`}><img src={imagen.url} alt={imgAlt} /></Link>
                    <h3>$ {precio}</h3>
                </div>
            </div>
    );
}

export default Item;