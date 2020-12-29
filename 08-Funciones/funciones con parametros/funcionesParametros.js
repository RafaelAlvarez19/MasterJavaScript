'use strict'

var nombre = prompt('Ingrese su nombre');
var apellido = prompt('Ingrese su apellido');

function Saludar(nombre, apellido) {
    return alert("Hola " + nombre + ", " + apellido);
}

Saludar(nombre, apellido);

function Calculadora(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    return "Hola soy la calculadora";
}

var numero1 = parseFloat(prompt('Ingrese un numero', ""));

var numero2 = parseFloat(prompt('Ingrese un segundo numero', ''));

Calculadora(numero1, numero2); //Podemos pasar parametros ingresados por el usuario

Calculadora(98, 15); //Podemos pasar parametros directamente a la funcion


//Aqui podemos apreciar como un funcion se comporta al recibir parametros para trabajar de manera mas dinamica y dejar de ser estatico
//Podemos apreciar como funciona el tema de reciclar codigo ya que no se le pasan datos fijos sino que los toma a medida que se ejecuta y segun lo que ingrese el usuario
//Podemos retornar a la vista o podemos mandarlo a consola.