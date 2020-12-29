'use strict'

var texto = "Hola mundo desde variable global";
var numero = 13;

function holaMundo(texto) {
    var variablelocal = "variable local";
    console.log(texto);
    console.log(numero); //Aca podemos ver como se puede hacer un log de una variable desde dentro de una funcion a la que no se le paso la misma
}

holaMundo("Buenas tardes");

// console.log(variablelocal);
//Esta linea si la descomentamos va a generar un error ya que la variable no esta declarada en el ambito actual

//En javascript podemos ddiferenciar en un prinmer momento dos tipos de variables, las variables definidas con 'var' que son variables de ambito lgobal
//Y las variables definidas con 'let' que son aquellas variables que tienen un scope reducido