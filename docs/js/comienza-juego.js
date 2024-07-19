// Escribimos los niveles dinámicamente en manu de niveles
escribeNiveles();

// Agrega reiniciar para botones de modales sube-nivel, time-over, game-overy y end-game
document.querySelectorAll(".reiniciar").forEach(function (elemento) {
  elemento.addEventListener("click", levelManager.reiniciarNiveles);
});

// Botones pantalla de inicio Juego Normal/Juego Relax
document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciaJuegoNormal);
document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciaJuegoRelax);

// Botones navbar derecha de opciones de niveles
document
  .querySelector("#control-nivel")
  .addEventListener("click", muestraMenuNiveles);
document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultaMenuNiveles);

// onClick para cada nivel a seleccionar en Juego Relax
document.querySelectorAll(".nivel").forEach(function (elemento) {
  elemento.addEventListener("click", cambiaNivel);
});

document
  .querySelector("#subir")
  .addEventListener("click", levelManager.cargarNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

//Mostramos pantalla de bienvenida
document.querySelector("#bienvenida").classList.add("visible");
