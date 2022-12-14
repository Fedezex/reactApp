import React, { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Title from './Title'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

// const games = [
//   {id:1, price:2199, image: "https://argengamestore.com/wp-content/uploads/2020/10/capsule_616x353.jpg", title: "Baldur's Gate 3", text: "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto.", category:"rpg"}, {id:2, price:5999, image: "https://argengamestore.com/wp-content/uploads/2021/11/capsule_616x353-5.jpg", title: "Elden Ring", text: "Una historia muy profunda contada en fragmentos. Un drama épico en el que las motivaciones de cada personaje se encuentran en las Tierras Intermedias.", category:"action"}, {id:3, price:599, image: "https://argengamestore.com/wp-content/uploads/2016/01/capsule_616x353-3.jpg", title: "Darkest Dungeon", text: "Darkest Dungeon es un desafiante y oscuro juego de rol gótico en mazmorras y por turnos que gira en torno al esfuerzo psicológico de la aventura.", category:"rpg"}, {id:4, price:1199, image: "https://argengamestore.com/wp-content/uploads/2015/05/capsule_616x353.jpg", title: "The Witcher 3", text:"RPG de mundo abierto basado en la narrativa y ambientado en un universo de fantasía impresionante, repleto de decisiones significativas y consecuencias trascendentales.", category:"action"}
// ]


export const ItemListContainer = ({texto}) => {
  const [data, setData] = useState ([])

  const { categoryId } = useParams ()

  useEffect(() => {
    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'products')
    
    
    if(categoryId){
    const queryFilter = query(queryCollection, where('category', '==', categoryId))
    getDocs(queryFilter)
    .then(res=> setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
      
    }else {
    getDocs(queryCollection)
    .then(res=> setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
    }
  
  }, [categoryId])
  
  
  return (
    <>
    <Title greeting={texto}/>
    <ItemList data = {data} />
    </>
  )
}

export default ItemListContainer
