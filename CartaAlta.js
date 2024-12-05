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
exports.CartaAlta = void 0;
var Carta_1 = require("./Carta");
var Juego_1 = require("./Juego");
var MenuCasino_1 = require("./MenuCasino");
var CartaAlta = /** @class */ (function (_super) {
    __extends(CartaAlta, _super);
    function CartaAlta(apuestaMinima, jugador) {
        var _this = _super.call(this, "CartaAlta") || this;
        _this.apuestaMinima = apuestaMinima;
        _this.jugador = jugador;
        _this.cartaActual = null;
        return _this;
    }
    // Inicia el juego validando si el jugador tiene créditos suficientes
    CartaAlta.prototype.iniciarJuego = function () {
        if (this.jugador.consultarCreditos() < this.apuestaMinima) {
            console.log("No tienes suficientes créditos para jugar.");
            this.volverAlMenuPrincipal(); // Redirigir al menú de selección de juegos si no hay suficientes créditos
            return;
        }
        this.cartaActual = Carta_1.Carta.obtenerCartaAleatoria();
        console.log("\u00A1Juego iniciado por ".concat(this.jugador.getNombre(), "! Carta inicial: ").concat(this.cartaActual.getNombre()));
        this.jugarCartaAlta();
    };
    // Ciclo principal del juego
    CartaAlta.prototype.jugarCartaAlta = function () {
        var _this = this;
        console.log('Elige: 1 - Mayor, 2 - Menor');
        var rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('¿Qué eliges?: ', function (opcion) {
            var apuesta = opcion === '1' ? 'mayor' : 'menor';
            // Ejecuta la lógica de la siguiente carta
            var resultado = _this.siguienteCartaJugador(apuesta);
            if (resultado) {
                console.log('¡Continúas jugando!\n');
                rl.close(); // Cierra la interfaz readline después de la jugada
                _this.jugarCartaAlta(); // Continúa el ciclo si gana
            }
            else {
                rl.close(); // Cierra la interfaz readline después de la jugada
                _this.menuCartaAlta(); // Vuelve al menú si pierde
            }
        });
    };
    // Lógica para manejar la elección del jugador y verificar el resultado
    CartaAlta.prototype.siguienteCartaJugador = function (apuesta) {
        if (!this.cartaActual) {
            throw new Error("El juego no ha comenzado. Inicia el juego primero.");
        }
        if (this.jugador.consultarCreditos() < this.apuestaMinima) {
            console.log("No tienes suficientes créditos para continuar jugando.");
            return false;
        }
        // Descuenta la apuesta mínima
        this.jugador.cargarCreditos(-this.apuestaMinima);
        var nuevaCarta = Carta_1.Carta.obtenerCartaAleatoria();
        console.log("Nueva carta: ".concat(nuevaCarta.getNombre()));
        var esMayor = nuevaCarta.getValorNumerico() > this.cartaActual.getValorNumerico();
        if ((apuesta === 'mayor' && esMayor) || (apuesta === 'menor' && !esMayor)) {
            console.log("¡Ganaste!");
            this.jugador.cargarCreditos(this.apuestaMinima * 2); // Gana el doble de la apuesta mínima
            this.cartaActual = nuevaCarta; // Actualiza la carta actual
            // Mostrar solo después de la jugada
            console.log("Su cr\u00E9dito actual es: $".concat(this.jugador.consultarCreditos(), "\n"));
            return true;
        }
        else {
            console.log("Perdiste.");
            this.cartaActual = null;
            console.log("Su cr\u00E9dito actual es: $".concat(this.jugador.consultarCreditos(), "\n"));
            // Redirige al menú principal
            return false;
        }
    };
    // Método para redirigir al menú principal
    CartaAlta.prototype.menuCartaAlta = function () {
        var _this = this;
        var rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        console.log("\nMenú de Carta Alta:");
        console.log("1. Jugar de nuevo");
        console.log("2. Volver al menú principal");
        rl.question("Elige una opción: ", function (opcion) {
            switch (opcion) {
                case '1':
                    console.log("¡Volviendo a jugar!");
                    rl.close(); // Cierra la interfaz readline antes de reiniciar el juego
                    _this.iniciarJuego(); // Vuelve a iniciar el juego de Carta Alta
                    break;
                case '2':
                    console.log("Volviendo al menú principal...");
                    rl.close(); // Cierra la interfaz readline antes de regresar
                    _this.volverAlMenuPrincipal(); // Llama a la función que maneja el menú principal
                    break;
                default:
                    console.log("Opción no válida. Por favor elige 1 o 2.");
                    _this.menuCartaAlta(); // Si la opción no es válida, vuelve a mostrar el menú
                    break;
            }
        });
    };
    // Método para volver al menú principal (utiliza la clase MenuCasino)
    CartaAlta.prototype.volverAlMenuPrincipal = function () {
        var menuCasino = MenuCasino_1.MenuCasino.getInstance(); // Obtén la instancia de MenuCasino
        menuCasino.menuElejirJuegos(); // Llama al método para mostrar el menú de juegos
    };
    //Método para cargar créditos al jugador
    CartaAlta.prototype.cargarCredito = function () {
        var monto = 50;
        this.jugador.cargarCreditos(monto);
        console.log("Se han cargado $".concat(monto, " a tu cuenta. Cr\u00E9ditos actuales: $").concat(this.jugador.consultarCreditos()));
    };
    //Actualiza el saldo del jugador
    CartaAlta.prototype.actualizarSaldo = function () {
        console.log("Saldo actual: $".concat(this.jugador.consultarCreditos()));
    };
    // Cobra un premio fijo
    CartaAlta.prototype.cobrarPremio = function () {
        var premio = 100;
        this.jugador.cargarCreditos(premio);
        console.log("Has cobrado un premio de $".concat(premio, ". Cr\u00E9ditos actuales: $").concat(this.jugador.consultarCreditos()));
    };
    // Realiza una apuesta si el jugador tiene créditos suficientes
    CartaAlta.prototype.realizarApuesta = function () {
        if (this.jugador.consultarCreditos() >= this.apuestaMinima) {
            this.jugador.cargarCreditos(-this.apuestaMinima);
            console.log("Has realizado una apuesta de $".concat(this.apuestaMinima, ". Cr\u00E9ditos restantes: $").concat(this.jugador.consultarCreditos()));
        }
        else {
            console.log("No tienes suficientes créditos para realizar esta apuesta.");
        }
    };
    return CartaAlta;
}(Juego_1.Juego));
exports.CartaAlta = CartaAlta;
