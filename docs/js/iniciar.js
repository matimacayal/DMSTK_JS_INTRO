function iniciarJuego() {
  reparteTarjetas(levelManager.tarjetas);

  contador.reiniciarMovimientos();
  contador.actualizarMaxMovimientosUI();
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  activaTarjetas();

  if (!modoRelax) {
    clearInterval(cronometroJuego.id);
    iniciarCronometro();
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
    document.querySelector("#mov-total").classList.add("mov-total-oculto");
    document.querySelector("#mov-slash").classList.add("mov-total-oculto");
  }
}

function iniciaJuegoNormal() {
  modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciarJuego();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax() {
  modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciarJuego();
}
