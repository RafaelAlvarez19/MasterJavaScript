'use strict'


//La principal diferencia entre let y var es el scope que posee la variable en cuestion

//Let es una variable que pertenece a un bloque en concreto, es decir, es una variable regional

let bandera = 0;

//Por otro lado una variable declarada como var es una variable de ambito o scope global, es decir que se puede acceder dese cualquier punto de la pagina a ella


var global = "Soy una variable global";

//Prueba var

var numero = 25;
console.log(numero);

if (true) {
    numero = 30
    console.log(numero);
}

console.log(numero);

//Prueba let
var numero2 = 15;
console.log(numero2)


if (true) {
    let numero2 = 20;
    console.log(numero2)
}

console.log(numero2)