"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tragamonedas = void 0;
const Juego_1 = require("./Juego");
class Tragamonedas extends Juego_1.Juego {
    constructor(nombre, apuestaMinima, tematica) {
        super("Tragamonedas");
        this.tematica = tematica;
    }
    resultado() {
        // Código para calcular el resultado
        return 'Resultado';
    }
}
exports.Tragamonedas = Tragamonedas;
