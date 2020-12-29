//Vamos a trabajar con variables en js
//Una variable es un contenedor de informacion
'use strict' //Con esto le indicamos a js que vamos a estar haciendo uso del modo estricto, es decir que va a hacer uso de buenas practicas y de los ultimos estandares de js

var pais = "Argentina";
console.log(pais);

var continente = "America";
console.log(continente);
//Los strings y los caracteres van entre comillas simple o dobles

var antiguedad = 2019;
//A diferencia de los strings los numeros no necesitan de comillas para poder ser diferenciados/mostrados

var paisContinenteAntiguedad = pais + " " + continente + " " + antiguedad;

alert(paisContinenteAntiguedad); //En esta linea mostramos las variables concatenadas.

console.log("El pais " + pais + ", se encuentra en " + continente + ".")
console.log(antiguedad);