"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apuesta = void 0;
var Apuesta = /** @class */ (function () {
    function Apuesta(cantidadApuesta) {
        this.cantidadApuesta = cantidadApuesta;
    }
    //verifico si la apuesta es valida
    Apuesta.prototype.esValida = function (apuestaMinima) {
        return this.cantidadApuesta >= apuestaMinima;
    };
    //calculo la ganancia del jugador
    Apuesta.prototype.calcularGanancia = function (esGanador) {
        return esGanador ? this.cantidadApuesta * 2 : 0;
    };
    return Apuesta;
}());
exports.Apuesta = Apuesta;
