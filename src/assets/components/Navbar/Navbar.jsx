import { Link } from 'react-router-dom'
import React from 'react'
import CartWidget from '../CartWinget/CartWidget'

const Navbar = () => {
  return (
    <div className='nav'>
     
      <Link to='/'><img className='gatito' src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-lindo-gato-chef_274619-811.jpg" alt="" /></Link>
    
      
       <h1 className='link'> <Link to='/productos/dulce'> Dulces </Link> </h1>
       <h1 className='link'> <Link to='/productos/salado'> Salados </Link> </h1> 
       <h1 className='link'> <Link to='/productos/bebida'> Bebidas </Link> </h1> 
    
       <Link to='/carrito'>  <CartWidget/>
       </Link>
       

    </div>
  )
}

export default Navbar