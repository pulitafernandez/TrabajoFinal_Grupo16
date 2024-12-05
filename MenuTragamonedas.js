"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuTragamonedas = void 0;
var readline = require("readline");
var TragamonedasAvanzado_1 = require("./TragamonedasAvanzado");
var MenuCasino_1 = require("./MenuCasino");
var TragamonedasFruta_1 = require("./TragamonedasFruta");
var MenuTragamonedas = /** @class */ (function () {
    function MenuTragamonedas() {
        this.super1 = new TragamonedasAvanzado_1.TragamonedasAvanzado(1000);
        this.Fruta1 = new TragamonedasFruta_1.TragamonedasFruta(1000);
        this.menuCasino1 = new MenuCasino_1.MenuCasino();
        this.rl = readline.createInterface({
            //input y output son los canales de comunicación
            input: process.stdin,
            output: process.stdout
        });
    }
    MenuTragamonedas.prototype.menuTragamonedasSuper = function () {
        var _this = this;
        console.log('*********************');
        console.log('* Tragamonedas Super*');
        console.log('*********************' + '\n');
        console.log('1- Tirar');
        console.log('2- Ingresar más Creditos');
        console.log('3- Cobrar');
        console.log('4- Volver');
        this.rl.question('Seleccione una opción: ', function (opcion) {
            switch (opcion) {
                case '1':
                    _this.super1.iniciarJuego();
                    _this.menuTragamonedasSuper();
                    break;
                case '2':
                    //funcion agregar creditos();
                    break;
                case '3':
                    //funcion de cobro();
                    break;
                case '4':
                    _this.menuCasino1.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuCasino1.menuElejirJuegos();
            }
        });
    };
    MenuTragamonedas.prototype.menuTragamonedasFruta = function () {
        var _this = this;
        console.log('***********************');
        console.log('* Tragamonedas Frutas *');
        console.log('***********************' + '\n');
        console.log('1- Tirar');
        console.log('2- Ingresar más Creditos');
        console.log('3- Cobrar');
        console.log('4- Volver');
        this.rl.question('Seleccione una opción: ', function (opcion) {
            switch (opcion) {
                case '1':
                    _this.Fruta1.iniciarJuego();
                    _this.menuTragamonedasFruta();
                    break;
                case '2':
                    //funcion agregar creditos();
                    break;
                case '3':
                    //funcion de cobro();
                    break;
                case '4':
                    _this.menuCasino1.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida. Por favor, intente de nuevo.');
                    _this.menuCasino1.menuElejirJuegos();
            }
        });
    };
    return MenuTragamonedas;
}());
exports.MenuTragamonedas = MenuTragamonedas;
