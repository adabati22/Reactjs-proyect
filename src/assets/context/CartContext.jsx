import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState(carritoInicial);


    const agregarCarrito = ( item, cantidad ) =>{

        const itemAgregado = {item, cantidad};
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find( producto => producto.item.id === itemAgregado.item.id );

        if(estaEnElCarrito){
            estaEnElCarrito.cantidad += cantidad
        }else{
            nuevoCarrito.push(itemAgregado)
        }



        setCarrito(nuevoCarrito)
        localStorage.setItem("carrito", JSON.stringify(carrito));

        

    }

    const eliminarItem = ({item}) => {
        const nuevoCarrito = carrito.filter( producto => producto.item.id !== item.id )

        setCarrito(nuevoCarrito)
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    const vaciarCarrito = () => {
        setCarrito([])
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }


    return (
        <CartContext.Provider value={{
            carrito,
            agregarCarrito,
            eliminarItem,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )

}