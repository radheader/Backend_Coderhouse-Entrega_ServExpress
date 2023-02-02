/*class ProductManager {
    constructor() {
      this.products = [];
      this.nextCode = 1;
    }
  
    addProduct(product) {
      product.id = this.nextCode;
      this.nextCode++;
      this.products.push(product);
    } // Se crea el metodo de agregar producto
    
    getProducts() {
      return this.products;
    }
    // Se crear el metodo para listar los productos creados
    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if(product){
          return product;
        }else{
          console.log("Not found");
        }
      } 
    // Se crea el metodo de buscar producto por ID  
  }
  
  const producto = new ProductManager();
  producto.addProduct({ title: 'producto prueba', description : 'Este es un producto prueba', price : 200, thumbnail : 'sin imagen', stock :25 });
  producto.addProduct({ title: 'producto prueba2', description : 'Este es un producto prueba', price : 300, thumbnail : 'sin imagen', stock :10 });
  
  console.log(producto.getProducts()); 
    // [{title: 'title', description: 'Este es un producto prueba', price: 200, thumbnail: 'sin imagen', stock: 25, id: 1 }]
  console.log(producto.getProductById(1)); 
  // Retorna el producto buscando el Code 1
  console.log(producto.getProductById(3))
  // Retorna mensaje de error al no encontrar producto

const fs = require ('fs')
const { json } = require('stream/consumers')

const productos = 
[
  {
     "id":1,
     "title":"producto A",
     "description":"Este es un producto prueba",
     "price":200,
     "thumbnail":"sin imagen",
     "stock":25
  },
  {
     "id":2,
     "title":"producto B",
     "description":"Este es un producto prueba",
     "price":300,
     "thumbnail":"sin imagen",
     "stock":10
  }
]
console.log(productos)

const consultasTXT =  async() => {
  await fs.promises.writeFile('./ejemplo.txt',"")
  let contenido = await fs.promises.readFile('./ejemplo.txt','utf-8') // Creo un archivo txt
  console.log(contenido) 

  await fs.promises.appendFile('./ejemplo.txt',JSON.stringify(productos))// Ingreso los datos del objeto al archivo texto en formato JSON
  contenido = await fs.promises.readFile('./ejemplo.txt','utf-8')


  let product = JSON.parse(contenido)
  if(product.some(producto => producto.id === 1)) {
    product =  product.filter(producto => producto.id !== 1)
    console.log(product)
  } else {
    console.log("No existe el producto")
  }

  product.push(
    {
      "id":3,
      "title":"producto C",
      "description":"Este es un producto prueba",
      "price":200,
      "thumbnail":"sin imagen",
      "stock":25
   }
  )
  console.log(product)
  await fs.promises.writeFile('./ejemplo.txt',JSON.stringify(product))
  contenido = await fs.promises.readFile('./ejemplo.txt','utf-8') 
  console.log(contenido) 

  product.push({ id:3, title: 'producto C', description : 'Este es un producto prueba', price : 200, thumbnail : 'sin imagen', stock :25 })
   await fs.promises.appendFile('./ejemplo.txt','utf-8',JSON.stringify(product))
  await fs.promises.readFile('./ejemplo.txt','utf-8')
  await promises.writeFile('./ejemplo.txt',JSON.stringify(product))
  if(product.some(producto => producto.id === 1)){
    product =  product.filter(producto => producto.id !== 1)
    console.log(product)
  } else {
    console.log("No existe el producto")
  }
  
  //await fs.promises.unlink('./ejemplo.txt')


}
consultasTXT()
*/
