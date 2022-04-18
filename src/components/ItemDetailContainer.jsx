import { useState, useEffect } from "react";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
const {products} = require('../utils/data');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {id} = useParams();

    useEffect(() => {   
        customFetch(2000, products.find(item => item.id === parseInt(id)))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
