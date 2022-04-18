import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/producto/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
