"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuCasino = void 0;
//import * as readline from "readline-sync";
const readline = __importStar(require("readline"));
const Jugador_1 = require("./Jugador");
const Casino_1 = require("./Casino");
const MenuBj_1 = require("./MenuBj");
const MenuTragamonedas_1 = require("./MenuTragamonedas");
const CartaAlta_1 = require("./CartaAlta");
const fs = __importStar(require("fs"));
class MenuCasino {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.casino1 = new Casino_1.Casino(1, "Casino Pepe");
        this.jugador = new Jugador_1.Jugador("JugadorPorDefecto", 0); // Inicializar con un jugador por defecto
    }
    getcreditosMcasino() {
        return MenuCasino.creditosMcasino;
    }
    setcreditosMcasino(nuevocreditosMcasino) {
        MenuCasino.creditosMcasino = nuevocreditosMcasino;
    }
    getnombreMcasino() {
        return MenuCasino.nombreMcasino;
    }
    setnombreMcasino(nuevonombreMcasino) {
        MenuCasino.nombreMcasino = nuevonombreMcasino;
    }
    // Método estático para obtener la instancia única de MenuCasino
    static getInstance() {
        if (!MenuCasino.instance) {
            MenuCasino.instance = new MenuCasino();
        }
        return MenuCasino.instance;
    }
    // Función para mostrar el menú de login e ingresar nombre y créditos
    menuLogin() {
        console.log('*********************************');
        console.log('* Loguear como jugador*');
        console.log('*********************************' + '\n');
        console.log('1 - Ingresar usuario');
        console.log('2 - Salir');
        this.rl.question('Ingrese una opción: ', (opcion) => {
            switch (opcion) {
                case '1':
                    // Solicitar el nombre del usuario
                    this.rl.question('Cargar su nombre de usuario: ', (nombre) => {
                        // Solicitar el saldo inicial
                        this.rl.question('Cargar los créditos para jugar: $ ', (creditos) => {
                            const jugador1 = new Jugador_1.Jugador(nombre, parseInt(creditos));
                            this.casino1.agregarJugador(jugador1);
                            this.jugador = jugador1; // Reemplazar el jugador por defecto
                            MenuCasino.nombreMcasino = nombre;
                            MenuCasino.creditosMcasino = parseInt(creditos);
                            console.log(`\nBienvenido, ¡${nombre}! Su saldo inicial es de ${creditos} créditos.`);
                            this.mostrarMenuPrincipal();
                        });
                    });
                    break;
                case '2':
                    console.log('Gracias por visitar Casino Grupo 16');
                    this.rl.close();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuLogin();
            }
        });
    }
    // Función que muestra el menú principal y maneja las opciones
    mostrarMenuPrincipal() {
        console.log('\n****************************************');
        console.log(`* Jugador: ${MenuCasino.nombreMcasino} - Creditos: ${MenuCasino.creditosMcasino} *`);
        console.log('*     Bienvenido al Casino Grupo 16    *');
        console.log('****************************************' + '\n');
        console.log('1 - Consultar Crédito');
        console.log('2 - Cargar Crédito');
        console.log('3 - Juegos');
        console.log('4 - Salir');
        this.rl.question('Ingrese una opción: ', (opcion) => {
            switch (opcion) {
                case '1':
                    this.consultarSaldo();
                    break;
                case '2':
                    this.cargarCreditos();
                    break;
                case '3':
                    this.menuElejirJuegos();
                    break;
                case '4':
                    this.menuLogin();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.mostrarMenuPrincipal();
            }
        });
    }
    // Consultar el saldo de créditos
    consultarSaldo() {
        this.jugador.setCreditos(MenuCasino.creditosMcasino);
        const creditos = this.jugador.consultarCreditos();
        if (creditos !== undefined) {
            console.log(`Su saldo es de $${creditos} créditos.`);
        }
        this.rl.question('Presione Enter para continuar...', () => {
            this.mostrarMenuPrincipal();
        });
    }
    // Cargar créditos al jugador
    cargarCreditos() {
        this.rl.question('Ingrese el monto a cargar: $', (monto) => {
            const montoValido = parseInt(monto);
            if (isNaN(montoValido) || montoValido <= 0) {
                console.log('Error: Por favor ingrese un valor válido superior a 0');
                this.rl.question('Presione Enter para continuar...', () => {
                    this.mostrarMenuPrincipal();
                });
            }
            else {
                this.jugador.cargarCreditos(montoValido);
                MenuCasino.creditosMcasino = this.jugador.consultarCreditos();
                console.log(`Se han cargado $${montoValido}. Su nuevo saldo es: $${this.jugador.consultarCreditos()}.`);
                this.rl.question('Presione Enter para continuar...', () => {
                    this.mostrarMenuPrincipal();
                });
            }
        });
    }
    // Menú de juegos
    menuElejirJuegos() {
        console.log(`****************************`);
        console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino}*`);
        console.log(`****************************` + '\n');
        console.log('1- Tragamonedas');
        console.log('2- BlackJack');
        console.log('3- Carta Alta');
        console.log('4- Volver');
        console.log(`---------------------------------------------` + '\n');
        this.rl.question('Seleccione una opción: ', (opcion) => {
            switch (opcion) {
                case '1':
                    this.menutragamonedas();
                    break;
                case '2':
                    this.menuBlackJack124();
                    break;
                case '3':
                    this.menuCartaAlta();
                    break;
                case '4':
                    this.mostrarMenuPrincipal();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuElejirJuegos();
            }
        });
    }
    // Funciones de juegos
    menutragamonedas() {
        console.log(`****************************`);
        console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino}*`);
        console.log(`****************************` + '\n');
        console.log('TRAGAMONEDAS');
        console.log('1- Frutas');
        console.log('2- Superheroes');
        console.log('3- Volver');
        console.log(`---------------------------------------------` + '\n');
        this.rl.question('Seleccione una opción: ', (opcionTragamonedas) => {
            switch (opcionTragamonedas) {
                case '1':
                    this.menutragamonedasFrutas();
                    break;
                case '2':
                    this.menuSuperheroe1();
                    break;
                case '3':
                    this.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menutragamonedas();
            }
        });
    }
    menutragamonedasFrutas() {
        console.log(`****************************`);
        console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino}*`);
        console.log(`****************************` + '\n');
        console.log('FRUTAS');
        console.log('1- Jugar');
        console.log('2- Reglas');
        console.log('3- Volver');
        console.log(`---------------------------------------------` + '\n');
        this.rl.question('Seleccione una opción: ', (opcionFrutas) => {
            switch (opcionFrutas) {
                case '1':
                    const menuTragamonedasSuper1 = new MenuTragamonedas_1.MenuTragamonedas();
                    menuTragamonedasSuper1.menuTragamonedasFruta();
                    break;
                case '2':
                    // Reglas Frutas
                    break;
                case '3':
                    this.menutragamonedas();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menutragamonedasFrutas();
            }
        });
    }
    menuSuperheroe1() {
        console.log(`****************************`);
        console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino}*`);
        console.log(`****************************` + '\n');
        console.log('SUPERHEROES');
        console.log('1- Jugar');
        console.log('2- Reglas');
        console.log('3- Volver');
        console.log(`---------------------------------------------` + '\n');
        this.rl.question('Seleccione una opción: ', (opcionSuperheroes) => {
            switch (opcionSuperheroes) {
                case '1':
                    const menuTragamonedasSuper2 = new MenuTragamonedas_1.MenuTragamonedas();
                    menuTragamonedasSuper2.menuTragamonedasSuper();
                    break;
                case '2':
                    // Reglas Superheroes
                    break;
                case '3':
                    this.menutragamonedas();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuSuperheroe1();
            }
        });
    }
    menuBlackJack124() {
        console.log(`****************************`);
        console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino}*`);
        console.log(`****************************` + '\n');
        console.log('BLACKJACK');
        console.log('1- Jugar');
        console.log('2- Reglas');
        console.log('3- Volver');
        console.log(`---------------------------------------------` + '\n');
        this.rl.question('Seleccione una opción: ', (opcionBlackjack) => {
            switch (opcionBlackjack) {
                case '1':
                    const juego1 = new MenuBj_1.MenuBlackJack();
                    juego1.menu1();
                    break;
                case '2':
                    this.mostrarReglasBlackjack();
                    break;
                case '3':
                    this.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuBlackJack124();
            }
        });
    }
    // Método para mostrar las reglas del Blackjack desde un archivo
    mostrarReglasBlackjack() {
        const fs = require('fs');
        fs.readFile('./Reglas-Blackjack.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer las reglas:', err);
                return;
            }
            console.log('\n' + data);
            this.menuBlackJack124(); // Regresa al menú de Blackjack después de mostrar las reglas
        });
    }
    menuCartaAlta() {
        const apuestaMinima = 100;
        const cartaAlta = new CartaAlta_1.CartaAlta(apuestaMinima, this.jugador);
        console.log(`\n*************************************`);
        console.log(`* Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino}  *`);
        console.log(`*************************************` + '\n');
        console.log('*****************************');
        console.log('*        Carta Alta         *');
        console.log('*****************************');
        console.log('1 - Jugar');
        console.log('2 - Reglas');
        console.log('3 - Volver');
        console.log(`---------------------------------------------` + '\n');
        this.rl.question('Seleccione una opción: ', (opcion) => {
            switch (opcion) {
                case '1':
                    cartaAlta.iniciarJuego();
                    break;
                case '2':
                    this.mostrarReglas();
                    break;
                case '3':
                    this.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuCartaAlta();
            }
        });
    }
    // Método para mostrar las reglas
    mostrarReglas() {
        fs.readFile('./Reglas-CartaAlta.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer las reglas:', err);
                return;
            }
            console.log('\n' + data);
            this.menuCartaAlta(); // Regresa al menú después de mostrar las reglas
        });
    }
}
exports.MenuCasino = MenuCasino;
