const contador = {
  movimientos: 0,
  movimientosText: "0",
  movimientosUI: document.querySelector("#mov"),
  movimientosMax: 0,
  movimientosMaxUI: document.querySelector("#mov-total"),

  actualizarMovimientos: function () {
    this.movimientos++;

    this.movimientosText =
      this.movimientos < 10 ? "0" + this.movimientos : this.movimientos;
    this.movimientosUI.innerText = this.movimientosText;

    if (this.movimientos >= this.movimientosMax && !modoRelax) {
      var tarjetasPendientes = document.querySelectorAll(
        ".tarjeta:not(.acertada)"
      );
      if (tarjetasPendientes.length === 0) {
        finalizar();
      } else {
        gameOver();
        return;
      }
    }
  },

  actualizarMaxMovimientosUI: function () {
    this.movimientosMax = levelManager.movimientosMax;
    var movimientoMaxText =
      this.movimientosMax < 10
        ? "0" + this.movimientosMax
        : this.movimientosMax;
    this.movimientosMaxUI.innerText = movimientoMaxText;
  },

  reiniciarMovimientos: function () {
    this.movimientos = -1;
    this.actualizarMovimientos();
  },
};
