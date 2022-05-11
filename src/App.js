import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartContextProvider from './components/CartContext'

const App = () => {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route path='/producto/:idItem' element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
