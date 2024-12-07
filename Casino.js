"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
const Jugador_1 = require("./Jugador");
class Casino {
    constructor(idCasino, nombre) {
        this.min = 0;
        this.max = 1000;
        this.idCasino = idCasino;
        this.nombre = nombre;
        this.juegos = [];
        this.jugadores = [];
    }
    getNombre() {
        return this.nombre;
    }
    getIdCasino() {
        return this.idCasino;
    }
    agregarJuego(juego) {
        this.juegos.push(juego);
    }
    agregarJugador(nuevoJugador) {
        if (nuevoJugador instanceof Jugador_1.Jugador) {
            nuevoJugador.setIdJugador(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
            this.jugadores.push(nuevoJugador);
        }
    }
    iniciarJuego(juego) { }
}
exports.Casino = Casino;
