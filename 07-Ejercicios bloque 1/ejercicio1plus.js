'use strict'
var numero1;
var numero2;
do {
    if (isNaN(numero1) || numero1 == "" || numero1 < 0) {
        numero1 = prompt('Ingrese el primer numero por favor!', "");

    } else if (isNaN(numero2) || numero2 == "" || numero2 < 0) {
        numero2 = prompt('Ingrese el segundo numero', "");

    }

} while (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0)

console.log(numero1, numero2);

if (parseFloat(numero1) > parseFloat(numero2)) {
    alert('El numero ' + numero1 + ' es mayor que ' + numero2);
} else if (parseFloat(numero2) > parseFloat(numero1)) {
    alert('El numero ' + numero2 + ' es mayor que ' + numero1);
} else {
    alert('los numeros son iguales');
}