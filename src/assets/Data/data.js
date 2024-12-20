export const dataProducts= [
    {
        id: 1,
        nombre:"Jugo de Naranja",
        precio:3000 ,
        categoria:"bebida",
        descripcion:"jugo de Naranjas. Tetrabrick de 500cm3",
        img:"https://arcordiezb2c.vteximg.com.br/arquivos/ids/169397/Jugo-Naranja-Tetra-Citric-500-Cc-1-10782.jpg?v=637825990055100000",
        cantidad: 1
      
    },
    {
        id: 2,
        nombre:"Ñoquis",
        precio:3000 ,
        categoria:"salado",
        descripcion:" Ñoquis de papa con sala fileto",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqVsM4ehlpors9YI3wDmpx95gTZtz2UaJ8Q&s",
        cantidad: 1
        
    },
    {
        id: 3,
        nombre:"Alfajores de maicena",
        precio:3500 ,
        categoria:"dulce",
        descripcion:" galletas de almidon de maiz rellenas de dulce de leche con topping de coco rallado.Paquete por 6 unidades",
        img:"https://azucarledesma.com/wp-content/uploads/2022/05/20231108-AlfajoresMaicena.jpg",
        cantidad: 1
    },
    {
        id: 4,
        nombre:"Canelones",
        precio:3500 ,
        categoria:"salado",
        descripcion:"Relleno de pollo y verdura con salsa bechamel",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzBd7-GETMHvIppotnVgmX-zIn4XaGf1Fe-fM5LohZfmd_Yw_ZS-rXWrEC5TI4fsGzYE&usqp=CAU",
        cantidad: 1
        
    },
    {
        id: 5,
        nombre:"Pan",
        precio:700 ,
        categoria:"salado",
        descripcion:"Bolsa de 500 gramos",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWDvNzRRIqH_NPQB8jTPBC5mnzF1E8SV2Q&s",
        cantidad: 1,
    },
    {
        id: 6,
        nombre:"Bubble Tea Lady Boba",
        precio:3500 ,
        categoria:"bebida",
        descripcion:"bebida a base de te con leche y esferas de tapioca. Lata de 315cm3",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa89jzApdkKWiMGQ4jYgFiVgd7F48JdvHQJQ&s",
        cantidad: 1
        
    },
    {
        id: 7,
        nombre:"Tarta ",
        precio:4200 ,
        categoria:"salado",
        descripcion:"Rellena de espinaca,ricota y huevo",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIz7GliBx7XxFd19a62fkmKi5cjjHk1RNxQ&s",
        cantida: 1
    },
    {
        id: 8,
        nombre:"Galletas",
        precio:1500 ,
        categoria:"dulce",
        descripcion:"Sabor vainilla con chips de chocolate",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UfaRoKp5skS13ANjLKV6jybeANL9xbDDqA&s",
        cantidad: 1
    },
    {
       id: 9,
       nombre:"limonada",
        precio:1900 ,
        categoria:"bebida",
        descripcion:"bebida a base de limon,menta y jengibre. Botella de 500cm3.",
        img:"https://cdn.shopify.com/s/files/1/0060/7512/files/limonada_casera_1024x1024.jpg?v=1691089982",
        cantidad: 1
    },
    {
        id: 10,
        nombre:"te helado",
        precio:4500 ,
        categoria:"bebida",
        descripcion:"bebida a base de te verde sabor durazno. Botella de 500cm3",
        img:"https://www.smartnfinal.com.mx/wp-content/uploads/2016/08/9025-TE-HELADO-LIMON-FUZE-TEA-600-ML.jpg",
        cantidad: 1


    },
    {
        id: 11,
        nombre:"Torta Rogel",
        precio:7800 ,
        categoria:"dulce",
        descripcion:"bizcochos hojaldrados cubiertos de dulce de leche con topping de merengue suizo. Peso 1 kg (aprox.).",
        img:"https://acdn.mitiendanube.com/stores/001/203/846/products/rogel-tantesara-6778cbcc09a3824e9516224939970606-1024-1024.jpg",
        cantidad: 1
        

    },
    {
        id: 12,
        nombre:"Selva Negra",
        precio: 8500 ,
        categoria:"dulce",
        descripcion:"bizcochuelo de chocolate,crema chantilly y cerezas en almibar. Peso 1.5 kg",
        img:"https://res.cloudinary.com/riqra/image/upload/v1660168022/sellers/tortas-gaby/products/vjxkqyyih2n7hj5t6avf.png",
        cantidad: 1

    }

    
]

export const getProduts=()=>{
   return  new Promise((res, rej) => {
    setTimeout(() => {
      res(dataProducts)
      rej("no hay mas")
    }, 1000);
  });
      
}


export const getProduct=(id)=>{
    return  new Promise((res, rej) => {
     setTimeout(() => {
       res(dataProducts.find(item => item.id == id))
       rej("no hay mas")
     }, 1);
   });
       
 }


