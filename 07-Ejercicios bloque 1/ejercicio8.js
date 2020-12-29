'use strict'
var primerNumero = parseFloat(prompt('Ingrese el primer numero para operar', ''));
var segundoNumero = parseFloat(prompt("Ingresar el segundo numero para operar", ''));

while (primerNumero < 0 || segundoNumero < 0 || isNaN(primerNumero) || isNaN(segundoNumero)) {
    primerNumero = parseFloat(prompt('Ingrese el primer numero para operar', ''));
    segundoNumero = parseFloat(prompt("Ingresar el segundo numero para operar", ''));
}

var suma = primerNumero + segundoNumero;

var resta = primerNumero - segundoNumero;

var multiplicacion = primerNumero * segundoNumero;

var division = primerNumero / segundoNumero;

document.write(suma + "<br>" + resta + "<br>" + multiplicacion + "<br>" + division)
alert(suma + " " + resta + " " + multiplicacion + " " + division);
console.log(suma + " " + resta + " " + multiplicacion + " " + division)