import React, { Component } from 'react'
import ItemList from '../ItemList/ItemList'

export class Tienda extends Component {
  render() {
    return (
      <div className='tiendita'>
        <h1>Bienvenido a nuestra tienda de comestibles</h1>
        <ItemList/>
        </div>
    )
  }
}

export default Tienda