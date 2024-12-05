"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(nombre, apuestaMinima) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;
    }
    Juego.prototype.iniciarJuego = function () { };
    Juego.prototype.mostrarResultado = function () { };
    Juego.prototype.resultado = function () {
        return ("");
    };
    return Juego;
}());
exports.Juego = Juego;
