levelManager = {
  nivelActual: 0,
  nivelTexto: "1",
  nivelTextoUI: document.querySelector("#nivel"),
  niveles: [
    {
      tarjetas: grupoTarjetas1,
      movimientosMax: 5,
    },
    {
      tarjetas: grupoTarjetas2,
      movimientosMax: 10,
    },
    {
      tarjetas: grupoTarjetas3,
      movimientosMax: 17,
    },
  ],

  subeNivel: function () {
    this.nivelActual++;
    console.log("nivel actual:" + this.nivelActual);
  },

  actualizaNivelUI: function () {
    this.nivelTexto = this.nivelActual + 1;
    this.nivelTexto =
      this.nivelTexto < 10 ? "0" + this.nivelTexto : this.nivelTexto;
    this.nivelTextoUI.innerText = this.nivelTexto;
  },

  cargarNuevoNivel: function () {
    levelManager.subeNivel();
    levelManager.actualizaNivelUI();
    iniciarJuego();
  },

  actualizaNivel: function () {
    this.nivelTexto = this.nivelActual + 1;
    this.nivelTexto =
      this.nivelTexto < 10 ? "0" + this.nivelTexto : this.nivelTexto;
    document.querySelector("#nivel").innerText = this.nivelTexto;
  },

  reiniciarNiveles: function () {
    levelManager.nivelActual = 0;
    levelManager.actualizaNivelUI();
    iniciarJuego();
  },

  get tarjetas() {
    return this.niveles[this.nivelActual].tarjetas;
  },

  get movimientosMax() {
    return this.niveles[this.nivelActual].movimientosMax;
  },

  get juegoFinalizado() {
    finalizamos = this.nivelActual >= this.niveles.length - 1 ? true : false;
    return finalizamos;
  },
};
