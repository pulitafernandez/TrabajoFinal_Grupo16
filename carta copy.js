"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carta = void 0;
var Carta = /** @class */ (function () {
    function Carta(valor, palo) {
        this.valor = valor;
        this.palo = palo;
    }
    Carta.prototype.getValor = function () {
        return this.valor;
    };
    Carta.prototype.getPalo = function () {
        return this.palo;
    };
    Carta.prototype.getValorNumerico = function () {
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
                throw new Error("Valor de carta no reconocido: ".concat(this.valor));
        }
    };
    Carta.obtenerCartaAleatoria = function () {
        var valor = Carta.valoresCarta[Math.floor(Math.random() * Carta.valoresCarta.length)];
        var palo = Carta.palos[Math.floor(Math.random() * Carta.palos.length)];
        return new Carta(valor, palo);
    };
    Carta.valoresCarta = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    Carta.palos = ['Trebol', 'Pica', 'Diamante', 'Corazon'];
    return Carta;
}());
exports.Carta = Carta;
