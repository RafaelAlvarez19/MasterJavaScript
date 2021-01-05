'use strict'

//Funciones de busqueda
let miTexto = "ejemplo de funcion de busqueda";

let miBusqueda = miTexto.indexOf("busqueda"); //En esta linea lo que hacemos es indicar con la funcion 'indexOf' es si existe alguna coincidencia de texto en la variable que estamos pasando
console.log(miBusqueda); //Esto va a devovler el numero '22' en este caso que es donde comienza la palabra que estoy buscando 22
//Es decir que con esta funcion podemos revisar si algo existe dentro de una cadena.


let miTexto2 = "Este es un texto de busqueda, para utilizar una funcion de busqueda distinto";

let miBusqueda2 = miTexto2.lastIndexOf("busqueda"); //Con esto buscamos la ultima coincidencia de una palabra, en este caso 'busqueda'
console.log(miBusqueda2); //con esto nos tendria que devolver el valor de a partir donde comienza la segunda y en este caso ultima coincidencia  59

let miTexto3 = "Este es un texto de ejemplo";

let miBusqueda3 = miTexto3.search("ejemplo"); //Va a pasar la posicion de donde se encuentre la palabra deseada al igual que indexof
let miBusqueda4 = miTexto3.search("curso"); //A su vez si paso una palabra que no existe en la cadena me va a devolver un valor igual a -1, es decir que no hay un valor que pertenezca al string con esos valores

console.log(miBusqueda3); //20
console.log(miBusqueda4); //-1

let miBusqueda5 = miTexto2.match(/busqueda/g); //La funcion match sirve para mostrar todas las coicidencias que existan dentro del array, junton con sus respectivos datos, posicion, input, etc
console.log(miBusqueda5); //Esto muestra un array con los resultados

let miBusqueda6 = miTexto3.substr(20, 7); //Con la funcion substring podemos sustraer parte del string segun corresponda pasandoles dos valores, el primero es la posicion inicial, y el segundo es la cantidad de valores que vamos a sacar a partir del punto inicial
console.log(miBusqueda6);

let miBusqueda7 = miTexto.charAt(12); //Va a devolver la posicion dentro del array donde encuantre la letra buscada 'u' en este caso
console.log(miBusqueda7); // muestra la letra que buscamos 'u' en la posicion 12

let miBusqueda8 = miTexto.startsWith("ejemplo"); //Esto lo que hace es buscar un string que comience con el valor que le estamos pasando
console.log(miBusqueda8); // en este caso va a devovler true porque comienza con ejemplo el string en el que estamos buscando

let miBusqueda9 = miTexto.endsWith("busqueda") //En este caso es todo lo contrario ya que estamos comprobando si el string termina con la palabra deseada
console.log(miBusqueda9) //Va a devolver true ya que termina con la palabra busqueda

let miBusqueda10 = miTexto2.includes("utilizar"); //Esta funcion lo que nos permite saber es si un string contiene o no una palabra en concreto
console.log(miBusqueda10); //VA a devolver true ya que contiene la palabra utilizar;