
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
const { products } = require('../utils/data');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, []);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }
    return (
        <>
            <ItemList items={datos} />
            <ItemCount stock={4} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;