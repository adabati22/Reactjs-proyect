import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const ItemProduct = ({productos}) => {
    console.log(productos.map (e=>e.nombre))    
  return (
    <div className='cardConteiner'>
    {productos.map ((e)=> {
    return(
        <div className='card'>
            <img src={e.img} alt="" />
            <h2>
                {e.nombre}   
            </h2>
            <p>{e.precio}$</p>
            {/* <Button texto={"Detalle"}/>  */}
            <Link to={`/Tienda/${e.id}`}><span>Más detalles</span></Link>
            

            <Button texto={"Agregar"}/>
        </div>
    )

  }
)
}
</div>
  )
}

export default ItemProduct