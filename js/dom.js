for (const prod of productos){
    let contenedor = document.getElementById('alaventa');
    let listaProductos = document.createElement('fieldset');

    listaProductos.innerHTML = `
                            <div>
                            <svg  class="carrito" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
                            <h4>${prod.producto}</h4>
                            </div>
                            
                            <p>$${prod.precio}</p>
                             `

                            contenedor.appendChild(listaProductos);
};

const agregarCarrito = document.querySelectorAll('.carrito');

function agregado(){
    
    Toastify({
        text: 'Gracias por darle amor a nuestras comidas :)',
    }).showToast();

    setTimeout(()=>{
        totalCarrito++;
        console.log('Hay ' + totalCarrito + ' me gusta acumulados');
        }, 1000)
};

for (const agregar of agregarCarrito){
agregar.addEventListener('click', agregado);
}

//INTERFAZ CON JSON
const json = document.querySelector('#conJson');

fetch('../json/index.json')
    .then((res)=> res.json())
    .then((data)=>{

        data.forEach((prod) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h4>${prod.producto}</h4>
                <p>$${prod.precio}</p>
            `
            json.appendChild(div);
        });
    })

//AGREGAR EVENTOS/
/*

let calculador = document.getElementById('gramos')
calculador.addEventListener('input', ()=>{
    let contenedorReceta = document.createElement('div');
    contenedorReceta.innerHTML = `<h3>Para un pan de ${pesoMasa}grs vas a necesitar estos ingredientes:</h3>
                            <p>Harina 000: ${harina000}</p>
                            <p>Harina integral: ${harinaIntegral}+'grs\nAgua: '+agua+'ml\nMasa madre: '+ masaMadre+'grs\nSal: '+sal+'grs')`
                            

    document.body.appendChild(contenedorReceta);                        
})*/