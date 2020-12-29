'use strict'

//Una funcion que recibe un parametro SPREAD lo que hace es dividir los valores que esten guardados en un array previamente creados y asignarlos o pasarlos a la funcion correspondiente


function listar(fruta1, fruta2, ...restoFrutas) {

    console.log(fruta1);
    console.log(fruta2);
    console.log(restoFrutas);
}

var frutas = ["manzana", "naranja"]

listar(...frutas, "pera", "sandia", "mandarina");