"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuCasino = void 0;
var readline = require("readline");
var Jugador_1 = require("./Jugador");
var Casino_1 = require("./Casino");
var menuBj_1 = require("./menuBj");
var CartaAlta_1 = require("./CartaAlta");
var fs = require("fs");
var TragamonedasFruta_1 = require("./TragamonedasFruta");
var TragamonedasAvanzado_1 = require("./TragamonedasAvanzado");
var MenuCasino = /** @class */ (function () {
    function MenuCasino() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.casino1 = new Casino_1.Casino(1, "Casino Grupo16");
        //this.jugador = new Jugador("JugadorPorDefecto", 0); // Inicializar con un jugador por defecto
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
    //Menú de login e ingresar nombre y créditos
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
                    console.clear();
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
                    console.clear();
                    console.log('Gracias por visitar Casino Grupo 16');
                    _this.rl.close();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuLogin();
            }
        });
    };
    //Menú principal y manejar las opciones
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
                    console.clear();
                    _this.consultarSaldo();
                    break;
                case '2':
                    console.clear();
                    _this.cargarCreditos();
                    break;
                case '3':
                    console.clear();
                    _this.menuElejirJuegos();
                    break;
                case '4':
                    console.clear();
                    _this.menuLogin();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.mostrarMenuPrincipal();
            }
        });
    };
    //Menú de Seleccion de juegos
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
                    console.clear();
                    _this.menutragamonedas();
                    break;
                case '2':
                    console.clear();
                    _this.menuBlackJack();
                    break;
                case '3':
                    console.clear();
                    _this.menuCartaAlta();
                    break;
                case '4':
                    console.clear();
                    _this.mostrarMenuPrincipal();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuElejirJuegos();
            }
        });
    };
    //Menu Seleccion de Tragamonedas
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
                    console.clear();
                    _this.menutragamonedasFrutas();
                    break;
                case '2':
                    console.clear();
                    _this.menuSuperheroe();
                    break;
                case '3':
                    console.clear();
                    _this.menuElejirJuegos();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menutragamonedas();
            }
        });
    };
    //Menu Tragamonedas Frutas
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
                    console.clear();
                    _this.rl.close();
                    var menuFruta = new TragamonedasFruta_1.TragamonedasFruta();
                    menuFruta.realizarApuesta();
                    break;
                case '2':
                    console.clear();
                    _this.mostrarReglasFrutas();
                    break;
                case '3':
                    console.clear();
                    _this.menutragamonedas();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menutragamonedasFrutas();
            }
        });
    };
    //Menu Tragamonedas Super Heroes
    MenuCasino.prototype.menuSuperheroe = function () {
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
                    console.clear();
                    _this.rl.close();
                    var menuTragamonedasSuper2 = new TragamonedasAvanzado_1.TragamonedasAvanzado();
                    menuTragamonedasSuper2.realizarApuesta();
                    break;
                case '2':
                    console.clear();
                    _this.mostrarReglasSuperheroes();
                    break;
                case '3':
                    console.clear();
                    _this.menutragamonedas();
                    break;
                default:
                    console.clear();
                    _this.rl.close();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuSuperheroe();
            }
        });
    };
    //Menu Black Jack
    MenuCasino.prototype.menuBlackJack = function () {
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
                    console.clear();
                    _this.rl.close();
                    var juego1 = new menuBj_1.MenuBlackJack();
                    juego1.menu1();
                    break;
                case '2':
                    console.clear();
                    _this.mostrarReglasBlackjack();
                    break;
                case '3':
                    console.clear();
                    _this.menuElejirJuegos();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuBlackJack();
            }
        });
    };
    //Menu Carta Alta
    MenuCasino.prototype.menuCartaAlta = function () {
        var _this = this;
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
                    console.clear();
                    _this.rl.close();
                    var cartaAlta = new CartaAlta_1.CartaAlta(_this.jugador);
                    cartaAlta.menu1();
                    break;
                case '2':
                    console.clear();
                    _this.mostrarReglasCartaAlta();
                    break;
                case '3':
                    console.clear();
                    _this.menuElejirJuegos();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuCartaAlta();
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
    //Menues de Reglas de Juegos
    MenuCasino.prototype.mostrarReglasFrutas = function () {
        var _this = this;
        fs.readFile('./Reglas/Reglas-TragamonedasFrutas.txt', 'utf8', function (err, data) {
            if (err) {
                console.error('Error al leer las reglas:', err);
                return;
            }
            console.log('\n' + data);
            _this.menutragamonedasFrutas(); // Regresa al menú de Tragamonedas Frutas después de mostrar las reglas
        });
    };
    MenuCasino.prototype.mostrarReglasSuperheroes = function () {
        var _this = this;
        fs.readFile('./Reglas/Reglas-TragamonedasSuperheroes.txt', 'utf8', function (err, data) {
            if (err) {
                console.error('Error al leer las reglas:', err);
                return;
            }
            console.log('\n' + data);
            _this.menuSuperheroe(); // Regresa al menú de Tragamonedas Superhéroes después de mostrar las reglas
        });
    };
    MenuCasino.prototype.mostrarReglasBlackjack = function () {
        var _this = this;
        var fs = require('fs');
        fs.readFile('./Reglas/Reglas-Blackjack.txt', 'utf8', function (err, data) {
            if (err) {
                console.error('Error al leer las reglas:', err);
                return;
            }
            console.log('\n' + data);
            _this.menuBlackJack(); // Regresa al menú de Blackjack después de mostrar las reglas
        });
    };
    MenuCasino.prototype.mostrarReglasCartaAlta = function () {
        var _this = this;
        fs.readFile('./Reglas/Reglas-CartaAlta.txt', 'utf8', function (err, data) {
            if (err) {
                console.error('Error al leer las reglas:', err);
                return;
            }
            console.log('\n' + data);
            _this.menuCartaAlta(); // Regresa al menú después de mostrar las reglas
        });
    };
    return MenuCasino;
}());
exports.MenuCasino = MenuCasino;
