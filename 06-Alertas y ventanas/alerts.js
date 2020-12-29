'use strict'

//Alertas
alert('Soy un mensaje de alerta');

var mensaje = 'Soy un mensaje desde variable';

alert(mensaje);
//Con las alertas podemos lograr que el navegador muestre un mensaje o un dato por pantalla

//Ventana de confirmacion

confirm('esto es una ventana de confirmacion');

var mensajeConfirm = 'Esto es un mensaje de confirmacion';
confirm(mensajeConfirm);
//Al igual que el alert aqui podemos mostrar un mensaje, pero en este caso el usuario tiene que tomar una decision 
//A partir de la cual podemos aplicar una logica de negocios para manipular dicha informacion. Para esto necesitariamos guardar el resultado en una variable

var resultado = confirm(mensajeConfirm);

if (resultado === true) {
    console.log('Apreto ok');
} else {
    console.log('Apreto cancel');
}

//Aqui podemos ver como si el usuario aprieta el ok manda unn mensaje por consola indicando el valor, y en caso contrario se comporta de la misma manera

//Ingreso de datos

//Esta ventana se utiliza para que el usuario ingrese informacion de manera manual. Mediante la funcion prompt

prompt('¿Cuantos años tienes?');

//Al igual que al confirm podemos operar con sus datos siempre y cuando los almacenemos de forma concreta

var edad = prompt('¿Cuantos años tienes?', 0); //lo que va despues de la ',' se considera un valor por defecto

console.log(edad);

//De esta forma almacenamos lo que el usuario ingresa por teclado, pero este mismo siempre se almacena como "String" asi que si quisieramos manipularlo para que se comporte de otra forma deberiamos de parsearlo