import React, { useContext, useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { doc,getDoc} from "firebase/firestore"
import {db} from "../../../firebase/firebase"
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const Details = () => {

    const { id } = useParams();

    const [producto, setProducto] = useState([]);

    const [cantidad, setCantidad] = useState(0)

    const { carrito , agregarCarrito  } = useContext(CartContext);

    useEffect( () => {
      const docRef= doc(db,"productos",id)
      getDoc(docRef)
      .then((resp) => {
        setProducto(
          {...resp.data(),id:resp.id}
        )
      }
    )
      
    }, [])

    const handlePlus = () => {
      setCantidad(cantidad+1);
    }

    const handleMin = () => {
      cantidad > 0 && setCantidad(cantidad-1)
    }
    
    const handleSubmit = (producto, cantidad) => {
      if(cantidad > 0){
        agregarCarrito(producto , cantidad)
        setCantidad(0)
      }
    }


  return (
    <div className='cartita'>
        <h1>Detalles del producto</h1>
        <img src={producto.img} alt="" />
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>{producto.precio}$</p>
        <ItemCount handleMin={handleMin} cantidad={cantidad} handlePlus={handlePlus}/>
        <button className='botona' onClick={() => handleSubmit(producto, cantidad) }>Agregar al Carrito</button>
        
    </div>
  )
}

export default Details