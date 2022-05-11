import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd}) => {
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
        if (count > initial + 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="itemCount">
            <button variant="text" onClick={decrement}>-</button>
            <p>{count}</p>
            <button variant="text" onClick={increment}>+</button>
            {
            stock && count
            ? <button variant="contained" onClick={() => onAdd(count)}>Añadir al carrito</button>
            : <button variant="contained" disabled>Añadir al carrito</button>
            }
        </div>
    );
}

export default ItemCount;