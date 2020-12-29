'use strict'

function Saludar(nombre, apellido, mostrar = false) {
    if (mostrar == false) {
        mostrarConsola();
    } else {
        mostrarPantalla(nombre, apellido);
    }
}


function mostrarConsola() {
    console.log("hola administrador");
}

function mostrarPantalla(nombre, apellido) {
    document.write("Hola " + nombre + " " + apellido);
}


Saludar("Rafael", "Alvarez", true)

//Como podemos ver podemos invocar funciones dentro de otras funciones a su vez podemos mezclar funciones que no reciben parametros como las que si reciben
//Asi que a partir de esto podemos ver como ir desarrollando nuestro flujo de trabajo