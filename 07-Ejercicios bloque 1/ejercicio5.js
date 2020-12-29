'use strict'

var numeroIngresado = parseFloat(prompt('Ingrese un numero para buscar sus divisores', ""));

for (var i = numeroIngresado; i > 0; i--) {
    if (numeroIngresado % i == 0) {
        console.log(i);
    }
}