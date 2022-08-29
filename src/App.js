import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Footer from './components/Footer';
import Producto from './components/Producto';
import Bienvenida from './components/Bienvenida';
import ItemListContainer from './components/ItemListContainer';
import ItemListLayout from './components/ItemListLayout';
import ItemCount from './components/ItemCount';
import Promises from './Test/Promises';


function App() {

  let producto1 = {id: 1, name: "zapatos Nike", price: 100}
  let producto2 = {id: 2, name: "zapatos Adidas", price: 150}
  let producto3 = {id: 3, name: "zapatos Reebok", price: 175}



  return (
    <div>
      <NavBar />
      
      <Bienvenida />

      <Promises/>
      <ItemListContainer saludo="Hola Mundo!"/>
      
      <Producto item={producto1} color={"coral"}/>
      {/* <Producto item={producto2} color={"red"}/> */}
      <Producto item={producto3} color={"blue"}/>
      <Footer/>
    </div>
  );
}

export default App;
