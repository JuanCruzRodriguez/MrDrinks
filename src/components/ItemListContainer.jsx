import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/firestoreFetch';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {
        firestoreFetch(categoria)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [categoria]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <ItemList items={datos} />
    );
}

export default ItemListContainer;