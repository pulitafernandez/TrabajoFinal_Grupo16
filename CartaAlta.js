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
    function CartaAlta(jugador) {
        var _this = _super.call(this, "CartaAlta") || this;
        _this.menu4 = new MenuCasino_1.MenuCasino();
        _this.jugador = jugador;
        _this.cartaActual;
        return _this;
    }
    CartaAlta.prototype.menu1 = function () {
        var _this = this;
        console.log("---------------------------------------------------------------------- \n");
        this.actualizarSaldo();
        console.log("=========================== \n");
        console.log("= Bienvenido A Carta Alta =\n");
        console.log("=========================== \n");
        console.log("1. Cargar Creditos\n");
        console.log("2. Iniciar Partida\n");
        console.log("3. Salir\n");
        console.log("---------------------------------------------------------------------- \n");
        this.menu4.rl.question('Ingrese su opción: ', function (opcion1) {
            switch (opcion1) {
                case '1':
                    _this.cargarCredito();
                    break;
                case '2':
                    _this.realizarApuesta();
                    break;
                case '3':
                    _this.menu4.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida');
                    _this.menu1();
            }
        });
    };
    CartaAlta.prototype.realizarApuesta = function () {
        var _this = this;
        this.apuesta1 = 0;
        console.log("---------------------------------------------------------------------- \n");
        this.menu4.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 1000 y la maxima es de 10000): ', function (apuesta) {
            var apuestaNumero = parseInt(apuesta);
            if (apuestaNumero >= 1000 && apuestaNumero <= 10000 && _this.menu4.getcreditosMcasino() >= apuestaNumero) {
                if (_this.menu4.getcreditosMcasino() >= apuestaNumero) {
                    _this.apuesta1 = apuestaNumero;
                    _this.menu4.setcreditosMcasino(_this.menu4.getcreditosMcasino() - _this.apuesta1);
                    console.log("---------------------------------------------------------------------- \n");
                    console.log("Su apuesta es de ".concat(_this.apuesta1));
                    console.log("Tus Creditos son : ".concat(_this.menu4.getcreditosMcasino()));
                    console.log("---------------------------------------------------------------------- \n");
                    _this.iniciarJuego();
                }
            }
            else {
                console.log("---------------------------------------------------------------------- \n");
                console.log("Su apuesta no esta entre los parametros requeridos");
                _this.apuesta1 = 0;
                _this.menu1();
            }
        });
    };
    // Inicia el juego validando si el jugador tiene créditos suficientes
    CartaAlta.prototype.iniciarJuego = function () {
        this.cartaActual = Carta_1.Carta.obtenerCartaAleatoria();
        console.log("CARTA INICIAL: ".concat(this.cartaActual.getNombre()));
        this.jugarCartaAlta();
    };
    // Ciclo principal del juego
    CartaAlta.prototype.jugarCartaAlta = function () {
        var _this = this;
        console.log('Elige: 1 - Mayor, 2 - Menor');
        this.menu4.rl.question('¿Qué eliges?: ', function (opcion) {
            var apuesta = opcion === '1' ? 'mayor' : 'menor';
            // Ejecuta la lógica de la siguiente carta
            var resultado = _this.siguienteCartaJugador(apuesta);
            if (resultado) {
                console.log('¡Continúas jugando!\n');
                _this.jugarCartaAlta(); // Continúa el ciclo si gana
            }
            else {
                _this.menu1(); // Vuelve al menú si pierde
            }
        });
    };
    // Lógica para manejar la elección del jugador y verificar el resultado
    CartaAlta.prototype.siguienteCartaJugador = function (apuesta) {
        var nuevaCarta = Carta_1.Carta.obtenerCartaAleatoria();
        console.log("Nueva carta: ".concat(nuevaCarta.getNombre()));
        var esMayor = nuevaCarta.getValorNumerico() > this.cartaActual.getValorNumerico();
        if ((apuesta === 'mayor' && esMayor) || (apuesta === 'menor' && !esMayor)) {
            console.log("¡Ganaste!");
            this.menu4.setcreditosMcasino(this.menu4.getcreditosMcasino() + (this.apuesta1 * 2)); // Gana el doble de la apuesta mínima
            this.cartaActual = nuevaCarta; // Actualiza la carta actual
            // Mostrar solo después de la jugada
            this.actualizarSaldo();
            return true;
        }
        else {
            this.actualizarSaldo();
            return false;
        }
    };
    //Actualiza el saldo del jugador
    CartaAlta.prototype.actualizarSaldo = function () {
        console.log("Jugador ".concat(this.menu4.getnombreMcasino()));
        console.log("Tus Creditos son de:".concat(this.menu4.getcreditosMcasino(), "\n"));
    };
    // Cargar créditos al jugador
    CartaAlta.prototype.cargarCredito = function () {
        var _this = this;
        this.menu4.rl.question('Ingrese el monto a cargar: $', function (monto) {
            var montoValido = parseInt(monto);
            if (isNaN(montoValido) || montoValido <= 0) {
                console.log('Error: Por favor ingrese un valor válido superior a 0');
                _this.menu4.rl.question('Presione Enter para continuar...', function () {
                    _this.menu1();
                });
            }
            else {
                _this.jugador.cargarCreditos(montoValido);
                _this.menu4.setcreditosMcasino(_this.menu4.getcreditosMcasino() + montoValido);
                console.log("Se han cargado $".concat(montoValido, ". Su nuevo saldo es: $").concat(_this.menu4.getcreditosMcasino(), "."));
                _this.menu4.rl.question('Presione Enter para continuar...', function () {
                    _this.menu1();
                });
            }
        });
    };
    CartaAlta.prototype.mostrarResultado = function () { };
    CartaAlta.prototype.cobrarPremio = function () { };
    return CartaAlta;
}(Juego_1.Juego));
exports.CartaAlta = CartaAlta;
