"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
const carta_1 = require("./carta");
class BlackJack {
    constructor(nombre, apuestaMinima) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;
        this.jugador = [];
        this.banca = [];
    }
    limpiarArrays() {
        this.jugador.splice(0);
        this.banca.splice(0);
    }
    mostrarCartaJug() {
        console.log(this.jugador.map((carta1) => `Carta: ${carta1.getValor()} ${carta1.getPalo()}`).join('\n'));
    }
    mostarCartaBanca() {
        console.log(this.banca.map((carta1) => `Carta: ${carta1.getValor()} ${carta1.getPalo()}`).join('\n'));
    }
    obtenerSumaJugador() {
        let suma = 0;
        for (const carta of this.jugador) {
            suma += carta.getValorNumerico();
        }
        return suma;
    }
    obtenerSumaBanca() {
        let suma = 0;
        for (const carta of this.banca) {
            suma += carta.getValorNumerico();
        }
        return suma;
    }
    pedirCartaJugador() {
        this.jugador.push(carta_1.Carta.obtenerCartaAleatoria());
    }
    pedirCartaBanca() {
        this.banca.push(carta_1.Carta.obtenerCartaAleatoria());
    }
}
exports.BlackJack = BlackJack;
