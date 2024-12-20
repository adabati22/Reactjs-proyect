import React, { Component, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';


const  Carrito = () =>  {

    const { carrito, eliminarItem, vaciarCarrito } =  useContext(CartContext);



    return (
        <div className='carrito-container'>
        {
            carrito.length == 0 ? <h2>Carrito vacio</h2>
            
            :
            <>
          {
              carrito.map( (producto, idx) => (
                  <div className='cartCarrito' key={idx}>
                      <br />
                      <img src={producto.item.img} alt="" />
                      <h3>{producto.item.nombre}</h3>
                      <p>Precio x unidad: ${producto.item.precio}</p>
                      <p>Cantidad: {producto.cantidad}</p>    
                      <p>Total: ${producto.item.precio * producto.cantidad}</p>
                      <p onClick={ () => eliminarItem(producto) } >❌</p>
                  </div>
              ) )

          }
          

          <h4>Total a Pagar: 
            ${
                carrito.reduce( ( acc, current ) => acc + current.item.precio * current.cantidad   ,  0)
            }
            </h4>

            <div>
                <button onClick={ vaciarCarrito }>Vaciar Carrito</button>
                <Link to="/checkout"><button> Finalizar compra</button></Link> 
            </div>
            </>
        }

        </div>
    )


}

export default Carrito