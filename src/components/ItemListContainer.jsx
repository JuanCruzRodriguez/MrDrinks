
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const { products } = require('../utils/data');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {
        if (categoria === undefined) {
            customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        } else {    
            customFetch(2000, products.filter(item => item.categoria === categoria))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
    }, [categoria]);

    const onAdd = (count) => {
        alert(`Añadiste ${count} productos al carrito`);
    }
    return (
        <>
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;