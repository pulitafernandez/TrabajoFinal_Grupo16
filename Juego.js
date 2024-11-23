"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(nombre, apuestaMinima) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;
    }
    Juego.prototype.iniciarJuego = function () { };
    // public esValida(apuestaMinima: number): boolean {
    //     return this.cantidadApuesta >= apuestaMinima;
    // }
    // //calculo la ganancia del jugador
    // calcularGanancia(esGanador: boolean): number {
    //     return esGanador ? this.cantidadApuesta * 2 : 0;
    // }
    //metodo abstracto
    Juego.prototype.mostrarResultado = function () { };
    Juego.prototype.resultado = function () {
        return ("");
    };
    return Juego;
}());
exports.Juego = Juego;
