import Item from './Item'
import React from 'react'

const ItemList = ({data = []}) => {
    return (
       data.map(game => <Item key={game.id} info = {game}  />)
    )
}

export default ItemList