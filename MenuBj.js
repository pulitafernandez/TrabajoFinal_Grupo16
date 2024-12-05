"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBlackJack = void 0;
const Blackjack_1 = require("./Blackjack");
const MenuCasino_1 = require("./MenuCasino");
const Jugador_1 = require("./Jugador");
class MenuBlackJack {
    // private rl: readline.Interface;
    constructor() {
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
    menu1() {
        console.log(`---------------------------------------------------------------------- \n`);
        console.log(`Bienvenido ${this.menu5.getnombreMcasino()} Al BlackJack\n`);
        console.log(`Tus Creditos son de:${this.menu5.getcreditosMcasino()}\n`);
        console.log(`1. Ingresar Creditos Al Juego\n`);
        console.log(`2. Iniciar Partida\n`);
        console.log(`3. Salir\n`);
        console.log(`---------------------------------------------------------------------- \n`);
        this.menu5.rl.question('Ingrese su opción: ', (opcion1) => {
            //this.rl.question('Ingrese su opción: ', (opcion1) => {
            switch (opcion1) {
                case '1':
                    this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + 200);
                    this.menu1();
                    break;
                case '2':
                    this.menujuego();
                    break;
                case '3':
                    this.menu5.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida');
                    this.menu1();
            }
        });
    }
    menujuego() {
        console.log(`---------------------------------------------------------------------- \n`);
        console.log(`Amiguito ${this.menu5.getnombreMcasino()} \n`);
        console.log(`Tus Creditos son de:${this.menu5.getcreditosMcasino()}\n`);
        console.log(`1. Ingresar Creditos Al Juego \n`);
        console.log(`2. Apostar y Jugar \n`);
        console.log(`3. Volver al menu Principal \n`);
        console.log(`4. Salir \n`);
        console.log(`---------------------------------------------------------------------- \n`);
        this.menu5.rl.question('Ingrese su opción: ', (opcion1) => {
            // this.rl.question('Ingrese su opción: ', (opcion1) => {
            switch (opcion1) {
                case '1':
                    this.menu5.setcreditosMcasino(200);
                    this.menujuego();
                    break;
                case '2':
                    this.realizarApuesta();
                    break;
                case '3':
                    this.menu1();
                    break;
                case '4':
                    this.menu5.rl.close();
                    // this.rl.close();
                    break;
                default:
                    console.log('Opción inválida');
                    this.menu1();
            }
        });
    }
    menujuego1() {
        console.log(`---------------------------------------------------------------------- \n`);
        console.log(`Amiguito ${this.menu5.getnombreMcasino()}\n`);
        console.log(`Tus Créditos son de: ${this.menu5.getcreditosMcasino()}\n`);
        console.log(`1. Pedir una Carta\n`);
        console.log(`2. Quedarse\n`);
        console.log(`---------------------------------------------------------------------- \n`);
        this.menu5.rl.question('Ingrese su opción: ', (opcion1) => {
            //this.rl.question('Ingrese su opción: ', (opcion1) => {
            switch (opcion1) {
                case '1':
                    this.blackjack1.pedirCartaJugador();
                    this.blackjack1.mostrarCartaJug();
                    this.sumaJugador = this.blackjack1.obtenerSumaJugador();
                    this.chequearJugada();
                    break;
                case '2':
                    this.juegaConsola();
                    break;
                default:
                    console.log('Opción inválida');
                    this.menu1();
            }
        });
    }
    realizarApuesta() {
        this.apuesta = 0;
        console.log(`---------------------------------------------------------------------- \n`);
        this.menu5.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 10 y la maxima es de 100): ', (apuesta) => {
            // this.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 10 y la maxima es de 100): ', (apuesta) => {
            const apuestaNumero = parseInt(apuesta);
            if (apuestaNumero >= 10 && apuestaNumero <= 100) {
                if (this.menu5.getcreditosMcasino() >= apuestaNumero) {
                    this.apuesta = apuestaNumero;
                    this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() - this.apuesta);
                    console.log(`---------------------------------------------------------------------- \n`);
                    console.log(`Su apuesta es de ${this.apuesta}`);
                    console.log(`Tus Creditos son : ${this.menu5.getcreditosMcasino()}`);
                    console.log(`---------------------------------------------------------------------- \n`);
                    this.repartir();
                }
            }
            else {
                console.log(`---------------------------------------------------------------------- \n`);
                console.log(`Su apuesta no esta entre los parametros requeridos`);
                this.apuesta = 0;
                this.menujuego();
            }
        });
    }
    repartir() {
        this.blackjack1.limpiarArrays();
        console.log(`---------------------------------------------------------------------- \n`);
        console.log(`Inicia la Partida`);
        console.log(`Tu apuesta es de ${this.apuesta}\n`);
        this.blackjack1.pedirCartaJugador();
        this.blackjack1.pedirCartaJugador();
        console.log("Tus Cartas Son:");
        this.blackjack1.mostrarCartaJug();
        console.log(`\n`);
        this.blackjack1.pedirCartaBanca();
        console.log(`Total jugador: ${this.blackjack1.obtenerSumaJugador()}`);
        console.log(`---------------------------------------------------------------------- \n`);
        console.log("Las Cartas de la Banca Son:");
        this.blackjack1.mostarCartaBanca();
        console.log(`Total Banca: ${this.blackjack1.obtenerSumaBanca()}`);
        console.log(`---------------------------------------------------------------------- \n`);
        this.chequearBJ();
    }
    chequearBJ() {
        if (this.blackjack1.obtenerSumaJugador() == 21) {
            console.log(`---------------------------------------------------------------------- \n`);
            console.log(`chequearBJ igual a 21 tienes BJ`);
            console.log(`Tienes Black Jack`);
            console.log(`Total jugador: ${this.blackjack1.obtenerSumaJugador()}`);
            console.log(`---------------------------------------------------------------------- \n`);
            console.log(`La Banca pide una carta`);
            this.blackjack1.pedirCartaBanca();
            this.blackjack1.mostarCartaBanca();
            console.log(`Total Banca: ${this.blackjack1.obtenerSumaBanca()}`);
            console.log(`---------------------------------------------------------------------- \n`);
            this.sumaBanca = this.blackjack1.obtenerSumaBanca();
            this.sumaJugador = this.blackjack1.obtenerSumaJugador();
            if (this.sumaBanca == this.sumaJugador) {
                console.log(`---------------------------------------------------------------------- \n`);
                console.log(`chequearBj igual que 21 empatas`);
                console.log(`Ambos tiene Black Jack Empate`);
                this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + this.apuesta);
                // this.creditos = this.creditos + this.apuesta;
                this.menujuego();
            }
            else {
                console.log(`---------------------------------------------------------------------- \n`);
                console.log(`chequearBJ la banca no tiene 21 ganas`);
                console.log(`total banca ${this.blackjack1.obtenerSumaBanca()}
  no consiguio empatar el BlackJack la banca Pierde.
  Ganaste ${(this.apuesta * 2.5)}`);
                console.log(`---------------------------------------------------------------------- \n`);
                this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + (this.apuesta * 2.5));
                //this.creditos = this.creditos + (this.apuesta * 2.5);
                this.menujuego();
            }
        }
        else {
            console.log(`---------------------------------------------------------------------- \n`);
            console.log(`chequearBJ no tienes 21BJ`);
            console.log("No hay blackjack");
            console.log(`---------------------------------------------------------------------- \n`);
            this.menujuego1();
        }
    }
    chequearJugada() {
        if (this.sumaJugador < 21) {
            console.log(`---------------------------------------------------------------------- \n`);
            console.log(`chequear jugada menor que 21 volver a preguntar`);
            console.log(`Total jugador: ${this.sumaJugador}`);
            console.log(`---------------------------------------------------------------------- \n`);
            this.menujuego1();
        }
        else if (this.sumaJugador > 21) {
            console.log(`---------------------------------------------------------------------- \n`);
            console.log(`chequear jugada mayor que 21 perdiste`);
            console.log(`Total jugador: ${this.sumaJugador}`);
            console.log(`Perdiste`);
            console.log(`---------------------------------------------------------------------- \n`);
            this.menujuego();
        }
        else if (this.sumaJugador === 21) {
            console.log(`---------------------------------------------------------------------- \n`);
            console.log(`chequear jugada igual a que 21 ganas`);
            console.log(`¡Felicidades! Obtuviste 21 puntos.`);
            console.log(`---------------------------------------------------------------------- \n`);
            this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + (this.apuesta * 2));
            //this.creditos = this.creditos + (this.apuesta * 2);
            this.menujuego1();
        }
    }
    juegaConsola() {
        console.log(`---------------------------------------------------------------------- \n`);
        console.log(`Tienes ${this.blackjack1.obtenerSumaJugador()}.\n`);
        console.log(`La Banca da vuelta su carta`);
        this.blackjack1.pedirCartaBanca();
        this.blackjack1.mostarCartaBanca();
        console.log(`---------------------------------------------------------------------- \n`);
        this.sumaBanca = this.blackjack1.obtenerSumaBanca();
        this.sumaJugador = this.blackjack1.obtenerSumaJugador();
        while (this.sumaBanca < this.sumaJugador && this.sumaBanca < 21) {
            console.log(`La Banca pide otra carta`);
            this.blackjack1.pedirCartaBanca();
            this.blackjack1.mostarCartaBanca();
            console.log(`---------------------------------------------------------------------- \n`);
            this.sumaBanca = this.blackjack1.obtenerSumaBanca();
            console.log(`Total banca: ${this.sumaBanca}`);
            console.log(`---------------------------------------------------------------------- \n`);
        }
        switch (true) {
            case this.sumaBanca === this.sumaJugador:
                console.log(` \n`);
                console.log(`Empate. Nadie gana`);
                console.log(`---------------------------------------------------------------------- \n`);
                this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + this.apuesta);
                // this.creditos = this.creditos + this.apuesta;
                this.menu1();
                break;
            case this.sumaBanca > this.sumaJugador && this.sumaBanca <= 21:
                console.log(`Gana la Banca`);
                console.log(`---------------------------------------------------------------------- \n`);
                this.menu1();
                break;
            case this.sumaBanca > 21:
                console.log(`La Banca pierde. Ganaste!`);
                console.log(`${this.menu5.getcreditosMcasino() + this.apuesta * 2} + \n `);
                //console.log(`${this.creditos + (this.apuesta * 2)} \n`);
                console.log(`---------------------------------------------------------------------- \n`);
                this.menu5.setcreditosMcasino(this.menu5.getcreditosMcasino() + (this.apuesta * 2));
                // this.creditos = this.creditos + (this.apuesta * 2);
                this.menu1();
                break;
        }
    }
    mostrarResultado() { }
    cargarCredito() { }
    actualizarSaldo() { }
    cobrarPremio() { }
}
exports.MenuBlackJack = MenuBlackJack;
