'use strict'

var primerNumero = 0;

var segundoNumero = 0;

primerNumero = parseFloat(prompt('Ingrese el primer valor', 0));

segundoNumero = parseFloat(prompt('Ingrese el segundo valor', 0));


if (primerNumero % 2 == 0) {
    for (var i = primerNumero + 1; i < segundoNumero; i = i + 2) {
        console.log(i)
    }
} else {
    for (var i = primerNumero + 2; i < segundoNumero; i = i + 2) {
        console.log(i)
    }
}