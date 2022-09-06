import './App.css';
import NavBar from "./components/NavBar"
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';




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
          <Route path='/' element={<ItemListContainer/>} />
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
