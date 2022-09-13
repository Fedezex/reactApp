import './App.css';
import NavBar from "./components/NavBar"
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import CartWidget from './components/CartWidget';
import Test from './Test/Test';




function App() {

  return (
    
    // <div>
    //   <NavBar />

    //   <ItemListContainer />
    //   {/* <Fetch /> */}
    //   <Footer/>
    // </div>
    
    <>
      <BrowserRouter>
      {/* AQUI VAN LOS COMPONENTES PRESENTES EN TODAS LAS RUTAS */}
      <NavBar/>

        <Routes>
        <Route path='/test' element={<Test/>} />
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/cart' element={<CartWidget/>} />
          <Route path="/category/:idcategory" element={<ItemListContainer/>} />
          <Route path="/product/:idproduct" element={<ItemDetailContainer/>} />
        </Routes>
        {/* EL FOOTER TAMBIEN QUEDA AFUERA DE LAS RUTAS */}
      
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
