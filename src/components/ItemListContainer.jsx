import React, { Fragment } from 'react'
import ItemListLayout from './ItemListLayout'

// export default function ItemListContainer() {
//     const productos = [
//         {id: 1, name: "zapatos nike", precio: 100},
//         {id: 2, name: "zapatos adidas", precio: 100},
//         {id: 3, name: "zapatos reebok", precio: 100},
//         {id: 4, name: "zapatos under-armor", precio: 100}]

//         //fetch("pokeapi.com/pokes" / json)
//         //normal //ordenador //paginar //decir el largo de cada pagina
//   return (
//     <ItemListLayout productos={productos} />
//   )
// }

const ItemListContainer = (props) => {
  return (
    <Fragment>
      <h2 style={{marginLeft: "50px"}}>{props.saludo}</h2>
    </Fragment>
  )
}

export default ItemListContainer
