import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() => {   
        const firestoreFetchOne = async () => {
            const docRef = doc (db, "products", idItem);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                return {
                    id: idItem,
                    ...docSnap.data()
                }
            } else {
                console.log("No se encontró el producto");
            }
        }
        firestoreFetchOne()
            .then (result => setDato (result))
            .catch (error =>console.log (error))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
