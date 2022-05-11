import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import db from '../utils/firebaseConfig';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {categoria} = useParams();

    useEffect(() => {
        const firestoreFetch = async () => {
            let q;
            if (categoria) {
                q = query(collection(db, "products"), where('categoria', '==', categoria));
            } else {
                q = query(collection(db, "products"), orderBy('nombre'));
            }
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }));
            return dataFromFirestore;
        };

        firestoreFetch(categoria)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [categoria]);

    return (
        <ItemList items={datos} />
    );
}

export default ItemListContainer;