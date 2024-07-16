//////////
// Array Operations
//////////
var grupoTarjetas1 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "🐋", "👺"];
var grupoTarjetas2 = ["😻", "🧠", "👁️", "🥸", "❤️‍🔥", "🍉", "🥑", "🥬"];
var grupoTarjetas3 = ["🤡", "💩", "🎃", "🙀", "☠️", "👾", "🐣", "🐓"];

var totalTarjetas = grupoTarjetas1.concat(grupoTarjetas2, grupoTarjetas3);
totalTarjetas.push(33);

var grupoTarjetasAnidado = [grupoTarjetas1, grupoTarjetas2, grupoTarjetas3];

// console.log(totalTarjetas);
// console.log(grupoTarjetasAnidado);
// console.log(grupoTarjetasAnidado[1][5]);

//////////
// Loops, Objetos, chance y math.random()
//////////

var grupoTarjetas = grupoTarjetas1;
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();

  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function (elemento, indice) {
    var tarjeta = document.createElement("div"); // TODO: me molesta porque queda un div sobrando

    tarjeta.innerHTML =
      '<div class="tarjeta">' +
      '<div class="tarjeta__contenido">' +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

reparteTarjetas();

function descubrir() {
  this.classList.add("descubierta");
  // usando this se hace referencia a quién a llamado la función
}

document.querySelectorAll(".tarjeta").forEach(function (elemento) {
  elemento.addEventListener("click", descubrir);
});

//////////
//
//////////

// Los objetos son un elemento clave de javascriopt ya
// que entiende el mundo en base a ellos. Por ejemplo
// Por ejemplo la ventana del navegador está compuesta
// del objeto window, que es toda ella; el objeto DOM;
// y entre otras cosas el objeto consola.
// Cada uno tiene sus propiedades y podemos acceder de
// distintas formas.

// // EJERCICIO: concatena grupoTarjetas consigo misma para duplicar
// // los valores
// var totalTarjetas = grupoTarjetas;

// function barajaTarjetas() {
//   var resultado;
//   resultado = totalTarjetas.sort(function() {
//     return 0.5 - Math.random();
//   });
//   return resultado;
// }

// function reparteTarjetas() {
//   var mesa = document.querySelector("#mesa");
//   var tarjetasBarajadas = barajaTarjetas();
//   mesa.innerHTML = "";

//   // EJERCICIO: recorre el array de tarjetasBarajadas y para cada
//   // elemento, crea un div (cárgalo en una variable) y declara que su
//   // innerHTML es el div con la clase "tarjeta" y en el interior
//   // del mismo, un div con la clase "tarjeta__contenido".
//   // Añade además el valor del elemento como contenido de la tarjeta

//   // EJERCICIO: una vez has creado la tarjeta, y todavía dentro del
//   // loop, añade la tarjeta generada como "child" del nodo mesa.

//   // BONUS: podrías hacer que las tarjetas solo se repartieran cuando
//   // se apriete un botón que ponga "repartir cartas"
// }

// function descubrir() {
//   this.classList.add("descubierta");
// }

// reparteTarjetas();

// document.querySelectorAll(".tarjeta").forEach(function(elemento) {
//   elemento.addEventListener("click", descubrir);
// });
