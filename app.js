// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeNombres = [];
let nuevoNombre = "";



function agregarAmigo() {
    nuevoNombre = document.getElementById('amigo').value;
    if (nuevoNombre == ""){
        alert('Ingresa un nombre valido');
    }
    else{
        if(listaDeNombres.includes(nuevoNombre)){
            alert('Nombre repetido');
            limpiarCaja();
        }else{
            listaDeNombres.push(nuevoNombre);
            limpiarCaja();
            console.log(listaDeNombres);
        }
        modificarTextos('#listaAmigos', listaDeNombres.map(item => `<p>${item}</p>`).join(""));  
    }
}


function limpiarCaja (){
    document.getElementById('amigo').value = "";
}
        

function sortearAmigo(){
    let numeroDeAmigo = Math.floor(Math.random()*listaDeNombres.length);
    modificarTextos('#resultado', listaDeNombres[numeroDeAmigo]);
    console.log(numeroDeAmigo);
}

function modificarTextos (elemento, texto){
    let textoNuevo = document.querySelector(elemento);
    textoNuevo.innerHTML = texto;
}