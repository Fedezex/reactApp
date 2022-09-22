import './App.css';
import React from 'react';
import NavBar from "./components/NavBar"
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './context/CartContext';


function App() {

  return (
    <>
      <BrowserRouter>
      <CartProvider>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path="/product/:productId" element={<ItemDetailContainer/>} />
        </Routes>
        </CartProvider>
      
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;
