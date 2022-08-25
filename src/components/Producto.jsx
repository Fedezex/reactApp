import { color } from '@mui/system';
import React, { useState, useEffect } from 'react'

export default function Producto({ item, color}) {
  
  //console.log("imprimi por pantalla el producto");
  //let contador = 0
  const [contador, setContador] = useState(0)
  
  // montaje // nacimiento del componente
  useEffect (()=>{
    // todas las lineas que quiero que se hagan cuando nace el componente
    console.log('se montó el componente por primera vez');
  }, [])

  useEffect(()=>{
    if(contador >5){
      alert("no sumes mas")
    }
  })

  // cuando se desmonta el componente
  // useEffect (()=>{
  //   (()=>{

  //   })
  // }, [])

  return (
    <div style={{backgroundColor: color, marginLeft: "50px"}}>
      <h1>contador: {contador} </h1>
      <button onClick={()=>{
        //contador = contador + 1
        setContador(contador + 1)
        console.log(contador);
      }}>sumar contador</button>
      <h2>{item.name}</h2>
      <p>Precio ${item.price}</p>
      <p>{item.id}</p>
    </div>
  )
}
