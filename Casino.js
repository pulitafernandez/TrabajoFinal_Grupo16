"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(idCasino, nombre) {
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
    Casino.prototype.agregarJugador = function (jugador) {
        this.jugadores.push(jugador);
    };
    Casino.prototype.iniciarJuego = function (juego) {
    };
    return Casino;
}());
exports.Casino = Casino;
