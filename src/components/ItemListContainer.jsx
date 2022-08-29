import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import Title from './Title'
import ItemList from './ItemList'

const game = [
  {id:1, image: "https://argengamestore.com/wp-content/uploads/2020/10/capsule_616x353.jpg", title: "Baldur's Gate 3"}, {id:2, image: "https://argengamestore.com/wp-content/uploads/2021/11/capsule_616x353-5.jpg", title: "Elden Ring"}, {id:3, image: "https://argengamestore.com/wp-content/uploads/2016/01/capsule_616x353-3.jpg", title: "Darkest Dungeon"}, {id: 4, image: "https://argengamestore.com/wp-content/uploads/2015/05/capsule_616x353.jpg", title: "The Witcher 3"}
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
