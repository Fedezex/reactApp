import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

const game = [
  {id:1, image: "https://argengamestore.com/wp-content/uploads/2020/10/capsule_616x353.jpg", title: "Baldur's Gate 3", text: "Reúne a tu grupo y vuelve a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto."}
]

export const ItemDetailContainer = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const getData = new Promise(resolve =>{
      setTimeout(() =>{
        resolve(game)
      }, 2000)
    })
  
   getData.then(res => setData(res))
  }, [])
  

  return (
    <ItemDetail data={data} />
  )

}

export default ItemDetailContainer;