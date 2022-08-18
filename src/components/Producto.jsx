import { color } from '@mui/system';
import React from 'react'

export default function Producto({ item, color, alertHolaMundo }) {
    
    //alertHolaMundo()
  return (
    <div style={{backgroundColor: color, marginLeft: "50px"}}>
      <h2>{item.name}</h2>
      <p>{item.price}</p>
      <p>{item.id}</p>
    </div>
  )
}
