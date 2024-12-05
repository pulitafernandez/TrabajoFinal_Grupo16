"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, creditos) {
        this.nombre = nombre;
        this.creditos = creditos;
    }
    //getters y setters
    Jugador.prototype.getIdJugador = function () {
        return this.idJugador;
    };
    Jugador.prototype.setIdJugador = function (nuevoidJugador) {
        this.idJugador = nuevoidJugador;
    };
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Jugador.prototype.getCreditos = function () {
        return this.creditos;
    };
    Jugador.prototype.setCreditos = function (nuevoCreditos) {
        this.creditos = nuevoCreditos;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
