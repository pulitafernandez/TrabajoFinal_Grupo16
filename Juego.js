"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
class Juego {
    constructor(nombre) {
        this.nombre = nombre;
    }
    /*
    iniciarJuego() { }*/
    // public esValida(apuestaMinima: number): boolean {
    //     return this.cantidadApuesta >= apuestaMinima;
    // }
    // //calculo la ganancia del jugador
    // calcularGanancia(esGanador: boolean): number {
    //     return esGanador ? this.cantidadApuesta * 2 : 0;
    // }
    //metodo abstracto
    mostrarResultado() { }
    resultado() {
        return ("");
    }
}
exports.Juego = Juego;
