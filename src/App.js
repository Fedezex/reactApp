import './App.css';
import NavBar from "./components/NavBar"
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Test from './Test/Test';




function App() {

  return (
    
    <>
      <BrowserRouter>
      {/* AQUI VAN LOS COMPONENTES PRESENTES EN TODAS LAS RUTAS */}
      <NavBar/>

        <Routes>
        <Route path='/test' element={<Test/>} />
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path="/product/:productId" element={<ItemDetailContainer/>} />
        </Routes>
        {/* EL FOOTER TAMBIEN QUEDA AFUERA DE LAS RUTAS */}
      
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
