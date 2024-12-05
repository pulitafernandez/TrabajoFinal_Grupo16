"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuCasino = void 0;
var readline = require("readline");
var Jugador_1 = require("./Jugador");
var Casino_1 = require("./Casino");
var MenuBj_1 = require("./MenuBj");
var MenuTragamonedas_1 = require("./MenuTragamonedas");
var CartaAlta_1 = require("./CartaAlta");
var MenuCasino = /** @class */ (function () {
    function MenuCasino() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.casino1 = new Casino_1.Casino(1, "Casino Pepe");
        this.jugador = new Jugador_1.Jugador("JugadorPorDefecto", 0); // Inicializar con un jugador por defecto
    }
    MenuCasino.prototype.getcreditosMcasino = function () {
        return MenuCasino.creditosMcasino;
    };
    MenuCasino.prototype.setcreditosMcasino = function (nuevocreditosMcasino) {
        MenuCasino.creditosMcasino = nuevocreditosMcasino;
    };
    MenuCasino.prototype.getnombreMcasino = function () {
        return MenuCasino.nombreMcasino;
    };
    MenuCasino.prototype.setnombreMcasino = function (nuevonombreMcasino) {
        MenuCasino.nombreMcasino = nuevonombreMcasino;
    };
    // Método estático para obtener la instancia única de MenuCasino
    MenuCasino.getInstance = function () {
        if (!MenuCasino.instance) {
            MenuCasino.instance = new MenuCasino();
        }
        return MenuCasino.instance;
    };
    // Función para mostrar el menú de login e ingresar nombre y créditos
    MenuCasino.prototype.menuLogin = function () {
        var _this = this;
        console.log('*********************************');
        console.log('* Loguear como jugador*');
        console.log('*********************************' + '\n');
        console.log('1 - Ingresar usuario');
        console.log('2 - Salir');
        this.rl.question('Ingrese una opción: ', function (opcion) {
            switch (opcion) {
                case '1':
                    // Solicitar el nombre del usuario
                    _this.rl.question('Cargar su nombre de usuario: ', function (nombre) {
                        // Solicitar el saldo inicial
                        _this.rl.question('Cargar los créditos para jugar: $ ', function (creditos) {
                            var jugador1 = new Jugador_1.Jugador(nombre, parseInt(creditos));
                            _this.casino1.agregarJugador(jugador1);
                            _this.jugador = jugador1; // Reemplazar el jugador por defecto
                            MenuCasino.nombreMcasino = nombre;
                            MenuCasino.creditosMcasino = parseInt(creditos);
                            console.log("\nBienvenido, \u00A1".concat(nombre, "! Su saldo inicial es de ").concat(creditos, " cr\u00E9ditos."));
                            _this.mostrarMenuPrincipal();
                        });
                    });
                    break;
                case '2':
                    console.log('Gracias por visitar Casino Grupo 16');
                    _this.rl.close();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuLogin();
            }
        });
    };
    // Función que muestra el menú principal y maneja las opciones
    MenuCasino.prototype.mostrarMenuPrincipal = function () {
        var _this = this;
        console.log('***************************************');
        console.log("*Jugador: ".concat(MenuCasino.nombreMcasino, " Creditos: ").concat(MenuCasino.creditosMcasino, "*"));
        console.log('*    Bienvenido al Casino Grupo 16    *');
        console.log('***************************************' + '\n');
        console.log('1 - Consultar Crédito');
        console.log('2 - Cargar Crédito');
        console.log('3 - Juegos');
        console.log('4 - Salir');
        this.rl.question('Ingrese una opción: ', function (opcion) {
            switch (opcion) {
                case '1':
                    _this.consultarSaldo();
                    break;
                case '2':
                    _this.cargarCreditos();
                    break;
                case '3':
                    _this.menuElejirJuegos();
                    break;
                case '4':
                    _this.menuLogin();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.mostrarMenuPrincipal();
            }
        });
    };
    // Consultar el saldo de créditos
    MenuCasino.prototype.consultarSaldo = function () {
        var _this = this;
        this.jugador.setCreditos(MenuCasino.creditosMcasino);
        var creditos = this.jugador.consultarCreditos();
        if (creditos !== undefined) {
            console.log("Su saldo es de $".concat(creditos, " cr\u00E9ditos."));
        }
        this.rl.question('Presione Enter para continuar...', function () {
            _this.mostrarMenuPrincipal();
        });
    };
    // Cargar créditos al jugador
    MenuCasino.prototype.cargarCreditos = function () {
        var _this = this;
        this.rl.question('Ingrese el monto a cargar: $', function (monto) {
            var montoValido = parseInt(monto);
            if (isNaN(montoValido) || montoValido <= 0) {
                console.log('Error: Por favor ingrese un valor válido superior a 0');
                _this.rl.question('Presione Enter para continuar...', function () {
                    _this.mostrarMenuPrincipal();
                });
            }
            else {
                _this.jugador.cargarCreditos(montoValido);
                MenuCasino.creditosMcasino = _this.jugador.consultarCreditos();
                console.log("Se han cargado $".concat(montoValido, ". Su nuevo saldo es: $").concat(_this.jugador.consultarCreditos(), "."));
                _this.rl.question('Presione Enter para continuar...', function () {
                    _this.mostrarMenuPrincipal();
                });
            }
        });
    };
    // Menú de juegos
    MenuCasino.prototype.menuElejirJuegos = function () {
        var _this = this;
        console.log("****************************");
        console.log("*Jugador: ".concat(MenuCasino.nombreMcasino, " Creditos: ").concat(MenuCasino.creditosMcasino, "*"));
        console.log("****************************" + '\n');
        console.log('1- Tragamonedas');
        console.log('2- BlackJack');
        console.log('3- Carta Alta');
        console.log('4- Volver');
        console.log("---------------------------------------------" + '\n');
        this.rl.question('Seleccione una opción: ', function (opcion) {
            switch (opcion) {
                case '1':
                    _this.menutragamonedas();
                    break;
                case '2':
                    _this.menuBlackJack124();
                    break;
                case '3':
                    _this.menuCartaAlta();
                    break;
                case '4':
                    _this.mostrarMenuPrincipal();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuElejirJuegos();
            }
        });
    };
    // Funciones de juegos
    MenuCasino.prototype.menutragamonedas = function () {
        var _this = this;
        console.log("****************************");
        console.log("*Jugador: ".concat(MenuCasino.nombreMcasino, " Creditos: ").concat(MenuCasino.creditosMcasino, "*"));
        console.log("****************************" + '\n');
        console.log('TRAGAMONEDAS');
        console.log('1- Frutas');
        console.log('2- Superheroes');
        console.log('3- Volver');
        console.log("---------------------------------------------" + '\n');
        this.rl.question('Seleccione una opción: ', function (opcionTragamonedas) {
            switch (opcionTragamonedas) {
                case '1':
                    _this.menutragamonedasFrutas();
                    break;
                case '2':
                    _this.menuSuperheroe1();
                    break;
                case '3':
                    _this.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menutragamonedas();
            }
        });
    };
    MenuCasino.prototype.menutragamonedasFrutas = function () {
        var _this = this;
        console.log("****************************");
        console.log("*Jugador: ".concat(MenuCasino.nombreMcasino, " Creditos: ").concat(MenuCasino.creditosMcasino, "*"));
        console.log("****************************" + '\n');
        console.log('FRUTAS');
        console.log('1- Jugar');
        console.log('2- Reglas');
        console.log('3- Volver');
        console.log("---------------------------------------------" + '\n');
        this.rl.question('Seleccione una opción: ', function (opcionFrutas) {
            switch (opcionFrutas) {
                case '1':
                    var menuTragamonedasSuper1 = new MenuTragamonedas_1.MenuTragamonedas();
                    menuTragamonedasSuper1.menuTragamonedasFruta();
                    break;
                case '2':
                    // Reglas Frutas
                    break;
                case '3':
                    _this.menutragamonedas();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menutragamonedasFrutas();
            }
        });
    };
    MenuCasino.prototype.menuSuperheroe1 = function () {
        var _this = this;
        console.log("****************************");
        console.log("*Jugador: ".concat(MenuCasino.nombreMcasino, " Creditos: ").concat(MenuCasino.creditosMcasino, "*"));
        console.log("****************************" + '\n');
        console.log('SUPERHEROES');
        console.log('1- Jugar');
        console.log('2- Reglas');
        console.log('3- Volver');
        console.log("---------------------------------------------" + '\n');
        this.rl.question('Seleccione una opción: ', function (opcionSuperheroes) {
            switch (opcionSuperheroes) {
                case '1':
                    var menuTragamonedasSuper2 = new MenuTragamonedas_1.MenuTragamonedas();
                    menuTragamonedasSuper2.menuTragamonedasSuper();
                    break;
                case '2':
                    // Reglas Superheroes
                    break;
                case '3':
                    _this.menutragamonedas();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuSuperheroe1();
            }
        });
    };
    MenuCasino.prototype.menuBlackJack124 = function () {
        var _this = this;
        console.log("****************************");
        console.log("*Jugador: ".concat(MenuCasino.nombreMcasino, " Creditos: ").concat(MenuCasino.creditosMcasino, "*"));
        console.log("****************************" + '\n');
        console.log('BLACKJACK');
        console.log('1- Jugar');
        console.log('2- Reglas');
        console.log('3- Volver');
        console.log("---------------------------------------------" + '\n');
        this.rl.question('Seleccione una opción: ', function (opcionBlackjack) {
            switch (opcionBlackjack) {
                case '1':
                    var juego1 = new MenuBj_1.MenuBlackJack();
                    juego1.menu1();
                    break;
                case '2':
                    // Reglas del Blackjack
                    break;
                case '3':
                    _this.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuBlackJack124();
            }
        });
    };
    MenuCasino.prototype.menuCartaAlta = function () {
        var _this = this;
        var apuestaMinima = 100;
        var cartaAlta = new CartaAlta_1.CartaAlta(apuestaMinima, this.jugador);
        console.log("****************************");
        console.log("*Jugador: ".concat(MenuCasino.nombreMcasino, " Creditos: ").concat(MenuCasino.creditosMcasino, "*"));
        console.log("****************************" + '\n');
        console.log('*****************************');
        console.log('*        Carta Alta         *');
        console.log('*****************************');
        console.log('1 - Jugar');
        console.log('2 - Reglas');
        console.log('3 - Volver');
        console.log("---------------------------------------------" + '\n');
        this.rl.question('Seleccione una opción: ', function (opcion) {
            switch (opcion) {
                case '1':
                    cartaAlta.iniciarJuego();
                    break;
                case '2':
                    // Reglas Carta Alta
                    break;
                case '3':
                    _this.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuCartaAlta();
            }
        });
    };
    return MenuCasino;
}());
exports.MenuCasino = MenuCasino;
