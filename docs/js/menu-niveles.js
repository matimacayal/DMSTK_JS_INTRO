function escribeNiveles() {
  var levelMenu = document.querySelector(".selecciona-nivel ul");
  var niveles = levelManager.niveles;
  niveles.forEach((elemento, indice) => {
    var nivelUI = document.createElement("li");
    nivelUI.innerHTML =
      "<button class='nivel' data-nivel=" +
      indice +
      ">Nivel " +
      (indice + 1) +
      "</button>";
    levelMenu.appendChild(nivelUI);
  });
}

function cambiaNivel() {
  var nivel = parseInt(this.dataset.nivel);
  levelManager.nivelActual = nivel;
  levelManager.actualizaNivel();
  iniciarJuego();
}

function muestraMenuNiveles(evento) {
  evento.stopPropagation();
  document.querySelector(".selecciona-nivel").classList.toggle("visible");
}

function ocultaMenuNiveles() {
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest(".selecciona-nivel")) {
    return;
  }
  ocultaMenuNiveles();
}

function teclaEscCierraMenu(evento) {
  console.log(evento.key);
  if (evento.key === "Escape") {
    ocultaMenuNiveles();
  }
}
