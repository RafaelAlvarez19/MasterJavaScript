'use strict'

//Las plantillas de texto en javascript se utilizan para insertar variables en el documento

//Podriamos trabajar de dos formas

let nombre = prompt('Ingresa tu nombre');
let apellido = prompt('Ingresa tu apellido');

let NomyAp = "Mi nombre es " + nombre + " y mi apellido es " + apellido; //Si bien esta es una forma de hacer el trabajo es una forma "incorrecta" ya que es engorrosa

document.write(NomyAp);

//En cambio con una plantilla de texto quedaria asi
//Las platillas de texto en javascript se caracterizan por usar el acento frances o la tilde invertida " ` "

let texto = `<h1>Hola buenas</h1>
<h3>Mi nombre es ${nombre}</h3>
<h4>Y mi apellido es ${apellido}</h4>`;

document.write(texto);

//De esta forma podemos ver que las plantillas de texto nos permiten 'organizar'  o 'estructurar' lo que vamos a visualizar en el documento
//Ademas de que nos permite utilizar las estiquetas de html, y nos permite mostrar las variables de JavaScript a traves de la interpolacion