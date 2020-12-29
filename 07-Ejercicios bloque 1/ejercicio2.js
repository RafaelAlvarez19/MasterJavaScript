'use strict'

var suma = 0;
var numero = 0;
var contador = 0;

do {
    numero = prompt('Ingrese un numero, para finalizar ingrese un numero negativo', "");

    if (parseFloat(numero) >= 0) {
        suma = suma + parseFloat(numero);
        console.log(suma);
        contador++;
        console.log(contador);
    }

}
while (parseFloat(numero) >= 0)

console.log("la suma delos valores ingresados es de " + suma);

console.log("la media es de " + (suma / contador));