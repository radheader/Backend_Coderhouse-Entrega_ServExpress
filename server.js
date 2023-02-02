import express from "express";
import {ProductManager} from "./src/models/index.js";
const app = express();
const PORT = 8080;

const productManager = new ProductManager("src/models/products.txt");

app.use(express.json())
app.use(express.urlencoded({extended: true})) // Permite la busqueda de url compleja

// Se generan las rutas 

// Ruta para obtener todos los productos
app.get('/product',async (req,res)=>{
       
    const {category} = req.query;
    console.log(category)
    const productos = await productManager.getProducts()
    res.send(JSON.stringify(productos))
})

// Ruta para obtener el producto con un ID especifico

app.get('/product/:id', async (req,res)=>{
    const productos = await productManager.getProductByID(req.params.id)
    console.log(productos)
    res.send(JSON.stringify(productos))
})

app.get('/contacto', (req,res) =>{
    res.send('Hola, esta es la pagina de contacto')
})

app.get('/', (req,res)=> {
res.send("Hola, esta es la pagina de inicio")
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server listening on PORT ${PORT}`);
})