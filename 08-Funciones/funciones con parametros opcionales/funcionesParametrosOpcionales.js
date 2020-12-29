'use strict'

function Saludar(nombre, apellido, mostrar = false) {
    if (mostrar == false) {
        console.log("Hola administrador")
    } else {
        document.write("Bienvenido " + nombre + " " + apellido);
    }
}

Saludar('Rafael', 'Facundo', true);