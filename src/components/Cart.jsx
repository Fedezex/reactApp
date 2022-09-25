import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'

const Cart = () => 
{
  const {cart, totalPrice, clearCart } = useCartContext()

  const order = {
    buyer: {
      name:'Example',
      email: 'example@example.com',
      phone: 123456,
      address: 'FakeStreet'
    },
    items: cart.map(product => ({ id: product.item.id, title: product.item.title, price: product.item.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
    .then(({ id }) => console.log(id))
  }

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
      <button onClick={clearCart}>Vaciar Carrito</button> <br />
      <button onClick={handleClick}>Generar Compra</button>
    </>
  )
}

export default Cart