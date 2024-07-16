function descubrir() {
  var descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  // this.setAttribute("ejemplo", "asedfasd");

  if (descubiertas.length > 1) {
    return;
  }

  this.classList.add("descubierta");
  // usando this se hace referencia a quién a llamado la función

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  if (descubiertas.length < 2) {
    return;
  }

  console.log(descubiertas[0]);
  console.log(descubiertas[1]);
  comparar(descubiertas);
}

function comparar(cartas) {
  if (cartas[0].dataset.valor === cartas[1].dataset.valor) {
    acertado(cartas);
  } else {
    errado(cartas);
  }
}
