"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
var Carta_1 = require("./Carta");
var Juego_1 = require("./Juego");
var BlackJack = /** @class */ (function (_super) {
    __extends(BlackJack, _super);
    function BlackJack(apuestaMinima, jugador) {
        var _this = _super.call(this, "BlackJack") || this;
        _this.jugador = [];
        _this.banca = [];
        return _this;
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
        this.jugador.push(Carta_1.Carta.obtenerCartaAleatoria());
    };
    BlackJack.prototype.pedirCartaBanca = function () {
        this.banca.push(Carta_1.Carta.obtenerCartaAleatoria());
    };
    BlackJack.prototype.mostrarResultado = function () { };
    BlackJack.prototype.cargarCredito = function () { };
    BlackJack.prototype.actualizarSaldo = function () { };
    BlackJack.prototype.cobrarPremio = function () { };
    BlackJack.prototype.realizarApuesta = function () { };
    return BlackJack;
}(Juego_1.Juego));
exports.BlackJack = BlackJack;
