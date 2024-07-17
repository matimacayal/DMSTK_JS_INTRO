// voy a hacer versión pajera de reiniciar cronómetros.
cronometroJuego = {
  id: 0,
};

function iniciarCronometro() {
  var segundos = 0;
  var minutos = 1;
  var segundosText = String(segundos);
  var minutosText = String(minutos);
  var segundosUI = document.querySelector("#segundos");
  var minutosUI = document.querySelector("#minutos");
  var cronometro;

  function actualizarTiempo() {
    segundosText = segundos < 10 ? "0" + segundos : segundos;
    minutosText = minutos < 10 ? "0" + minutos : minutos;

    segundosUI.innerText = segundosText;
    minutosUI.innerText = minutosText;

    console.log(minutosText + ":" + segundosText);

    segundos--;

    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }

    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      gameOver();
    }
  }

  cronometro = setInterval(actualizarTiempo, 1000);
  cronometroJuego.id = cronometro;
}
