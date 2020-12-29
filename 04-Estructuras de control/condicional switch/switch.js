'use strict'
//Switch

var edad = 20;

switch (edad) {
    case 17:
        alert("17");
        break;
    case 18:
        alert("18")
        break;
    default:
        alert("Caso default")
        break;
}

//En el caso del switch se analiza y se ejecuta la porcion de codigo correspondiente a cada caso en evz de realizar una comparacion uno a uno.En el caso de que no se cumpla la condicion de pasa al caso default