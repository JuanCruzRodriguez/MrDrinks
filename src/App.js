import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/producto/:id' element={<ItemDetailContainer />} />
          <Route path='/Cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
