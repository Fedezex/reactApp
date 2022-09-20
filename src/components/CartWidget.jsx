import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from '../context/CartContext';


export const CartWidget = () => {
const {totalProducts} = useCartContext()
  

  return (
    <div>
      <ShoppingCartIcon color="white"/>
      <span>{totalProducts() || ''}</span>
      </div>
  )
}

export default CartWidget