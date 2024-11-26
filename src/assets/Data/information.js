const dataSucursales= [
    {
        id: 1,
        nombre:"Sucursal Lujan",
        direccion:"Deán Funes 5100, Dique Luján, B1623 Ingeniero Maschwitz, Provincia de Buenos Aires" ,
        descripcion:"Lun a Dom de 08:00 a 21:00",
    },
    {
        id: 2,
        nombre:"Sucursal Lomas de Zamora",
        direccion:"Gral. Frías 3201, B1836 Llavallol, Provincia de Buenos Aires" ,
        descripcion:"Lun a Dom de 08:00 a 22:00",
    },
    {
        id: 3,
        nombre:"Sucursal CABA",
        direccion:"Tronador 850, C1427 Cdad. Autónoma de Buenos Aires" ,
        descripcion:"Lun a Dom de 08:00 a 22:00",
    },
    {
        id: 4,
        nombre:"Sucursal Mendoza",
        direccion:"Balcarce 897, M5501 Godoy Cruz, Mendoza" ,
        descripcion:"Lun a Dom de 08:00 a 22:00",
    },
    {
        id:5 ,
        nombre:"Sucursal San Martin",
        direccion:"San Lorenzo 3773, B1653 Villa Ballester, Provincia de Buenos Aires" ,
        descripcion:"Lun a Sab de 08:00 a 22:00",
    },
]
export const getInfo=()=>{
    return  new Promise((res, rej) => {
     setTimeout(() => {
       res(dataSucursales)
       rej("error 404")
     }, 1000);
   });
       
 }