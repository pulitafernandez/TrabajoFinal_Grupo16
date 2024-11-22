"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
var carta_copy_1 = require("./carta copy");
var BlackJack = /** @class */ (function () {
    function BlackJack(nombre, apuestaMinima) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;
        this.jugador = [];
        this.banca = [];
    }
    BlackJack.prototype.limpiarArrays = function () {
        this.jugador.splice(0);
        this.banca.splice(0);
    };
    BlackJack.prototype.mostrarCartaJug = function () {
        console.log(this.jugador.map(function (carta1) { return "Carta: ".concat(carta1.getValor(), " ").concat(carta1.getPalo()); }).join('\n'));
    };
    BlackJack.prototype.mostarCartaBanca = function () {
        console.log(this.banca.map(function (carta1) { return "Carta: ".concat(carta1.getValor(), " ").concat(carta1.getPalo()); }).join('\n'));
    };
    BlackJack.prototype.obtenerSumaJugador = function () {
        var suma = 0;
        for (var _i = 0, _a = this.jugador; _i < _a.length; _i++) {
            var carta = _a[_i];
            suma += carta.getValorNumerico();
        }
        return suma;
    };
    BlackJack.prototype.obtenerSumaBanca = function () {
        var suma = 0;
        for (var _i = 0, _a = this.banca; _i < _a.length; _i++) {
            var carta = _a[_i];
            suma += carta.getValorNumerico();
        }
        return suma;
    };
    BlackJack.prototype.pedirCartaJugador = function () {
        this.jugador.push(carta_copy_1.Carta.obtenerCartaAleatoria());
    };
    BlackJack.prototype.pedirCartaBanca = function () {
        this.banca.push(carta_copy_1.Carta.obtenerCartaAleatoria());
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;
