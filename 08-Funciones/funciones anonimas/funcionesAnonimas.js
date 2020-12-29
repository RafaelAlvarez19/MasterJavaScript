'use strict'

//Funcion anonima
//Son funciones que no tienen nombre

var saludar = function(nombre) {
    return console.log("Hola " + nombre);
}

//Como podemos ver en este caso la funcion en si no tiene nombre, pero la podemos llamar haciendo uso del nombre "Saludar" en este caso, esto permite que en el futuro podamos modificar el nombre si asi lo desearamos

saludar("Rafael");

saludar("Pedro Ramirez")

//Dentro de las funciones anonimas tenemos lo que son los callbacks, esto son funciones anonimas pasadas como parametros de otras funciones que se ejecutan para llegar a un fin buscado
//Estas funciones reciben datos como parametros y realizan una tarea especifica

function saludando(persona1, persona2, mostrarNombres) {
    var saludar = "Hola " + persona1 + " " + persona2;

    mostrarNombres(saludar);
}

saludando("Rafael", "Pedro", function(dato) {
    console.log("Callback " + dato);
});

//Las funciones de callback son funciones q1ue se ejecutan dentro de la funcion principal agregando una capa de abstraccion