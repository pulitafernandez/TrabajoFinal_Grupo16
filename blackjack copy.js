"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
var carta_copy_1 = require("./carta copy");
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.jugadorCarta = [];
        this.bancaCarta = [];
    }
    BlackJack.prototype.limpiarArrays = function () {
        this.jugadorCarta.splice(0);
        this.bancaCarta.splice(0);
    };
    BlackJack.prototype.mostrarCartaJug = function () {
        console.log(this.jugadorCarta.map(function (carta1) { return "Carta: ".concat(carta1.getValor(), " ").concat(carta1.getPalo()); }).join('\n'));
    };
    BlackJack.prototype.mostarCartaBanca = function () {
        console.log(this.bancaCarta.map(function (carta1) { return "Carta: ".concat(carta1.getValor(), " ").concat(carta1.getPalo()); }).join('\n'));
    };
    BlackJack.prototype.obtenerSumaJugador = function () {
        var suma = 0;
        for (var _i = 0, _a = this.jugadorCarta; _i < _a.length; _i++) {
            var carta = _a[_i];
            suma += carta.getValorNumerico();
        }
        return suma;
    };
    BlackJack.prototype.obtenerSumaBanca = function () {
        var suma = 0;
        for (var _i = 0, _a = this.bancaCarta; _i < _a.length; _i++) {
            var carta = _a[_i];
            suma += carta.getValorNumerico();
        }
        return suma;
    };
    BlackJack.prototype.pedirCartaJugador = function () {
        this.jugadorCarta.push(carta_copy_1.Carta.obtenerCartaAleatoria());
    };
    BlackJack.prototype.pedirCartaBanca = function () {
        this.bancaCarta.push(carta_copy_1.Carta.obtenerCartaAleatoria());
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;
