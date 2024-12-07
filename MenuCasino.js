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
const readline = __importStar(require("readline"));
const Jugador_1 = require("./Jugador");
const Casino_1 = require("./Casino");
const MenuBj_1 = require("./MenuBj");
const CartaAlta_1 = require("./CartaAlta");
const fs = __importStar(require("fs"));
const TragamonedasFruta_1 = require("./TragamonedasFruta");
const TragamonedasAvanzado_1 = require("./TragamonedasAvanzado");
class MenuCasino {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.casino1 = new Casino_1.Casino(1, "Casino Grupo16");
        this.jugador = new Jugador_1.Jugador("JugadorPorDefecto", 0);
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
    //Menú de login e ingresar nombre y créditos
    menuLogin() {
        console.log('*********************************');
        console.log('* Loguear como jugador*');
        console.log('*********************************' + '\n');
        console.log('1 - Ingresar usuario');
        console.log('2 - Salir');
        this.rl.question('Ingrese una opción: ', (opcion) => {
            switch (opcion) {
                case '1':
                    console.clear();
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
                    console.clear();
                    console.log('Gracias por visitar Casino Grupo 16');
                    this.rl.close();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuLogin();
            }
        });
    }
    //Menú principal y manejar las opciones
    mostrarMenuPrincipal() {
        console.log('***************************************');
        console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino}*`);
        console.log('*    Bienvenido al Casino Grupo 16    *');
        console.log('***************************************' + '\n');
        console.log('1 - Consultar Crédito');
        console.log('2 - Cargar Crédito');
        console.log('3 - Juegos');
        console.log('4 - Salir');
        this.rl.question('Ingrese una opción: ', (opcion) => {
            switch (opcion) {
                case '1':
                    console.clear();
                    this.consultarSaldo();
                    break;
                case '2':
                    console.clear();
                    this.cargarCreditos();
                    break;
                case '3':
                    console.clear();
                    this.menuElejirJuegos();
                    break;
                case '4':
                    console.clear();
                    this.menuLogin();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.mostrarMenuPrincipal();
            }
        });
    }
    //Menú de Seleccion de juegos
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
                    console.clear();
                    this.menutragamonedas();
                    break;
                case '2':
                    console.clear();
                    this.menuBlackJack();
                    break;
                case '3':
                    console.clear();
                    this.menuCartaAlta();
                    break;
                case '4':
                    console.clear();
                    this.mostrarMenuPrincipal();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuElejirJuegos();
            }
        });
    }
    //Menu Seleccion de Tragamonedas
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
                    console.clear();
                    this.menutragamonedasFrutas();
                    break;
                case '2':
                    console.clear();
                    this.menuSuperheroe();
                    break;
                case '3':
                    console.clear();
                    this.menuElejirJuegos();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menutragamonedas();
            }
        });
    }
    //Menu Tragamonedas Frutas
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
                    console.clear();
                    this.rl.close();
                    const menuFruta = new TragamonedasFruta_1.TragamonedasFruta();
                    menuFruta.realizarApuesta();
                    break;
                case '2':
                    console.clear();
                    this.mostrarReglasFrutas();
                    break;
                case '3':
                    console.clear();
                    this.menutragamonedas();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menutragamonedasFrutas();
            }
        });
    }
    //Menu Tragamonedas Super Heroes
    menuSuperheroe() {
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
                    console.clear();
                    this.rl.close();
                    const menuTragamonedasSuper2 = new TragamonedasAvanzado_1.TragamonedasAvanzado();
                    menuTragamonedasSuper2.realizarApuesta();
                    break;
                case '2':
                    console.clear();
                    this.mostrarReglasSuperheroes();
                    break;
                case '3':
                    console.clear();
                    this.menutragamonedas();
                    break;
                default:
                    console.clear();
                    this.rl.close();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuSuperheroe();
            }
        });
    }
    //Menu Black Jack
    menuBlackJack() {
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
                    console.clear();
                    this.rl.close();
                    const juego1 = new MenuBj_1.MenuBlackJack();
                    juego1.menu1();
                    break;
                case '2':
                    console.clear();
                    this.mostrarReglasBlackjack();
                    break;
                case '3':
                    console.clear();
                    this.menuElejirJuegos();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuBlackJack();
            }
        });
    }
    //Menu Carta Alta
    menuCartaAlta() {
        console.log(`****************************`);
        console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino}*`);
        console.log(`****************************` + '\n');
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
                    console.clear();
                    this.rl.close();
                    const cartaAlta = new CartaAlta_1.CartaAlta();
                    cartaAlta.menu1();
                    break;
                case '2':
                    console.clear();
                    this.mostrarReglasCartaAlta();
                    break;
                case '3':
                    console.clear();
                    this.menuElejirJuegos();
                    break;
                default:
                    console.clear();
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuCartaAlta();
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
                this.jugador.setCreditos(this.jugador.consultarCreditos() + montoValido);
                MenuCasino.creditosMcasino = this.jugador.consultarCreditos();
                console.log(`Se han cargado $${montoValido}. Su nuevo saldo es: $${this.jugador.consultarCreditos()}.`);
                this.rl.question('Presione Enter para continuar...', () => {
                    this.mostrarMenuPrincipal();
                });
            }
        });
    }
    //Menues de Reglas de Juegos
    mostrarReglasFrutas() {
        fs.readFile('./Reglas/Reglas-TragamonedasFrutas.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer las reglas:', err);
                return;
            }
            console.log('\n' + data);
            this.menutragamonedasFrutas(); // Regresa al menú de Tragamonedas Frutas después de mostrar las reglas
        });
    }
    mostrarReglasSuperheroes() {
        fs.readFile('./Reglas/Reglas-TragamonedasSuperheroes.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer las reglas:', err);
                return;
            }
            console.log('\n' + data);
            this.menuSuperheroe(); // Regresa al menú de Tragamonedas Superhéroes después de mostrar las reglas
        });
    }
    mostrarReglasBlackjack() {
        const fs = require('fs');
        fs.readFile('./Reglas/Reglas-Blackjack.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error al leer las reglas:', err);
                return;
            }
            console.log('\n' + data);
            this.menuBlackJack(); // Regresa al menú de Blackjack después de mostrar las reglas
        });
    }
    mostrarReglasCartaAlta() {
        fs.readFile('./Reglas/Reglas-CartaAlta.txt', 'utf8', (err, data) => {
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
