import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import Home from'./assets/components/Navbar/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Details from './assets/components/Details/Details'

import ItemList from './assets/components/ItemList/ItemList';
import { CartProvider } from './assets/context/CartContext';
import Carrito from './assets/components/Carrito/Carrito';
import Checkout from './assets/components/Checkout/Checkout';



function App() {
  return (
    <>
      <div>
        <CartProvider>
          <BrowserRouter>
          <Navbar/> 
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Tienda/:id" element={<Details />} />
            <Route exact path="/productos/:categoria" element={<ItemList />} />
            <Route exact path="/carrito" element={<Carrito />} />
            <Route exact path="/checkout" element={<Checkout />} />

            </Routes> 
          
          </BrowserRouter>


        </CartProvider>

         

      </div>
    
    </>
  

   
    
  )
}

export default App
