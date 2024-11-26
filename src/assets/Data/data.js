export const dataProducts= [
    {
        id: 1,
        nombre:"Huevos",
        precio:500 ,
        descripcion:"Carton de 6 unidades",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtmNvTLpYqbnQ-VS7cYvPB6De1S_Lcb2nrA&s",
        cantidad: 1
    },
    {
        id: 2,
        nombre:"Azucar",
        precio:800 ,
        descripcion:"Paquete de 500 gramos",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf0hNmzl6Gg8BIUDeY5-E1-uBpMgHqCNSKtA&s",
        cantidad: 1
    },
    {
        id: 3,
        nombre:"Harina",
        precio:400 ,
        descripcion:" Harina orgánica de 250 gramos",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWv6I4TF_HmhuFO85JWSrcOhn7lDpO3uFtg&s",
        cantidad: 1
    },
    {
        id: 4,
        nombre:"Galletas",
        precio:1500 ,
        descripcion:"Sabor vainilla con chips de chocolate",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UfaRoKp5skS13ANjLKV6jybeANL9xbDDqA&s",
        cantidad: 1
    },
    {
        id: 5,
        nombre:"Pan",
        precio:700 ,
        descripcion:"Bolsa de 500 gramos",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLpWDvNzRRIqH_NPQB8jTPBC5mnzF1E8SV2Q&s",
        cantidad: 1
    },
    {
        id: 6,
        nombre:"Ñoquis",
        precio:3000 ,
        descripcion:" Ñoquis de papa con sala fileto",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqVsM4ehlpors9YI3wDmpx95gTZtz2UaJ8Q&s",
        cantidad: 1
    },
    {
        id: 7,
        nombre:"Tarta ",
        precio:4200 ,
        descripcion:"Rellena de espinaca,ricota y huevo",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIz7GliBx7XxFd19a62fkmKi5cjjHk1RNxQ&s",
        cantida: 1
    },
    {
        id: 8,
       nombre:"Canelon",
        precio:3500 ,
        descripcion:"Relleno de pollo y verdura con salsa bechamel",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzBd7-GETMHvIppotnVgmX-zIn4XaGf1Fe-fM5LohZfmd_Yw_ZS-rXWrEC5TI4fsGzYE&usqp=CAU",
        cantidad: 1
    },
    {
       id: 9,
       nombre:"Torta",
        precio:1900 ,
        descripcion:"Sabor chocolate con relleno de mousse",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpXkj0g8lgazuRrL4NYoMuSuKTkjyEX6d0YQ&s",
        cantidad: 1
    },
    {
        id: 10,
        nombre:"Guiso",
        precio:4500 ,
        descripcion:"Carne estofada con papa y zanahoria",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMI30mJLzfzZ3bJaMFZDLNj60jJRhymAVeLQ&s",
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


