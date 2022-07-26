document.addEventListener('DOMContentLoaded', () => {console.log('el documento esta cargado')});

const form = document.getElementById('formulario');

const ingredientes = (event) =>{
    event.preventDefault();
    console.log(event.target.peso.value);

    if (event.target.peso.value < 2000 && event.target.peso.value > 250){
        let harina000 = 46.8 * event.target.peso.value / 100;
        let harinaIntegral = 5.25 * event.target.peso.value / 100;
        let agua = 36.5 * event.target.peso.value / 100;
        let masaMadre = 10.3 * event.target.peso.value / 100;
        let sal = 1 * event.target.peso.value / 100;
        
        let contenedorIng = document.getElementById('nuevaReceta');

        contenedorIng.innerHTML = `<h3 class="ing">Para un pan de masa madre de ${event.target.peso.value}grs necesitás:</h3>
                                    <p>Harina 000: ${harina000}gr.</p>
                                    <p>Harina Integral: ${harinaIntegral}gr.</p>
                                    <p>Agua: ${agua}ml.</p>
                                    <p>Masa madre: ${masaMadre}gr</p>
                                    <p>Sal: ${sal}gr.</p>`
        
                                    document.body.div.appendChild(contenedorIng);

    }

    if (event.target.peso.value > 2000 || event.target.peso.value < 250){
            swal({
                title: "ERROR",
                text: "Ingresa un valor entre 250 y 2000 grs.",
                icon: "error",
                buttons: false,
            });
}
}
form.addEventListener('submit', ingredientes);

//suscripcion con operador ternario
const form2 = document.getElementById('formulario2');
let suscripto = (e) => { 
        e.preventDefault();
        e.target.email ? swal({
                            title: "Suscripción exitosa", 
                            text: "Pronto estarás recibiendo novedades y promociones en tu correo electrónico",
                            icon: "success",
                            buttons: false,}):
                         swal({
                            title: "ERROR", 
                            text: "Pronto estarás recibiendo novedades y promociones en tu correo electrónico",
                            icon: "success",
                            buttons: false,})}
form2.addEventListener('submit', suscripto);

/* PRIMER DESAFIO COMPLEMENTARIO (CLASE 2)

let personaje = prompt('Ingrese el nombre de su personaje');
let edad = prompt('ingrese la edad de su personaje');
alert('Su personaje es '+ personaje+' de '+edad+' años.')

while(edad != "n"){
    agregar = prompt('¿Agregamos otro personaje?. Si lo deseas ingresa S, sino N.');
 
    if (agregar == 'n'){
            alert('')
            break;
        }
    else{
        let personaje = prompt('Ingrese el nombre de su personaje');
        let edad = prompt('ingrese la edad de su personaje');
        alert('Su personaje es '+ personaje+' de '+edad+' años.')

    }
}
alert('Sus personajes fueron ingresados correctamente');

let contar = prompt('¿Jugamos a las escondidas con '+personaje+'?. Ingresa S para jugar y N para no.');
if(contar == 's'){
for (let i = 1; i <= 10; i++){
    alert(i);
}
alert('te encontré!!!!!!!');
}

if(contar == 'n'){
        alert('Ufa!!! Otro día será!');
}

*//////////////////////////////////////////////
//////////////////////////////////////////////

/*array ---- desafio complementario n 2

const panes = ['pan de masa madre', 'pan de hamburguesa', 'pan integral'];
const postres = ['chocotorta', 'flan', 'budin de pan'];

panes.includes('pan flauta');
const productos = panes.concat(postres);

console.log(productos.join(','));

*/


//PRIMERA ENTREGA PROYECTO FINAL + EVENTO
////////////////////////////////
////////////////////////////////
/*
var pesoMasa = prompt('Te damos la bienvenida a labellevittoria!!!\nAdemás de llevar el pan a tu mesa te pasamos los ingredientes para que armes tu pan a medida\n\nPresione ENTER para personalizar sus panes o escriba ESC para salir del calculador');


let calculador = document.getElementById('receta')
calculador.addEventListener('click', ingredientes);

function ingredientes () {
    

    while(pesoMasa != "ESC"){
        let pesoMasa = prompt('ingrese el peso en gramos del pan clásico de masa madre que quiere crear. De lo contrario pesione "ESC".');

        if (pesoMasa == "ESC"){
            break;
        }
        if (pesoMasa < 2000 && pesoMasa > 250){
            let harina000 = 46.8 * pesoMasa / 100;
            let harinaIntegral = 5.25 * pesoMasa / 100;
            let agua = 36.5 * pesoMasa / 100;
            let masaMadre = 10.3 * pesoMasa / 100;
            let sal = 1 * pesoMasa / 100;
            alert('Para un pan de '+pesoMasa+'grs vas a necesitar estos ingredientes:\n\nHarina 000: ' + harina000+ 'grs\nHarina integral: '+harinaIntegral+'grs\nAgua: '+agua+'ml\nMasa madre: '+ masaMadre+'grs\nSal: '+sal+'grs');
       
        }

        if (pesoMasa > 2000 || pesoMasa < 250){
            alert('ERROR. Ingrese un valor entre 250 y 2000grs');
            }        
}
}

console.log(ingredientes());
alert('Esperamos ver ese pan en nuestro inStagram @labellavittoria <3');

*/
//localStorage.setItem('clave', 'valor');
//let clave = localStorage.setItem('clave');