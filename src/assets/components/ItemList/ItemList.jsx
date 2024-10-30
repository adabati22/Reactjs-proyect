import React, { useEffect, useState } from 'react'
import { getProduts } from '../../Data/data'
import ItemProduct from './ItemProduct'


const ItemList = ({text}) => {
    const [productos,setProductos]= useState([])

    useEffect(()=>{
      getProduts()
      .then(res=> setProductos(res))
      .catch(e=> console.error(e))
      .finally(console.log("se resolvio la promesa"))
    },[])
   
  return (
    <>
      <div>{text}</div>

      <div>
        <ItemProduct productos={productos}/>
      
      </div>
    </>
    
  )
}

export default ItemList