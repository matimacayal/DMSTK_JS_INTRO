function iniciarJuego() {
  reparteTarjetas(levelManager.tarjetas);

  contador.reiniciarMovimientos();
  contador.actualizarMaxMovimientosUI();
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  activaTarjetas();

  clearInterval(cronometroJuego.id);
  iniciarCronometro();
}

iniciarJuego();

document.querySelectorAll(".reiniciar").forEach(function (elemento) {
  elemento.addEventListener("click", levelManager.reiniciarNiveles);
});

document
  .querySelector("#subir")
  .addEventListener("click", levelManager.cargarNuevoNivel);
