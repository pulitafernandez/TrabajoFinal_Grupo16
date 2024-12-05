"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(idCasino) {
        this.idCasino = idCasino;
        this.juegos = [];
        this.jugadores = [];
    }
    Casino.prototype.getIdCasino = function () {
        return this.idCasino;
    };
    Casino.prototype.agregarJugador = function (jugador) {
        this.jugadores.push(jugador);
    };
    Casino.prototype.getJugadores = function () {
        return this.jugadores;
    };
    Casino.prototype.setJugadores = function (jugadores) {
        this.jugadores = jugadores;
    };
    return Casino;
}());
exports.Casino = Casino;
