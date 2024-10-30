import React from 'react'
import Button from '../Button/Button'

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
            <Button/>
        </div>
    )

  }
)
}
</div>
  )
}

export default ItemProduct