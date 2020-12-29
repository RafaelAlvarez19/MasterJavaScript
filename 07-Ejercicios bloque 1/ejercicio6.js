'use strict'

var numeroIngresado = parseFloat(prompt('Ingrese un numero para saber si es par o impar'));

while (isNaN(numeroIngresado)) {
    numeroIngresado = parseFloat(prompt('Ingrese un numero para saber si es par o impar'));
}

if (numeroIngresado % 2 == 0) {
    console.log("Es par");
} else {
    console.log("Es impar");
}