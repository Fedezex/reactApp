import React from 'react'

export default function ListadoDeProductosContainer() {
    const productos = [
        {id: 1, name: "zapatos nike", precio: 100},
        {id: 2, name: "zapatos nike", precio: 100},
        {id: 3, name: "zapatos nike", precio: 100},
        {id: 4, name: "zapatos nike", precio: 100}]

        //fetch("pokeapi.com/pokes" / json)
        //normal //ordenador //paginar //decir el largo de cada pagina
  return (
    <ListadoDeProductosLayout productos={productos} />
  )
}
