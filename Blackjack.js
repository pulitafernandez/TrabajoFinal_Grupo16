"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
const Carta_1 = require("./Carta");
const Juego_1 = require("./Juego");
class BlackJack extends Juego_1.Juego {
    constructor(apuestaMinima, jugador) {
        super("BlackJack");
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
        this.jugador.push(Carta_1.Carta.obtenerCartaAleatoria());
    }
    pedirCartaBanca() {
        this.banca.push(Carta_1.Carta.obtenerCartaAleatoria());
    }
    mostrarResultado() { }
    cargarCredito() { }
    actualizarSaldo() { }
    cobrarPremio() { }
    realizarApuesta() { }
}
exports.BlackJack = BlackJack;
