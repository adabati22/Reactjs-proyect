import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase'


const Checkout = () => {

const { carrito , vaciarCarrito} = useContext(CartContext);

const [ pedidoId, setPedidoId ] = useState("");

const [ nombre , setNombre ] = useState('');
const [ email , setEmail ] = useState('');
const [ phone , setPhone ] = useState('');


const handleSubmit = (e) => {
    e.preventDefault()
    const usuario = {
        nombre,email, phone
    }

    const pedidosRef = collection(db, "ordenes");

    addDoc( pedidosRef, {usuario , carrito } ).then( (doc) => {setPedidoId(doc.id); vaciarCarrito()} )

}

  return (
    <div>

        {
            carrito.length <= 0 ? <h2>Gracias por su compra</h2>

            :
            <div>
                <h2>Finalizar compra</h2>
                <form onSubmit={ handleSubmit }>
                    <input required type="text" placeholder='Ingresá tu nombre' value={nombre} onChange={ (e)=> setNombre(e.target.value) }/>
                    <input required type="email" placeholder='Ingresá tu e-mail'  value={email} onChange={ (e)=> setEmail(e.target.value) }/>
                    <input required type="phone" placeholder='Ingresá tu teléfono'  value={phone} onChange={ (e)=> setPhone(e.target.value) }/>

                    <button type='submit'>Comprar</button>
                </form>

            </div>

        }





    </div>
  )
}

export default Checkout