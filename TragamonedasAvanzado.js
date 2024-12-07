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
var MenuCasino_1 = require("./MenuCasino");
var TragamonedasAvanzado = /** @class */ (function (_super) {
    __extends(TragamonedasAvanzado, _super);
    function TragamonedasAvanzado() {
        var _this = _super.call(this, "Tragamonedas Avanzado", "Superheroes") || this;
        _this.menu1 = new MenuCasino_1.MenuCasino();
        _this.simbolos = ["🦸‍♂️", "🦸‍♀️", "💥", "⚡", "🛡️", "🦸‍♂️🦹‍♂️"]; // Ejemplo de superhéroes, poderes y comodines
        _this.carretesCount = 5; // Supongamos que hay 5 carretes
        _this.filasCount = 3; // Y cada carrete tiene 3 filas
        _this.carretes = Array.from({ length: _this.carretesCount }, function () { return []; }); // Inicializamos el array de carretes
        return _this;
    }
    TragamonedasAvanzado.prototype.actualizarSaldo = function () {
        console.log("Jugador ".concat(this.menu1.getnombreMcasino()));
        console.log("Tus Creditos son de:".concat(this.menu1.getcreditosMcasino(), "\n"));
    };
    TragamonedasAvanzado.prototype.realizarApuesta = function () {
        var _this = this;
        this.actualizarSaldo();
        this.apuesta = 0;
        console.log("---------------------------------------------------------------------- \n");
        this.menu1.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 1000 y la maxima es de 10000): ', function (apuesta) {
            var apuestaNumero = parseInt(apuesta);
            if (apuestaNumero >= 1000 && apuestaNumero <= 10000 && _this.menu1.getcreditosMcasino() >= apuestaNumero) {
                // if (this.menu5.getcreditosMcasino() >= apuestaNumero) {
                _this.apuesta = apuestaNumero;
                _this.menu1.setcreditosMcasino(_this.menu1.getcreditosMcasino() - _this.apuesta);
                console.log("---------------------------------------------------------------------- \n");
                console.log("Su apuesta es de ".concat(_this.apuesta));
                console.log("Tus Creditos son : ".concat(_this.menu1.getcreditosMcasino()));
                console.log("---------------------------------------------------------------------- \n");
                _this.iniciarJuego();
            }
            else {
                console.log("---------------------------------------------------------------------- \n");
                console.log("Su apuesta no esta entre los parametros requeridos");
                _this.apuesta = 0;
                _this.menu1.mostrarReglasSuperheroes();
            }
        });
    };
    // Implementación de iniciarJuego para TragamonedasAvanzado
    TragamonedasAvanzado.prototype.iniciarJuego = function () {
        console.log("Girando los carretes de Tragamonedas Avanzado: Superhéroes...");
        // Llenamos cada carrete con una combinación aleatoria de símbolos
        for (var i = 0; i < this.carretes.length; i++) {
            this.carretes[i] = [];
            for (var j = 0; j < this.filasCount; j++) { // Cada carrete tiene 3 filas
                var simboloAleatorio = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
                this.carretes[i].push(simboloAleatorio);
            }
            // Mostrar los resultados de los carretes
        }
        // this.mostrarResultado();
        // Evaluar si el jugador ha ganado
        var resultadoGanador = this.evaluarGanador();
        if (resultadoGanador) {
            console.log("¡Has ganado! Felicitaciones, tu superhéroe ha salvado el día.");
            this.menu1.setcreditosMcasino(this.menu1.getcreditosMcasino() + (this.apuesta * 3));
            this.menu1.menuSuperheroe();
        }
        else {
            console.log("No has ganado esta vez. ¡Sigue luchando!");
            this.menu1.menuSuperheroe();
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
