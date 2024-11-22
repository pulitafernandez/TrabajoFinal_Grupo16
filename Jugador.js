"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
var Jugador = /** @class */ (function () {
    function Jugador() {
        this.jugador = [];
        this.min = 0;
        this.max = 1000;
    }
    Jugador.prototype.contructor = function (idJugador, nombre, creditos) {
        this.idJugador = idJugador;
        this.nombre = nombre;
        this.creditos = creditos;
    };
    //getters y setters
    Jugador.prototype.getIdJugador = function () {
        return this.idJugador;
    };
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.cargarCreditos = function (monto) {
        this.creditos = this.creditos + monto;
        return console.log("Su credito actual es,".concat(this.creditos));
    };
    Jugador.prototype.consultarCreditos = function () {
        return this.creditos;
    };
    Jugador.prototype.agregarJugador = function (nuevoJugador) {
        if (nuevoJugador instanceof Jugador) {
            nuevoJugador.setIdJugador(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
            this.jugador.push(nuevoJugador);
        }
    };
    Jugador.prototype.setIdJugador = function (nuevoidJugador) {
        this.idJugador = nuevoidJugador;
    };
    return Jugador;
}());
exports.Jugador = Jugador;
//
