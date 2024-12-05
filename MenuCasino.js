"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuCasino = void 0;
var Jugador_1 = require("./Jugador");
var readline = require("readline");
var menuBj_1 = require("./menuBj");
var menuTragamonedas_1 = require("./menuTragamonedas");
var Casino_1 = require("./Casino");
var MenuCasino = /** @class */ (function () {
    function MenuCasino() {
        //utilizar modulo readline de node para crear una interfaz de consola
        // const readline = require('readline');
        this.rl = readline.createInterface({
            //input y output son los canales de comunicación
            input: process.stdin,
            output: process.stdout
        });
        this.casino1 = new Casino_1.Casino(1);
    }
    MenuCasino.prototype.menuLogin = function () {
        var _this = this;
        console.log('*******************');
        console.log('* Ingrese jugador *');
        console.log('*******************' + '\n');
        console.log('1 - Ingresar Usuario');
        console.log('2 - Salir');
        //pide una opcion al usuario, y la ejecuta en el switch 
        // la llamada a metodo estan desactivadas para probar comportamiento sin depender de las clases
        this.rl.question('Ingrese una opción: ', function (opcion) {
            switch (opcion) {
                case '1':
                    _this.rl.question('Ingrese Nombre Jugador: ' + '\n', function (nombreJug) {
                        _this.rl.question('Ingrese Creditos: ', function (creditosJug) {
                            _this.nomJugadorAux = nombreJug;
                            var jugador1 = new Jugador_1.Jugador(nombreJug, parseInt(creditosJug));
                            _this.casino1.agregarJugador(jugador1);
                            _this.elegirJugador(_this.nomJugadorAux);
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
                    _this.mostrarMenuPrincipal();
            }
        });
    };
    MenuCasino.prototype.elegirJugador = function (nombreJugador) {
        var jugador33 = nombreJugador;
        var jugador2 = this.casino1.getJugadores();
        var index1 = jugador2.findIndex(function (jug) { return jug.getNombre().toLowerCase() === jugador33.toLowerCase(); });
        if (index1 !== -1) {
            this.indexAuxJug = index1;
            console.log("Jugador seleccionado: ".concat(jugador2[this.indexAuxJug].getNombre()) + '\n');
            this.mostrarMenuPrincipal();
        }
        else {
            console.log("Jugador no encontrado");
            this.menuLogin();
        }
    };
    MenuCasino.prototype.mostrarMenuPrincipal = function () {
        var _this = this;
        var casino2 = this.casino1.getJugadores();
        console.log("Esta Jugando: ".concat(casino2[this.indexAuxJug].getNombre()));
        console.log('*********************************');
        console.log('* Bienvenido al Casino Grupo 16 *');
        console.log('*********************************' + '\n');
        console.log('1 - Consultar Credito');
        console.log('2 - Cargar Credito');
        console.log('3 - Juegos');
        console.log('4 - Salir');
        //pide una opcion al usuario, y la ejecuta en el switch 
        // la llamada a metodo estan desactivadas para probar comportamiento sin depender de las clases
        this.rl.question('Ingrese una opción: ', function (opcion) {
            switch (opcion) {
                case '1':
                    /*const jugador = new Jugador(); //instacia de la clase jugador
                    const creditos = jugador.consultarCreditos(); //ejecutar el método para consultar
                    console.log(`Su saldo es de ${creditos} créditos.`)*/
                    console.log('Su saldo es de $... créditos.');
                    _this.rl.question('Presione Enter para continuar...', function () {
                        _this.mostrarMenuPrincipal();
                    });
                    break;
                case '2':
                    console.log('Ingrese el monto a cargar: $...');
                    /* this.rl.question('Ingrese el monto a cargar: ', (monto) => {
                const montoValido = parseInt(monto);
                if (isNaN(montoValido) || montoValido <= 0) {
                  console.log('Error: Por favor ingrese un valor válido superior a 0');
                  return pedirMonto(jugador); // <--- Aquí se utiliza un return para volver a ejecutar la función
                } else {
                  jugador.cargarCreditos(montoValido); */
                    _this.rl.question('Presione Enter para continuar...', function () {
                        _this.mostrarMenuPrincipal();
                    });
                    break;
                //MENU DE JUEGOS
                case '3':
                    _this.menuElejirJuegos();
                    break;
                case '4':
                    console.log('Gracias por visitar Casino Grupo 16');
                    _this.rl.close();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.mostrarMenuPrincipal();
            }
        });
    };
    MenuCasino.prototype.menuElejirJuegos = function () {
        var _this = this;
        console.log('1- Tragamonedas');
        console.log('2- BlackJack');
        console.log('3- Volver');
        this.rl.question('Seleccione una opción: ', function (opcion) {
            switch (opcion) {
                case '1':
                    _this.menutragamonedas();
                    break;
                case '2':
                    _this.menuBlackJack124();
                    break;
                case '3':
                    _this.mostrarMenuPrincipal();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuElejirJuegos();
            }
        });
    };
    MenuCasino.prototype.menutragamonedas = function () {
        var _this = this;
        console.log('TRAGAMONEDAS');
        console.log('1- Frutas');
        console.log('2- Superheroes');
        console.log('3- Volver');
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
        console.log('FRUTAS');
        console.log('1- Jugar');
        console.log('2- Reglas');
        console.log('3- Volver');
        this.rl.question('Seleccione una opción: ', function (opcionFrutas) {
            switch (opcionFrutas) {
                case '1':
                    var menuTragamonedasSuper1 = new menuTragamonedas_1.MenuTragamonedas();
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
        console.log('SUPERHEROES');
        console.log('1- Jugar');
        console.log('2- Reglas');
        console.log('3- Volver');
        this.rl.question('Seleccione una opción: ', function (opcionSuperheroes) {
            switch (opcionSuperheroes) {
                case '1':
                    var menuTragamonedasSuper2 = new menuTragamonedas_1.MenuTragamonedas();
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
        console.log('BLACKJACK');
        console.log('1- Jugar');
        console.log('2- Reglas');
        console.log('3- Volver');
        this.rl.question('Seleccione una opción: ', function (opcionBlackjack) {
            switch (opcionBlackjack) {
                case '1':
                    // Jugar Blackjack
                    console.log("caso 1");
                    var juego1 = new menuBj_1.MenuBlackJack();
                    juego1.menuPrin();
                    break;
                case '2':
                    // Reglas Blackjack
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
    return MenuCasino;
}());
exports.MenuCasino = MenuCasino;
