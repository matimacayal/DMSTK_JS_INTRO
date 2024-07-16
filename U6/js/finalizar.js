function finalizar() {
  if (levelManager.juegoFinalizado) {
    document.querySelector("#endGame").classList.add("visible");
  } else {
    document.querySelector("#subeNivel").classList.add("visible");
  }
}
