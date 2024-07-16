// Tipos de datos
//////
var mensaje = "4 cerditos";
var nombre = "Javier";
var edad = 35;

mensaje = "hola, mi nombre es";

console.log(mensaje + " " + nombre); // -> hola, mi nombre es Javier

/*

PALABRAS QUE NO PODEMOS USAR COMO NOMBRES DE VARIABLES

abstract boolean break byte case catch char class
const continue debugger default delete do double
else enum export extends false final finally
float for function goto if implements import in
instanceof int interface long native new null
package private protected public return short
static super switch synchronized this throw throws
transient true try typeof var void volatile while
whith

*/

// Operadores y funciones
//////
var saludo = "Hola, mi nombre es ";
var nombre = "Javier";
var edad = 35 + 22 - 11;

var mensaje = saludo + nombre + " y tengo " + edad + " años";
console.log(mensaje); // -> Hola, mi nombre es Javier y tengo 46 años

edad = "35" + 22;
console.log(edad); // -> 3522

edad = "35" - 22;
console.log(edad); // -> 13

edad = "35" - "x";
console.log(edad); // -> NaN (Not a Number)

var nombre = "Javier";
var fecha = 1983;
var edad = 2019 - fecha;
console.log(nombre + ", tienes " + edad + " años"); // -> Javier, tienes 36 años

// Event listeners
// Condicionales
//////

function recogeDatos(evento) {
  console.log("RecogeDatos pressed");
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2024 - fecha;

  var bienvenida = document.querySelector("#bienvenida");

  var mensajeEdad;
  var mensaje;

  mensajeEdad =
    edad > 30 ? "abuelo!" : edad < 30 ? "jovenzuelo!" : "no me lo creo.";

  mensaje =
    "<p>Hola " + nombre + ", tienes " + edad + " años, " + mensajeEdad + "</p>";

  // bienvenida.textContent = "Hola" + nombre + ", tienes " + edad + " años.";
  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
miForm.addEventListener("click", () => {
  console.log("Formulario pressed");
});
