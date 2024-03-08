let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;




function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);

        document.getElementById('reiniciar').removeAttribute('disabled')
        // El usuario no acerto
    } else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');     
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    

    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() { 
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    //Si el número generado esta incliudo en la lista
    //Si ya sorteamos todos los números.
    if(listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    }else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();  
    
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }
   

}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del número secreto ');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){

    //Limpiar caja
    limpiarCaja();
    //Indicar Mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales(); 
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();
