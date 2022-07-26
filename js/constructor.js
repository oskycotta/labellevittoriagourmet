//VARIABLES DE ACCESO GLOBAL
const objetos = [];

//DECLARACIÓN DE CLASE PRODUCTO
class Producto {
    constructor(id, nombre,precio,_img, descrip) {
            this.id = parseInt(id);
            this.nombre = nombre.toUpperCase();
            this.precio = parseFloat(precio);
            this._img = _img;

            this.descrip = descrip.toUpperCase();
        
    }
}

//INSTANCIAR OBJETOS Y ASOCIAR A ARRAY GLOBAL

const objeto1 = new Producto (1, "Brunch para 2 personas", 3000, "https://i.blogs.es/bc747f/brunch-madre/1366_2000.jpg", "Mix de masas, medialunas relenas de jyq, totadas de pan casero con queso crema, manteca y mermelada, salsas caseras saladas, 2 huevos mollé, 2 jugus de naranja y 2 café con leche o té.");
const objeto2 = new Producto (2, "Waffle paraíso + infusión", 1800, "https://www.gastrolabweb.com/u/fotografias/fotosnoticias/2021/6/29/15477.jpg", "Waffle con mantecha de maní y pasta de avellanas, con frutos secos, frutos rojos y baño de chocolate. Acompañado de café con leche o té a elección y jugo de naranja.");
const objeto3 = new Producto (1, "Yogurt labelle", 1900, "https://i.blogs.es/4aaade/1366_20005/1366_2000.webp", "Yogut natural con granola, frutos secos y frutos rojos. Acompañado de jugo de naraja, café con leche y marroc.");
const objeto4 = new Producto (1, "Cannoli y café con leche", 800, "https://previews.123rf.com/images/irigri/irigri1802/irigri180200190/94931820-cannoli-con-ricotta-chocolate-y-pistachos-reposter%C3%ADa-italiana-de-la-sicilia-desayuno-cl%C3%A1sico-con-zum.jpg?fj=1", "Cannoli a elección: ricota y pistachos, ricota y chocolate, pastelera, crema o mousse de chocolate. Con café con leche o té + jugo de naraja.");
const objeto5 = new Producto (1, "Sfogiatella con café con leche", 800, "https://www.clarin.com/img/2021/05/28/6QOGg1B7s_1256x620__1.jpg", "Sfogiatella de pastelera o membrillo con frutos rojos con café con leche o té a elección + bocadito.");

//implementacion de json
const enJSON1 = JSON.stringify (objeto1);
const enJSON2 = JSON.stringify (objeto2);
const enJSON3 = JSON.stringify (objeto3);
const enJSON4 = JSON.stringify (objeto4);
const enJSON5 = JSON.stringify (objeto5);

//alaceno datos en el storage
localStorage.setItem ("objeto1", enJSON1);
localStorage.setItem ("objeto2", enJSON2);
localStorage.setItem ("objeto3", enJSON3);
localStorage.setItem ("objeto4", enJSON4);
localStorage.setItem ("objeto5", enJSON5);

//recupero datos del storage
let objeto01 = localStorage.getItem ('objeto1');
let objeto02 = localStorage.getItem ('objeto2');
let objeto03 = localStorage.getItem ('objeto3');
let objeto04 = localStorage.getItem ('objeto4');
let objeto05 = localStorage.getItem ('objeto5');

console.log (typeof objeto1);
console.log (typeof objeto2);
console.log (typeof objeto3);
console.log (typeof objeto4);
console.log (typeof objeto5);

//empujo el objeto a la variable de acceso global 'objetos' (array vacio)
objetos.push (objeto1);
objetos.push (objeto2);
objetos.push (objeto3)
objetos.push (objeto4);
objetos.push (objeto5);



//FUNCION PARA GENERAR LA INTERFAZ DE PRODUCTOS CON JQUERY
function productosUI(objetos, id){
    $(id).empty();
    for (const obj of objetos) {
       $(id).append(`<div  class="contenedor-item " higth="200px">
                      <img src="${obj._img}" width="200px">
                      <div >
                        <h5 class="card-title">${obj.nombre}</h5>
                        <p>${obj.descrip}</p>
                        <p class="card-text">$${obj.precio}</p>
                      </div>
                    </div>`);
    }
}

//GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
productosUI(objetos, '#productosContenedor');