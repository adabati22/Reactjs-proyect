import { Link } from 'react-router-dom'
import React from 'react'
import CartWidget from '../CartWinget/CartWidget'

const Navbar = () => {
  return (
    <div className='nav'>
     
      <Link to='/'><img className='gatito' src="https://img.freepik.com/vector-premium/ilustracion-dibujos-animados-lindo-gato-chef_274619-811.jpg" alt="" /></Link>
    
      
       <h1 className='link'> <Link to='Contacto'> Contacto </Link> </h1>
       <h1 className='link'> <Link to='Tienda'> Tienda </Link> </h1> 
    
      
        <CartWidget/>


    </div>
  )
}

export default Navbar