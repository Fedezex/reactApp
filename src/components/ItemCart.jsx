import React from 'react'
import { useCartContext } from '../context/CartContext';
import '../components/ItemCart.css';

const ItemCart = ({ product }) => {
const {removeProduct} = useCartContext()
    return (
        <div className='ItemCart'>
            <img src={product.item.image} alt={product.item.title} />
            <div>
            <p>Titulo: {product.item.title}</p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio unitario: {product.item.price}</p>
            <p>Subtotal: ${product.quantity * product.item.price}</p>
            <button onClick={() => removeProduct(product.item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart