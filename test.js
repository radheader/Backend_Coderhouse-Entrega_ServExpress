const ProductManager = require("./index.js"); //Se utiliza el codigo del archivo index.js   

const products = new ProductManager('./products.txt');  // Se hace referencia al txt con los elementos del array  

const test = async() => {
    let save = await products.save({
        id:3,
        title:"producto C",
        description:"Este es un producto prueba",
        price:200,
        thumbnail:"sin imagen",
        stock:25
        }
    )

let getAll = await products.getAll();
let getByID = await products.getByID(2);
let deleteByID = await products.deleteByID(1);
let deleteAll = await products.deleteALL;
console.log(getAll);
console.log(typeof products);
console.log(products.id = 1);
console.log(products.legth);
console.log(getAll);
console.log(getByID);

console.log(deleteAll);
};

test();
