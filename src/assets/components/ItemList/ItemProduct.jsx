import React from 'react'
import { Link } from 'react-router-dom'

const ItemProduct = ({productos}) => {
  return (
    <div className='cardConteiner'>
    {productos.map ((e , index)=> {
    return(
        <div key={index} className='card'>
            <img src={e.img} alt="" />
            <h2>
                {e.nombre}   
            </h2>
            <p>{e.precio}$</p>
            {/* <Button texto={"Detalle"}/>  */}
            <Link to={`/Tienda/${e.id}`}><span>Más detalles</span></Link>
            

          
        </div>
    )

  }
)
}
</div>
  )
}

export default ItemProduct