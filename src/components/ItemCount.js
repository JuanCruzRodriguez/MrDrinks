import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 10, initial = 1}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    const onAdd = () => {
        alert(`Añadiste al carrito ${count} productos`);
    }
    

    return (
        <div className="itemCount">
            <button variant="text" onClick={decrement}>-</button>
            <p>{count}</p>
            <button variant="text" onClick={increment}>+</button>
            {
            stock
            ? <button variant="contained" onClick={onAdd}>Añadir al carrito</button>
            : <button variant="contained" disabled>Agregar al carrito</button>
            }
        </div>
    );
}

export default ItemCount;