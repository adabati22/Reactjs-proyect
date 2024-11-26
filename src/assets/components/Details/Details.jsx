import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import { getProduct } from '../../Data/data';


const Details = () => {

    const { id } = useParams();

    const [producto, setProducto] = useState([]);

    useEffect( () => {
      getProduct(id)
      .then(res=> setProducto(res))
      .catch(e=> console.error(e))
   
      
    }, [])
    


  return (
    <div className='cartita'>
        <h1>Detalles del producto</h1>
        <img src={producto.img} alt="" />
        <h2>
                {producto.nombre}   
            </h2>
            <p>{producto.descripcion}</p>
            <p>{producto.precio}$</p>
            
        
    </div>
  )
}

export default Details