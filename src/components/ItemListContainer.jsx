import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import Title from './Title'
import ItemList from './ItemList'

const game = [
  {id:1, image: "https://argengamestore.com/wp-content/uploads/2020/10/capsule_616x353.jpg", title: "Baldur's Gate 3", text: "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto."}, {id:2, image: "https://argengamestore.com/wp-content/uploads/2021/11/capsule_616x353-5.jpg", title: "Elden Ring", text: "Una historia muy profunda contada en fragmentos. Un drama épico en el que las motivaciones de cada personaje se encuentran en las Tierras Intermedias."}, {id:3, image: "https://argengamestore.com/wp-content/uploads/2016/01/capsule_616x353-3.jpg", title: "Darkest Dungeon", text: "Darkest Dungeon es un desafiante y oscuro juego de rol gótico en mazmorras y por turnos que gira en torno al esfuerzo psicológico de la aventura."}, {id: 4, image: "https://argengamestore.com/wp-content/uploads/2015/05/capsule_616x353.jpg", title: "The Witcher 3", text:"RPG de mundo abierto basado en la narrativa y ambientado en un universo de fantasía impresionante, repleto de decisiones significativas y consecuencias trascendentales."}
]


export const ItemListContainer = ({texto}) => {
  const [data, setData] = useState ([])

  useEffect(() => {
    const getData = new Promise(resolve =>{
      setTimeout(() =>{
       resolve(game) 
      }, 4000)
    })
  getData.then(res => setData(res))
  }, [])
  

  
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }
  
  
  
  return (
    <>
    <Title greeting={texto}/>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    <ItemList data = {data} />
    </>
  )
}

export default ItemListContainer
