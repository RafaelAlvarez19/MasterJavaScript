'use strict'

//===========================================Operadores===========================================

var numero1 = 7;

var numero2 = 8;

var suma = numero1 + numero2;
alert("El resultado de  sumar " + numero1 + " y " + numero2 + " es igual a " + suma);
//El operador '+' sirve tanto como para hacer sumas como para concatenar strings


var resta = numero1 - numero2;
alert("El resultado de  restar " + numero1 + " y " + numero2 + " es igual a " + resta);

var multiplicacion = numero1 * numero2;
alert("El resultado de  multiplicar " + numero1 + " y " + numero2 + " es igual a " + multiplicacion);

var division = numero1 / numero2;
alert("El resultado de  dividir " + numero1 + " y " + numero2 + " es igual a " + division);

var resto = 100 % 24;
alert("El resto de la division entre " + 100 + " y " + 24 + " es igual a " + resto);

//===========================================Tipos de datos===========================================

var numeroEntero = 44; //int

var cadenaTexto = "Esto es una cadena o string"; //String

var verdaderoFalso = true; //valor booleano

var numeroFalso = "50";
console.log(numeroFalso + 4); //En este caso podemos apreciar como numero falso se concatena con el otro valor en vez de sumarse
console.log(Number(numeroFalso) + 4); //Funcion que convierte un "numero" desde un string a un numero entero, aqui a su vez podemos ver que gracias a la funcion number podemos operar con el numeor falso.

//Asi mismo podemos usar tambien las funciones de parseInt o parseFloat

console.log(parseInt(numeroFalso) + 10); //parsea el numero falso en un entero y se puede operar con el.

console.log(parseFloat(numeroFalso) + 0.55); //parsea el numero falso en un numero de punto flotante, hasta con dos decimales de precision

//por otro lado podemos transformar un numero entero en string

console.log(String(numeroEntero));

//Asi mismo contamos con una herramienta que nos permite saber con que tipo de dato estamos trabajando
console.log(typeof(numeroFalso));
console.log(typeof(numeroEntero));

//Aqui tenemos dos ejemplos de como funciona el typeof