import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'

const Cart = () => 
{
  const {cart, totalPrice, clearCart } = useCartContext()

  if (cart.length === 0) {

    return (
      <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Comprar</Link>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.item.id} product={product} />)
      }
      <p>
        Total: {totalPrice()}
      </p>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </>
  )
}

export default Cart