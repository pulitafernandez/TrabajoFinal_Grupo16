"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var Jugador_1 = require("./Jugador");
var Casino = /** @class */ (function () {
    function Casino(idCasino, nombre) {
        this.min = 0;
        this.max = 1000;
        this.idCasino = idCasino;
        this.nombre = nombre;
        this.juegos = [];
        this.jugadores = [];
    }
    Casino.prototype.getNombre = function () {
        return this.nombre;
    };
    Casino.prototype.getIdCasino = function () {
        return this.idCasino;
    };
    Casino.prototype.agregarJuego = function (juego) {
        this.juegos.push(juego);
    };
    Casino.prototype.agregarJugador = function (nuevoJugador) {
        if (nuevoJugador instanceof Jugador_1.Jugador) {
            nuevoJugador.setIdJugador(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
            this.jugadores.push(nuevoJugador);
        }
    };
    Casino.prototype.iniciarJuego = function (juego) { };
    return Casino;
}());
exports.Casino = Casino;
