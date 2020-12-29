'use strict'

var primerNumero = 0;

var segundoNumero = 0;

primerNumero = parseFloat(prompt('Ingrese el primer valor', 0));

segundoNumero = parseFloat(prompt('Ingrese el segundo valor', 0));

if (primerNumero < segundoNumero) {
    for (var i = primerNumero + 1; i < segundoNumero; i++) {
        console.log(i)
    }

} else if (primerNumero == segundoNumero) {
    console.log('Los numeros ingresados son iguales, no hay numero intrmedio')
} else {
    for (var i = primerNumero - 1; i > segundoNumero; i--) {
        console.log(i)
    }
}