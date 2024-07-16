function barajaTarjetas(tarjetas) {
  var resultado;
  totalTarjetas = tarjetas.concat(tarjetas);
  resultado = totalTarjetas.sort(function () {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas(tarjetas) {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas(tarjetas);

  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function (elemento) {
    var tarjeta = document.createElement("div"); // TODO: me molesta porque queda un div sobrando

    tarjeta.innerHTML =
      '<div class="tarjeta" data-valor=' +
      elemento +
      ">" +
      '<div class="tarjeta__contenido">' +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function activaTarjetas() {
  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });
}
