

let totalCarrito = 0;

const productos = [
    {id: 1, producto: 'Cannoli', precio: 200},
    {id: 2, producto: 'Sfogiatella', precio: 300},
    {id: 3, producto: 'Totto', precio: 300},
    {id: 4, producto: 'Tiramisú', precio: 800},
    {id: 5, producto: 'Panna cotta', precio: 800}
]
const productos2 = {
    ...productos
}

console.log(productos2);

const buscar = productos.find(producto => producto.producto === 'Chocotorta');
console.log(buscar);

const xPrecio = productos.filter(producto => producto.precio > 299);
console.log(xPrecio);


let enJSON = JSON.stringify(productos);
localStorage.setItem('productos a la venta', enJSON);