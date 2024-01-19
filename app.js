/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un numero del 1 al 10: ';
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if(numeroUsuario === numeroSecreto) {
        //El usuario acierta
        asignarTextoElemento('p', `Acertaste!!! Te tomó ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarForm();
    }
    return;
}

function limpiarForm() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero ya esta en la lsta 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            /* Si no se encuentra en la lista lo agregamos
            a la lista y lo retornamos */
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
    return;
}

function reiniciarJuego() {
    //Limpiar el formulario
    limpiarForm();

    //Indicar mensaje de intervalo de numeros
    //Generar nuevo numero aleatorio
    //Inicializar numero de intentos
    condicionesIniciales();

    //Deshabilitar boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    return;
}

condicionesIniciales();
