// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeNombres = [];


function agregarAmigo() {
    let nuevoNombre = document.getElementById('amigo').value;
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
        modificarTextos('#listaAmigos', listaDeNombres);  
    }
}

function limpiarCaja (){
    document.getElementById('amigo').value = "";
}
        
function modificarTextos (elemento, texto){
    let textoNuevo = document.querySelector(elemento);
    textoNuevo.innerHTML = texto.map(item => `<p>${item}</p>`).join("");
}


