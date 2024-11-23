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
exports.Tragamonedas = void 0;
var Juego_1 = require("./Juego");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombre, apuestaMinima, tematica) {
        var _this = _super.call(this, "Tragamonedas", apuestaMinima) || this;
        _this.tematica = tematica;
        return _this;
    }
    //en base a la apuesta, veo que resultado obtiene
    Tragamonedas.prototype.resultado1 = function (apuesta) {
        if (!apuesta.esValida(this.apuestaMinima)) {
            return "La apuesta minima es ".concat(this.apuestaMinima, ". Apuesta invalida");
        }
        //genero el resultado del juego
        var resultadoJuego = this.mostrarResultado();
        var esGanador = Math.random() > 0.5; //probalidad de ganar
        //calculo la ganancia
        var ganancia = apuesta.calcularGanancia(esGanador);
        if (ganancia > 0) {
            return "Ganaste!! El resultado es ".concat(resultadoJuego, ". Ganaste $ ").concat(ganancia);
        }
        else {
            return "Perdiste. El resultado es ".concat(resultadoJuego);
        }
    };
    Tragamonedas.prototype.resultado = function () {
        // Código para calcular el resultado
        return 'Resultado';
    };
    return Tragamonedas;
}(Juego_1.Juego));
exports.Tragamonedas = Tragamonedas;
