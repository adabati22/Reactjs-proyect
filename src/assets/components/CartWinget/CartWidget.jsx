import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const { carrito  } = useContext(CartContext);
 
  return (
    <div>
        🛒
        <span>{carrito.length}</span>
    </div>
  )
}

export default CartWidget