import React, { useEffect, useState } from 'react'
import ItemProduct from './ItemProduct'
import{  collection, getDocs,query,where} from 'firebase/firestore';
import {db} from "../../../firebase/firebase";
import { useParams } from 'react-router-dom';


const ItemList = ({text}) => {
    const [productos,setProductos]= useState([]);
    const categoria= useParams().categoria
 
    useEffect(()=>{
      const productosRef = collection(db, "productos");
      const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;



      getDocs(q)
      .then((resp)=>{

        setProductos(
          resp.docs.map((doc)=> {
            return{...doc.data(),id:doc.id}
          })
        )
      })
    },[categoria])
   
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