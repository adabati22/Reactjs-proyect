import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'

import Home from'./assets/components/Navbar/Home'
import Tienda from'./assets/components/Navbar/Tienda'
import Contacto from'./assets/components/Navbar/Contacto'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './assets/components/Details/Details'




function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/> 
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Tienda" element={<Tienda />} />
          <Route exact path="/Tienda/:id" element={<Details />} />
          

          <Route exact path="/Contacto" element={<Contacto />} />
          </Routes> 
        
        </BrowserRouter>

      </div>
    
    </>
  

   
    
  )
}

export default App
