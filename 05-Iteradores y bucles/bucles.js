'use strict'

//Bucle for
var contador = 0;
for (var i = 0; i < 10; i++) {
    contador++;
    console.log(contador + " for");
}
//Este bucle se utiliza para repetir una porcion de codigo un numero de veces finita, o un numero de veces ya marcado

//Bucle While
var mientras1 = 0;
while (mientras1 < 20) {
    mientras1++
    console.log(mientras1 + " mientras1");
}
//El bucle while compara y despues ejecuta, es decir, puede no ejecutarse nunca

//Bucle do While

var mientras2 = 0;
do {
    mientras2++
    console.log(mientras2 + " mientras2");
} while (mientras2 < 15)

//Este bucle repite un codigo especifio hasta que se concrete una accion, a diferencia del while el dowhile siempre se ejecuta por lo menos una vez



//=================IMPORTANTE=================//

//Para cortar la ejecucion de cualquier bucle o funcion podemos usar la palabra reservada break