import React from 'react'

const ItemCount = ({handleMin , cantidad, handlePlus}) => {
  return (
    <>
      <div className='botoncard'>
        <button onClick={handleMin}>-</button>
        <p>{cantidad}</p>
        <button onClick={ handlePlus }>+</button>
      </div>
    </>
  )
}

export default ItemCount