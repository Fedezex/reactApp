import './App.css';
import NavBar from "./components/NavBar"
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';




function App() {

  return (
    <div>
      <NavBar />

      <ItemListContainer />
      {/* <Fetch /> */}
      <Footer/>
    </div>
  );
}

export default App;
