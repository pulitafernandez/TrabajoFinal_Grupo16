"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apuesta = void 0;
class Apuesta {
    constructor(cantidadApuesta) {
        this.cantidadApuesta = cantidadApuesta;
    }
    //verifico si la apuesta es valida
    esValida(apuestaMinima) {
        return this.cantidadApuesta >= apuestaMinima;
    }
    //calculo la ganancia del jugador
    calcularGanancia(esGanador) {
        return esGanador ? this.cantidadApuesta * 2 : 0;
    }
}
exports.Apuesta = Apuesta;
