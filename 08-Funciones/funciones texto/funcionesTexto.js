'use strict'

//Tenemos funciones que nos entrega Javascript para transformar texto

var numero = 44;
var miTexto = "Bienvenido";
var miTexto2 = "¿COMO ESTAS?";

var dato = numero.toString(); //Con la funcion 'toString' volvemos un numero, ya sea integer o float, a una cadena de texto
console.log(typeof dato) //String en console.
console.log(dato) //Numero '44' string
console.log(numero) //Numero 44

var miTextoMayus = miTexto.toUpperCase(); //La funcion 'toUpperCase' lo que hace es pasar todos los caracteres en minuscula a mayusculas
console.log(miTextoMayus); //Texto en mayusculas
console.log(miTexto); //Texto inicial

var miTextoMinus = miTexto2.toLowerCase(); //Esta funcion 'toLowerCase' pasa todos los caracteres en mayusculas a minusculas correspondientemente
console.log(miTextoMinus); //Texto a minusculas
console.log(miTexto2); //Texto original

var nombreVacio = ""; //Va a devolver un valor 0, ya que no tiene nada 
console.log(nombreVacio.length); //Con la funcion 'length' podemos calcular el largo de un string o ver si no es una cadena vacia, ya que este nos indica el largo

var nombreReal = "Rafael Alvarez";
console.log(nombreReal.length); //Va a devolver el largo del string (14) ya que el espacio tambien queda guardado

var miArray = ["Hola", "hola", "hey"];
console.log(miArray.length); //En el caso de los arrays cuando pasamos la funcion length, esta misma nos indicara la cantidad de elementos que posee en su interior

var textoCompleto = miTexto + " " + miTexto2.toLowerCase(); //Con el simbolo '+' podemos concatener variables/textos
console.log(textoCompleto);

var textoCompleto2 = miTexto.concat(" " + miTexto2); //La funcion 'concat' sirve para concatenar un string con lo que sea que le pasemos por parametro
console.log(textoCompleto2);