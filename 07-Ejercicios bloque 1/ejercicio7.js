'use strict'

var numero = parseFloat(prompt("Ingrese el numero del que desea saber la tabla", ""))

for (var i = 1; i <= 12; i++) {
    document.write((i * numero) + "<br>");

}