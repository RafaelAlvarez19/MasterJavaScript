'use strict'

//Una arrow function funciona como una funcion de callback, es decir que es una funcion anonima que toma el nombre segun corresponda

function Saludar(nombre, apellido, mostrarNombre) {
    var saludan2 = "hola " + nombre + ", " + apellido;

    mostrarNombre(saludan2);

    return saludan2;
}

Saludar("Rafael", "Alvarez", dato => {
    console.log(dato);
    console.log("Mensaje desde arrow function");
})