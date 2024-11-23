"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackJack = void 0;
var carta_1 = require("./carta");
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
    BlackJack.prototype.pedirCartaJug = function () {
        this.jugador.push(carta_1.Carta.obtenerCartaAleatoria());
    };
    BlackJack.prototype.pedirCartaCrup = function () {
        this.jugador.push(carta_1.Carta.obtenerCartaAleatoria());
    };
    BlackJack.prototype.iniciarJuego = function () {
        this.jugador.push(carta_1.Carta.obtenerCartaAleatoria());
        this.jugador.push(carta_1.Carta.obtenerCartaAleatoria());
        this.banca.push(carta_1.Carta.obtenerCartaAleatoria());
        this.banca.push(carta_1.Carta.obtenerCartaAleatoria());
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
        this.jugador.push(carta_1.Carta.obtenerCartaAleatoria());
    };
    BlackJack.prototype.pedirCartaBanca = function () {
        this.banca.push(carta_1.Carta.obtenerCartaAleatoria());
    };
    BlackJack.prototype.jugar = function () {
        this.iniciarJuego();
        while (this.obtenerSumaJugador() < 21) {
            console.log("Suma jugador: ".concat(this.obtenerSumaJugador()));
            console.log("\u00BFDesea pedir otra carta?");
            var respuesta = prompt('S/N');
            if (respuesta != null && respuesta.toUpperCase() === 'S') {
                this.pedirCartaJugador();
            }
            else {
                break;
            }
        }
        while (this.obtenerSumaBanca() < this.obtenerSumaJugador()) {
            this.pedirCartaBanca();
        }
        console.log("Suma jugador: ".concat(this.obtenerSumaJugador()));
        console.log("Suma banca: ".concat(this.obtenerSumaBanca()));
        if (this.obtenerSumaJugador() > 21) {
            console.log('Jugador se pasó, banca gana');
        }
        else if (this.obtenerSumaBanca() > 21) {
            console.log('Banca se pasó, jugador gana');
        }
        else if (this.obtenerSumaJugador() > this.obtenerSumaBanca()) {
            console.log('Jugador gana');
        }
        else if (this.obtenerSumaBanca() > this.obtenerSumaJugador()) {
            console.log('Banca gana');
        }
        else {
            console.log('Empate');
        }
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;
