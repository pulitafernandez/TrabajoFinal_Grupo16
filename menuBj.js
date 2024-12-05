"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBlackJack = void 0;
//import * as readline1 from "readline-sync";
//import * as readline from 'readline';
var Blackjack_1 = require("./Blackjack");
var MenuCasino_1 = require("./MenuCasino");
var Jugador_1 = require("./Jugador");
var MenuBlackJack = /** @class */ (function () {
    // private rl: readline.Interface;
    function MenuBlackJack() {
        /*
          rl = readline.createInterface({
        
            input: process.stdin,
            output: process.stdout
          });
        */
        this.jugadorPipe = new Jugador_1.Jugador("Pipe", 1000);
        this.menu5 = new MenuCasino_1.MenuCasino();
        this.blackjack1 = new Blackjack_1.BlackJack(1000, this.jugadorPipe);
    }
    MenuBlackJack.prototype.menu1 = function () {
        var _this = this;
        console.log("---------------------------------------------------------------------- \n");
        console.log("Bienvenido ".concat(this.menu5.getnombreMcasino(), " Al BlackJack\n"));
        console.log("Tus Creditos son de:".concat(this.menu5.getcreditosMcasino(), "\n"));
        console.log("1. Ingresar Creditos Al Juego\n");
        console.log("2. Iniciar Partida\n");
        console.log("3. Salir\n");
        console.log("---------------------------------------------------------------------- \n");
        this.menu5.rl.question('Ingrese su opción: ', function (opcion1) {
            //this.rl.question('Ingrese su opción: ', (opcion1) => {
            switch (opcion1) {
                case '1':
                    _this.menu5.setcreditosMcasino(_this.menu5.getcreditosMcasino() + 200);
                    _this.menu1();
                    break;
                case '2':
                    _this.menujuego();
                    break;
                case '3':
                    _this.menu5.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida');
                    _this.menu1();
            }
        });
    };
    MenuBlackJack.prototype.menujuego = function () {
        var _this = this;
        console.log("---------------------------------------------------------------------- \n");
        console.log("Amiguito ".concat(this.menu5.getnombreMcasino(), " \n"));
        console.log("Tus Creditos son de:".concat(this.menu5.getcreditosMcasino(), "\n"));
        console.log("1. Ingresar Creditos Al Juego \n");
        console.log("2. Apostar y Jugar \n");
        console.log("3. Volver al menu Principal \n");
        console.log("4. Salir \n");
        console.log("---------------------------------------------------------------------- \n");
        this.menu5.rl.question('Ingrese su opción: ', function (opcion1) {
            // this.rl.question('Ingrese su opción: ', (opcion1) => {
            switch (opcion1) {
                case '1':
                    _this.menu5.setcreditosMcasino(200);
                    _this.menujuego();
                    break;
                case '2':
                    _this.realizarApuesta();
                    break;
                case '3':
                    _this.menu1();
                    break;
                case '4':
                    _this.menu5.rl.close();
                    // this.rl.close();
                    break;
                default:
                    console.log('Opción inválida');
                    _this.menu1();
            }
        });
    };
    MenuBlackJack.prototype.menujuego1 = function () {
        var _this = this;
        console.log("---------------------------------------------------------------------- \n");
        console.log("Amiguito ".concat(this.menu5.getnombreMcasino(), "\n"));
        console.log("Tus Cr\u00E9ditos son de: ".concat(this.menu5.getcreditosMcasino(), "\n"));
        console.log("1. Pedir una Carta\n");
        console.log("2. Quedarse\n");
        console.log("---------------------------------------------------------------------- \n");
        this.menu5.rl.question('Ingrese su opción: ', function (opcion1) {
            //this.rl.question('Ingrese su opción: ', (opcion1) => {
            switch (opcion1) {
                case '1':
                    _this.blackjack1.pedirCartaJugador();
                    _this.blackjack1.mostrarCartaJug();
                    _this.sumaJugador = _this.blackjack1.obtenerSumaJugador();
                    _this.chequearJugada();
                    break;
                case '2':
                    _this.juegaConsola();
                    break;
                default:
                    console.log('Opción inválida');
                    _this.menu1();
            }
        });
    };
    MenuBlackJack.prototype.realizarApuesta = function () {
        var _this = this;
        this.apuesta = 0;
        console.log("---------------------------------------------------------------------- \n");
        this.menu5.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 10 y la maxima es de 100): ', function (apuesta) {
            // this.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 10 y la maxima es de 100): ', (apuesta) => {
            var apuestaNumero = parseInt(apuesta);
            if (apuestaNumero >= 10 && apuestaNumero <= 100) {
                if (_this.menu5.getcreditosMcasino() >= apuestaNumero) {
                    _this.apuesta = apuestaNumero;
                    _this.menu5.setcreditosMcasino(_this.menu5.getcreditosMcasino() - _this.apuesta);
                    console.log("---------------------------------------------------------------------- \n");
                    console.log("Su apuesta es de ".concat(_this.apuesta));
                    console.log("Tus Creditos son : ".concat(_this.menu5.getcreditosMcasino()));
                    console.log("---------------------------------------------------------------------- \n");
                    _this.repartir();
                }
            }
            else {
                console.log("---------------------------------------------------------------------- \n");
                console.log("Su apuesta no esta entre los parametros requeridos");
                _this.apuesta = 0;
                _this.menujuego();
            }
        });
    };
    MenuBlackJack.prototype.repartir = function () {
        this.blackjack1.limpiarArrays();
        console.log("---------------------------------------------------------------------- \n");
        console.log("Inicia la Partida");
        console.log("Tu apuesta es de ".concat(this.apuesta, "\n"));
        this.blackjack1.pedirCartaJugador();
        this.blackjack1.pedirCartaJugador();
        console.log("Tus Cartas Son:");
        this.blackjack1.mostrarCartaJug();
        console.log("\n");
        this.blackjack1.pedirCartaBanca();
        console.log("Total jugador: ".concat(this.blackjack1.obtenerSumaJugador()));
        console.log("---------------------------------------------------------------------- \n");
        console.log("Las Cartas de la Banca Son:");
        this.blackjack1.mostarCartaBanca();
        console.log("Total Banca: ".concat(this.blackjack1.obtenerSumaBanca()));
        console.log("---------------------------------------------------------------------- \n");
        this.chequearBJ();
    };
    MenuBlackJack.prototype.chequearBJ = function () {
        if (this.blackjack1.obtenerSumaJugador() == 21) {
            console.log("---------------------------------------------------------------------- \n");
            console.log("chequearBJ igual a 21 tienes BJ");
            console.log("Tienes Black Jack");
            console.log("Total jugador: ".concat(this.blackjack1.obtenerSumaJugador()));
            console.log("---------------------------------------------------------------------- \n");
            console.log("La Banca pide una carta");
            this.blackjack1.pedirCartaBanca();
            this.blackjack1.mostarCartaBanca();
            console.log("Total Banca: ".concat(this.blackjack1.obtenerSumaBanca()));
            console.log("---------------------------------------------------------------------- \n");
            this.sumaBanca = this.blackjack1.obtenerSumaBanca();
            this.sumaJugador = this.blackjack1.obtenerSumaJugador();
            if (this.sumaBanca == this.sumaJugador) {
                console.log("---------------------------------------------------------------------- \n");
                console.log("chequearBj igual que 21 empatas");
                console.log("Ambos tiene Black Jack Empate");
                this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + this.apuesta);
                // this.creditos = this.creditos + this.apuesta;
                this.menujuego();
            }
            else {
                console.log("---------------------------------------------------------------------- \n");
                console.log("chequearBJ la banca no tiene 21 ganas");
                console.log("total banca ".concat(this.blackjack1.obtenerSumaBanca(), "\n  no consiguio empatar el BlackJack la banca Pierde.\n  Ganaste ").concat((this.apuesta * 2.5)));
                console.log("---------------------------------------------------------------------- \n");
                this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + (this.apuesta * 2.5));
                //this.creditos = this.creditos + (this.apuesta * 2.5);
                this.menujuego();
            }
        }
        else {
            console.log("---------------------------------------------------------------------- \n");
            console.log("chequearBJ no tienes 21BJ");
            console.log("No hay blackjack");
            console.log("---------------------------------------------------------------------- \n");
            this.menujuego1();
        }
    };
    MenuBlackJack.prototype.chequearJugada = function () {
        if (this.sumaJugador < 21) {
            console.log("---------------------------------------------------------------------- \n");
            console.log("chequear jugada menor que 21 volver a preguntar");
            console.log("Total jugador: ".concat(this.sumaJugador));
            console.log("---------------------------------------------------------------------- \n");
            this.menujuego1();
        }
        else if (this.sumaJugador > 21) {
            console.log("---------------------------------------------------------------------- \n");
            console.log("chequear jugada mayor que 21 perdiste");
            console.log("Total jugador: ".concat(this.sumaJugador));
            console.log("Perdiste");
            console.log("---------------------------------------------------------------------- \n");
            this.menujuego();
        }
        else if (this.sumaJugador === 21) {
            console.log("---------------------------------------------------------------------- \n");
            console.log("chequear jugada igual a que 21 ganas");
            console.log("\u00A1Felicidades! Obtuviste 21 puntos.");
            console.log("---------------------------------------------------------------------- \n");
            this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + (this.apuesta * 2));
            //this.creditos = this.creditos + (this.apuesta * 2);
            this.menujuego1();
        }
    };
    MenuBlackJack.prototype.juegaConsola = function () {
        console.log("---------------------------------------------------------------------- \n");
        console.log("Tienes ".concat(this.blackjack1.obtenerSumaJugador(), ".\n"));
        console.log("La Banca da vuelta su carta");
        this.blackjack1.pedirCartaBanca();
        this.blackjack1.mostarCartaBanca();
        console.log("---------------------------------------------------------------------- \n");
        this.sumaBanca = this.blackjack1.obtenerSumaBanca();
        this.sumaJugador = this.blackjack1.obtenerSumaJugador();
        while (this.sumaBanca < this.sumaJugador && this.sumaBanca < 21) {
            console.log("La Banca pide otra carta");
            this.blackjack1.pedirCartaBanca();
            this.blackjack1.mostarCartaBanca();
            console.log("---------------------------------------------------------------------- \n");
            this.sumaBanca = this.blackjack1.obtenerSumaBanca();
            console.log("Total banca: ".concat(this.sumaBanca));
            console.log("---------------------------------------------------------------------- \n");
        }
        switch (true) {
            case this.sumaBanca === this.sumaJugador:
                console.log(" \n");
                console.log("Empate. Nadie gana");
                console.log("---------------------------------------------------------------------- \n");
                this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + this.apuesta);
                // this.creditos = this.creditos + this.apuesta;
                this.menu1();
                break;
            case this.sumaBanca > this.sumaJugador && this.sumaBanca <= 21:
                console.log("Gana la Banca");
                console.log("---------------------------------------------------------------------- \n");
                this.menu1();
                break;
            case this.sumaBanca > 21:
                console.log("La Banca pierde. Ganaste!");
                console.log("".concat(this.menu5.getcreditosMcasino() + this.apuesta * 2, " + \n "));
                //console.log(`${this.creditos + (this.apuesta * 2)} \n`);
                console.log("---------------------------------------------------------------------- \n");
                this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + (this.apuesta * 2));
                // this.creditos = this.creditos + (this.apuesta * 2);
                this.menu1();
                break;
        }
    };
    MenuBlackJack.prototype.mostrarResultado = function () { };
    MenuBlackJack.prototype.cargarCredito = function () { };
    MenuBlackJack.prototype.actualizarSaldo = function () { };
    MenuBlackJack.prototype.cobrarPremio = function () { };
    return MenuBlackJack;
}());
exports.MenuBlackJack = MenuBlackJack;
