"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carta = void 0;
class Carta {
    constructor(valor, palo) {
        this.valor = valor;
        this.palo = palo;
    }
    getValor() {
        return this.valor;
    }
    getPalo() {
        return this.palo;
    }
    getValorNumerico() {
        switch (this.valor) {
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '10':
                return parseInt(this.valor);
            case 'J':
            case 'Q':
            case 'K':
                return 10;
            case 'A':
                return 11; // por defecto, el AS vale 11
            default:
                throw new Error(`Valor de carta no reconocido: ${this.valor}`);
        }
    }
    static obtenerCartaAleatoria() {
        const valor = Carta.valoresCarta[Math.floor(Math.random() * Carta.valoresCarta.length)];
        const palo = Carta.palos[Math.floor(Math.random() * Carta.palos.length)];
        return new Carta(valor, palo);
    }
}
exports.Carta = Carta;
Carta.valoresCarta = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
Carta.palos = ['Trebol', 'Pica', 'Diamante', 'Corazon'];
