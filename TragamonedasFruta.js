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
exports.TragamonedasFruta = void 0;
var MenuCasino_1 = require("./MenuCasino");
var Tragamonedas_1 = require("./Tragamonedas");
var TragamonedasFruta = /** @class */ (function (_super) {
    __extends(TragamonedasFruta, _super);
    function TragamonedasFruta() {
        //constructor(nombre:string, apuestaMinima: number,  tematica:string) {
        var _this = _super.call(this, "TragamonedasClasico", "Frutas") || this;
        _this.menu2 = new MenuCasino_1.MenuCasino();
        _this.simbolos = ["🍎", "🍊", "🍒", "🍇", "🍉"]; // Frutas representadas por emojis
        _this.carretes = [
            [], [], [] // Tres carretes vacíos (un carrete por fila)
        ];
        return _this;
    }
    // Implementación de iniciarJuego para TragamonedasFrutas
    TragamonedasFruta.prototype.actualizarSaldo = function () {
        console.log("Jugador ".concat(this.menu2.getnombreMcasino()));
        console.log("Tus Creditos son de:".concat(this.menu2.getcreditosMcasino(), "\n"));
    };
    TragamonedasFruta.prototype.realizarApuesta = function () {
        var _this = this;
        this.actualizarSaldo();
        this.apuesta = 0;
        console.log("---------------------------------------------------------------------- \n");
        this.menu2.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 1000 y la maxima es de 10000): ', function (apuesta) {
            var apuestaNumero = parseInt(apuesta);
            if (apuestaNumero >= 1000 && apuestaNumero <= 10000 && _this.menu2.getcreditosMcasino() >= apuestaNumero) {
                // if (this.menu5.getcreditosMcasino() >= apuestaNumero) {
                _this.apuesta = apuestaNumero;
                _this.menu2.setcreditosMcasino(_this.menu2.getcreditosMcasino() - _this.apuesta);
                console.log("---------------------------------------------------------------------- \n");
                console.log("Su apuesta es de ".concat(_this.apuesta));
                console.log("Tus Creditos son : ".concat(_this.menu2.getcreditosMcasino()));
                console.log("---------------------------------------------------------------------- \n");
                _this.iniciarJuego();
            }
            else {
                console.log("---------------------------------------------------------------------- \n");
                console.log("Su apuesta no esta entre los parametros requeridos");
                _this.apuesta = 0;
                _this.menu2.menutragamonedasFrutas();
            }
        });
    };
    TragamonedasFruta.prototype.iniciarJuego = function () {
        this.actualizarSaldo();
        console.log("Girando los carretes de Tragamonedas Frutas...");
        // Llenar cada carrete con una combinación aleatoria de frutas
        for (var i = 0; i < this.carretes.length; i++) {
            this.carretes[i] = [];
            for (var j = 0; j < 3; j++) { // Supongamos que cada carrete tiene 3 símbolos
                var simboloAleatorio = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
                this.carretes[i].push(simboloAleatorio);
            }
        }
        // Mostrar los resultados de los carretes
        this.mostrarResultado();
        // Evaluar si el jugador ha ganado
        var resultadoGanador = this.evaluarGanador();
        if (resultadoGanador) {
            console.log("¡Has ganado!");
            this.menu2.setcreditosMcasino(this.menu2.getcreditosMcasino() + (this.apuesta * 3));
            this.menu2.menutragamonedasFrutas();
        }
        else {
            console.log("No has ganado esta vez. ¡Sigue intentándolo!");
            this.menu2.menutragamonedasFrutas();
        }
    };
    //implemento el metodo generarResultado
    TragamonedasFruta.prototype.mostrarResultado = function () {
        console.log("Resultado de los carretes:");
        for (var i = 0; i < this.carretes.length; i++) {
            console.log(this.carretes[i].join(" | "));
        }
    };
    // Evaluar si hay una combinación ganadora
    TragamonedasFruta.prototype.evaluarGanador = function () {
        var _loop_1 = function (i) {
            var fruta = this_1.carretes[0][i]; // Tomamos el primer símbolo de la primera fila
            if (this_1.carretes.every(function (carrete) { return carrete[i] === fruta; })) {
                return { value: true };
            }
        };
        var this_1 = this;
        // Verificar si los tres carretes tienen la misma fruta en la misma posición
        for (var i = 0; i < this.carretes[0].length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return false; // Si no hay combinación ganadora
    };
    return TragamonedasFruta;
}(Tragamonedas_1.Tragamonedas));
exports.TragamonedasFruta = TragamonedasFruta;
