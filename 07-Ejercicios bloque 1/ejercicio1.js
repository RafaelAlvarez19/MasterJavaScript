'use strict'

//Ejercicio 1 

//Se nos piden ingresar dos numeros por pantalla, realizar la comparativa entre ambos e indicar mayor, menor o si son iguales

var primerValor = prompt("Ingrese un primer valor", 0);

var segundoValor = prompt("Ingrese un segundo valor", 0);

if (parseFloat(primerValor) > parseFloat(segundoValor)) {
    alert('El numero ' + primerValor + ' es mayor que ' + segundoValor);
} else if (parseFloat(segundoValor) > parseFloat(primerValor)) {
    alert('El numero ' + segundoValor + ' es mayor que ' + primerValor);
} else {
    alert('los numeros son iguales');
}