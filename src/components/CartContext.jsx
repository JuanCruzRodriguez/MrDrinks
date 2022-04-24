import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const añadirAlCarrito = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imagenItem: item.imagen.url,
                    imgAltItem: item.imgAlt,
                    nombreItem: item.nombre,
                    precioItem: item.precio,
                    qtyItem: qty
                }
            ]);
        } else {
            found.qtyItem += qty;
        }
    }
    
    const eliminarList = () => {
        setCartList([]);
    }

    const eliminarItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCartList(result);
    }

    const notificacionCantidad = () => { 
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const totalItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].precioItem * cartList[index].qtyItem;
    }

    const subtotal = () => {
        let totalItem = cartList.map(item => totalItem(item.idItem));
        return totalItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const impuestos = () => {
        return subtotal() * 0.21;
    }

    const total = () => {
        return subtotal();
    }

    return (
        <CartContext.Provider value={{cartList, añadirAlCarrito, eliminarList, eliminarItem, notificacionCantidad, totalItem, subtotal, impuestos, total}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;