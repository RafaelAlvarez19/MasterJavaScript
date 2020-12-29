'use strict'

function Listar(objeto1, objeto2, ...restoObjetos) {
    console.log(objeto1, objeto2, restoObjetos);
}

Listar("teclado", "mouse", "monitor", "auricular", "microfono", "parlantes", "bungee")


//Una funcion con parametro de tipo rest se utiliza en casos excepcionales o que son pocos comunes cuando no tenemos un numero determinado de objetos o parametros a recibir
//En este caso podemos apreciar como los objetos 1 y 2 son los esperados por la funcion, y los '...' se entiende que son el resto de objetos que pueden llegar a la funcion
//Los mismos son almacenados en un array de objetos