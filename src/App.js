import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"

function App() {

  //let i = 0;
  //i = i + 1;
  //i++;

  // if (i==0) {
  //   console.log('increible es cero');
  // }else{
  //   console.log('la i no es cero');
  // }

  // i == 0 ? console.log('increible, es cero!') : console.log('oh no! no es cero!');

  // console.log(i);

  // const myobj = {id: 100, nombre: "Fede"}
  // myobj = {...myobj, edad: 39}

  //console.log(myobj);

  // let myarray = [1,2,3,4,5]
  // myarray = [...myarray, 6]
  // console.log(myarray);

  // const persona = {id: 100, name: "Fede", edad: 39}

  // const { name, id } = persona

  // console.log(persona);
  // console.log(id);

  // function sumar (a,b){
  //   return a + b
  // }

  // const sumar2 = (a,b) => a + b

  // en React se escribe (a,b) => a + b


    // const myarray = [1,2,3,4,5]
    // myarray.forEach(item=>{
    //   console.log(item);
    // })

//  let negro = {color: "#000000"}
//  let blanco = {color: "#ffffff"}
//  let miestilo;

//  if (1==1){
//   miestilo=negro
//  }else{
//   miestilo=blanco
//  }
let x = "Hola"
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{x}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
