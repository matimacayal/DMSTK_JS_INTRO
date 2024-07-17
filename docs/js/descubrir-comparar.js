function descubrir() {
  var descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  // this.setAttribute("ejemplo", "asedfasd");

  if (descubiertas.length > 1) {
    return;
  }
  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  this.classList.add("descubierta"); // usando this se hace referencia a quién a llamado la función

  document.querySelector("#sonido-carta").play();
  // document.querySelector("#sonido-carta").cloneNode().play();

  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

  if (descubiertas.length < 2) {
    return;
  }

  console.log(descubiertas);
  comparar(descubiertas);
  contador.actualizarMovimientos();

  var tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length === 0) {
    setTimeout(finalizar, 1000);
  }
}

function comparar(cartas) {
  if (cartas[0].dataset.valor === cartas[1].dataset.valor) {
    acertado(cartas);
  } else {
    errado(cartas);
  }
}
