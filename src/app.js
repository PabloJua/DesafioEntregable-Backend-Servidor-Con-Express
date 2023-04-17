const express = require('express');
const ProductManager = require('../desafio.js'); // Se importa la clase ProductManager desde un archivo local desafio.js. Esta clase es responsable de cargar y administrar los datos de los productos.
const PUERTO = 3500;
const server = express(); 

server.use(express.urlencoded({extended:true})); // Analizar los datos de formulario enviados en una solicitud HTTP.

server.use(express.json()); // Analizar los datos JSON enviados en una solicitud HTTP.

server.get('/saludo', (req, res) => { // get (obtener)
    res.send('Esta es la respuesta del servidor express')
});

// app.get('/products', async(req, res) => {
//     const límite = req.query.limite; // Soporte para recibir por query param el valor ?limit= el cual recibirá un límite de resultados.
//     // Obtiene el valor del parámetro de consulta limite de la solicitud.
//     const productManager = new ProductManager(); // Instancia de la clase ProductManager
//     try {
//        let products = await productManager.getProducts();
       
//        if(limite) {

//        }

//     } catch (error) {
        
//     }
// })

// app.get('/products/:pid' , async(req, res) => {
//     const productManager = new ProductManager();
//     const productId = req.params.pid; // Recupera el valor del parámetro de ruta "pid" de la solicitud utilizando la propiedad "params" del objeto "req".
//     // Debe recibir por req.params el pid (product Id),
//     try {
//         await productManager.load();
//         const product = await productManager.getProductId(parseInt(productId));
        
//         if (!product) {
//             return res.send(`No se encontro el producto con el ${productId}`)
//         }else{
//             return res.send(product);
//         }
//     } catch (error) {
//         return res.send(error);
//     }
// });

server.listen(PUERTO, () => {
    console.log(`Servidor inicializado en puerto ${PUERTO}`);
});

