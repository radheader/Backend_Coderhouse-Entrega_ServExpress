const fs = require('fs');

class ProductManager {
    constructor(file) {
        this.file = file;
    }

    writeFile = async data => { // Se utiliza reutiliza este metodo para varias funciones lineas abajo
        try {
            await fs.promises.writeFile(
                this.file, JSON.stringify(data,null,2) // JSON.stringify(value, replacer, space). Las propiedades estan incluidas en el string/ 
            )        
        } catch(err) {
            console.log('error:${errr}1');
        }
    }

    getAll = async() => { //Se utiliza reutiliza este metodo para varias funciones lineas abajo
        try{
            const productos = await fs.promises.readFile(this.file,'utf-8')
            return JSON.parse(productos);
        } catch(err) {
            if(err.message.includes('no se encuentra este archivo')) return []; // Si no encuentra la funcion los objetos retornaria un array vacio
            console.log('error:${err}2');
        }
    }

    save = async obj => {
        let productos = this.getAll();
        try{
            let newID;
            productos.length === 0 ? newID =1 : newID = productos[productos.length-1].id +1; // Me devuelve un indice mayor a la cantidad de elementos que encuentra en el array
            let newObj = {id:newID,...obj};
            productos.push(newObj);
            await this.writeFile(productos);
            return newObj.id;
        }catch(err) {
            console.log('error:${err}3');
        }
    }
    
    getByID = async id => {
        let productos = await this.getAll();
        try {
            const obj = productos.find(id => productos.id === id);
            return obj ? obj : null;
        }catch(err) {
            console.log('error:${err}4');
        }
    }

    deleteByID = async id => {
        let productos =await this.getAll();
        try {
            productos - productos.filter(producto => id != id);
            await this.writeFile(productos);
        }catch(err) {
            console.log('error:${err}5')
        }
    }

    deleteAll = async() => {
        this.writeFile([]);
    }
}

module.exports = ProductManager; // Este codigo se importara en el test.js