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
exports.MenuTragamonedas = void 0;
const readline = __importStar(require("readline"));
const TragamonedasAvanzado_1 = require("./TragamonedasAvanzado");
const MenuCasino_1 = require("./MenuCasino");
const TragamonedasFruta_1 = require("./TragamonedasFruta");
class MenuTragamonedas {
    constructor() {
        this.super1 = new TragamonedasAvanzado_1.TragamonedasAvanzado(1000);
        this.Fruta1 = new TragamonedasFruta_1.TragamonedasFruta(1000);
        this.menuCasino1 = new MenuCasino_1.MenuCasino();
        this.rl = readline.createInterface({
            //input y output son los canales de comunicación
            input: process.stdin,
            output: process.stdout
        });
    }
    menuTragamonedasSuper() {
        console.log('*********************');
        console.log('* Tragamonedas Super*');
        console.log('*********************' + '\n');
        console.log('1- Tirar');
        console.log('2- Ingresar más Creditos');
        console.log('3- Cobrar');
        console.log('4- Volver');
        this.rl.question('Seleccione una opción: ', (opcion) => {
            switch (opcion) {
                case '1':
                    this.super1.iniciarJuego();
                    this.menuTragamonedasSuper();
                    break;
                case '2':
                    //funcion agregar creditos();
                    break;
                case '3':
                    //funcion de cobro();
                    break;
                case '4':
                    this.menuCasino1.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuCasino1.menuElejirJuegos();
            }
        });
    }
    menuTragamonedasFruta() {
        console.log('***********************');
        console.log('* Tragamonedas Frutas *');
        console.log('***********************' + '\n');
        console.log('1- Tirar');
        console.log('2- Ingresar más Creditos');
        console.log('3- Cobrar');
        console.log('4- Volver');
        this.rl.question('Seleccione una opción: ', (opcion) => {
            switch (opcion) {
                case '1':
                    this.Fruta1.iniciarJuego();
                    this.menuTragamonedasFruta();
                    break;
                case '2':
                    //funcion agregar creditos();
                    break;
                case '3':
                    //funcion de cobro();
                    break;
                case '4':
                    this.menuCasino1.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    this.menuCasino1.menuElejirJuegos();
            }
        });
    }
}
exports.MenuTragamonedas = MenuTragamonedas;
