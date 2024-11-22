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
exports.TragamonedasAvanzado = void 0;
var Tragamonedas_1 = require("./Tragamonedas");
var TragamonedasAvanzado = /** @class */ (function (_super) {
    __extends(TragamonedasAvanzado, _super);
    function TragamonedasAvanzado(apuestaMinima) {
        var _this = _super.call(this, "Tragamonedas Avanzado", apuestaMinima, "Superheroes") || this;
        _this.simbolos = ["🦸‍♂️", "🦸‍♀️", "💥", "⚡", "🛡️", "🦸‍♂️🦹‍♂️"]; // Ejemplo de superhéroes, poderes y comodines
        _this.carretesCount = 5; // Supongamos que hay 5 carretes
        _this.filasCount = 3; // Y cada carrete tiene 3 filas
        _this.carretes = Array.from({ length: _this.carretesCount }, function () { return []; }); // Inicializamos el array de carretes
        return _this;
    }
    // Implementación de iniciarJuego para TragamonedasAvanzado
    TragamonedasAvanzado.prototype.iniciarJuego = function () {
        console.log("Girando los carretes de Tragamonedas Avanzado...");
        console.log("Girando los carretes de Tragamonedas Avanzado: Superhéroes...");
        // Llenamos cada carrete con una combinación aleatoria de símbolos
        for (var i = 0; i < this.carretes.length; i++) {
            this.carretes[i] = [];
            for (var j = 0; j < this.filasCount; j++) { // Cada carrete tiene 3 filas
                var simboloAleatorio = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
                this.carretes[i].push(simboloAleatorio);
            }
            // Mostrar los resultados de los carretes
            this.mostrarResultado();
            // Evaluar si el jugador ha ganado
            var resultadoGanador = this.evaluarGanador();
            if (resultadoGanador) {
                console.log("¡Has ganado! Felicitaciones, tu superhéroe ha salvado el día.");
            }
            else {
                console.log("No has ganado esta vez. ¡Sigue luchando!");
            }
        }
    };
    //implemento el metodo generarResultado
    TragamonedasAvanzado.prototype.mostrarResultado = function () {
        console.log("Resultado de los carretes:");
        for (var i = 0; i < this.carretes.length; i++) {
            console.log(this.carretes[i].join(" | "));
        }
    };
    // Evaluar si hay una combinación ganadora
    TragamonedasAvanzado.prototype.evaluarGanador = function () {
        var _loop_1 = function (i) {
            var combinacion = this_1.carretes.map(function (carrete) { return carrete[i]; }); // Tomamos una fila de cada carrete
            console.log("Fila ".concat(i + 1, ":"), combinacion);
            // Comprobar si todas las posiciones de la fila son iguales (combinación ganadora)
            if (combinacion.every(function (simbolo) { return simbolo === combinacion[0]; })) {
                return { value: true };
            }
        };
        var this_1 = this;
        // Evaluar combinaciones de superhéroes o poderes en las filas
        for (var i = 0; i < this.filasCount; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return false; // Si no hay combinación ganadora
    };
    return TragamonedasAvanzado;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedasAvanzado = TragamonedasAvanzado;
