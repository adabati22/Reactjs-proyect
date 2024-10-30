import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import ItemList from './assets/components/ItemList/ItemList'

function App() {
  return (
    <>
      <div>
        <Navbar/> 
      </div>
      <ItemList text="Bienvenido a nuestra tienda de comestibles"/>
    </>
  

   
    
  )
}

export default App
