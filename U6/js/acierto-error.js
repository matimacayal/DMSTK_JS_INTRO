function acertado(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });

  document.querySelector("#sonido-acierto").play();
}

function errado(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("error");
  });

  document.querySelector("#sonido-error").play();

  setTimeout(function () {
    cartas.forEach(function (elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
