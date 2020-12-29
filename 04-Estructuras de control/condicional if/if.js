'use strict'

//Condicional if, es una estructura de control que nos permite comparar

var a = 15;
var b = 16;

if (a > b) {
    console.log('la variable ' + a + ' es mayor'); //Si A es mayor se ejecuta esta porcion de codigo
} else {
    console.log('la variable ' + b + ' es mayor'); //Si B es mayor se ejecuta este otro codigo.
}

var edad = 23;
var nombreCompleto = "Rafael Alvarez"

if (edad >= 18) {
    alert(nombreCompleto + " puede votar");
} else {
    alert(nombreCompleto + ' no puede votar');
}

//Asi mismo aqui podemos ver que en los condicionales if podemos usar != 'distinto' ; == 'exactamente igual' ; >= 'mayor igual' ; <= 'menor igual'
//Estos mismos se conocen como operadores relacionales


//Tambien tenemos otras variaciones para los if

if (true) {
    if (true) {
        alert("Desde un if anidado");
    }
} else {
    alert('nunca va a entrar');
}

if (false) {

} else if (true) {
    //Esto es una variacion del if donde podemos agregar multiples puntos de comparacion
    alert("Desde un else if");
}



//===============================Operadores Logicos======================================//

//A veces dentro de un mismo if queremos o necesitamos comprobar mas de una cosa a la vez, una forma mas practica que usar varios if anidados seria utilizar los operadores logicos && o ||

if (true && true) { //Operador logico && 'y' se tienen que cumplia ambos
    alert('true');
}
if (true || true) { // Operador logico 'o' se tiene que cumplir una de las dos condiciones
    alert("true");
}