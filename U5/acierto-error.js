function acertado(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("acertada");
  });
}

function errado(cartas) {
  cartas.forEach(function (elemento) {
    elemento.classList.add("error");
  });

  setTimeout(function () {
    cartas.forEach(function (elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
