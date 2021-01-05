'use strict'

let miTexto = "Hola bienvenido a esta pagina de ejemplo";

let miReemplazo = miTexto.replace("Hola", "Hola, buenas"); //Con la funcion replace podemos reemplazar una parte del string por otra que deseemos, en este caso le indicamos la parte que va a ser 
//reemplazada y agregamos la parte que queramos a gusto
console.log(miReemplazo); //Como podemos ver se reemplaza el 'hola' por un 'hola, buenas'

let miCorte = miTexto.slice(5); //La funcion slice lo que nos permite es cortar el string a partir de un punto deseado, en este caso a partir del espacio '5'
console.log(miCorte); //Aca podemos ver el resultado, se a removido la parte del 'Hola '

let miCorte2 = miTexto.slice(5, 30); //En este caso indicamos desde donde hasta donde se va a realizar el corte en especifico
console.log(miCorte2); //Aca podemos apreciar el resultado de los dos cortes

let miDivision = miTexto.split(); //Esto va a guardar todo el string en un array sin mas
console.log(miDivision); //Aca podemos ver una sola division

miDivision = miTexto.split(" "); //Esto va a dividir todas las palabras de dentro del string a partir de cada " "
console.log(miDivision); //Aca podemos ver el array con las palabras divididas


let miTextoEjemplo = "       Hola, soy un ejemplo        ";
let miReduccion = miTextoEjemplo.trim() //el metodo 'trim' lo que hace es quitar los espacios adelante y atras del string

console.log(miReduccion); //Esto nos deberia mostrar un 'hola, soy un ejemplo' sin espacios al principio y al final