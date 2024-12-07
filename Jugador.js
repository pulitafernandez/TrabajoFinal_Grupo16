"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador(nombre, creditos) {
        this.idJugador = 0;
        this.min = 0;
        this.max = 1000;
        this.nombre = nombre;
        this.creditos = creditos;
        this.idJugador = (Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
    // Manejo Creditos
    Jugador.prototype.cargarCreditos = function (monto) {
        this.creditos += monto;
        console.log("Su cr\u00E9dito actual es: $".concat(this.creditos));
    };
    Jugador.prototype.setCreditos = function (nuevoCreditos) {
        this.creditos = nuevoCreditos;
    };
    Jugador.prototype.consultarCreditos = function () {
        return this.creditos;
    };
    //Getters y setters
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Jugador.prototype.getIdJugador = function () {
        return this.idJugador;
    };
    Jugador.prototype.setIdJugador = function (nuevoidJugador) {
        this.idJugador = nuevoidJugador;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
