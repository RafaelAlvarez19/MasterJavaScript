'use strict'

const pais = "Argentina";

console.log(pais);

if (true) {
    pais = "Brasil";
    console.log(pais); //Va a tirar un error por consola, ya que las variables que son constantes no pueden tomar otro valor durante la ejecucion, ni en ningun otro momento despues de su primera asignacion

}