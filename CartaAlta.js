"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaAlta = void 0;
const Carta_1 = require("./Carta");
const Juego_1 = require("./Juego");
const MenuCasino_1 = require("./MenuCasino");
class CartaAlta extends Juego_1.Juego {
    constructor(apuestaMinima, jugador) {
        super("CartaAlta");
        this.apuestaMinima = apuestaMinima;
        this.jugador = jugador;
        this.cartaActual = null;
    }
    // Inicia el juego validando si el jugador tiene créditos suficientes
    iniciarJuego(jugador1) {
        if (jugador1.consultarCreditos() < this.apuestaMinima) {
            console.log("No tienes suficientes créditos para jugar.");
            this.volverAlMenuPrincipal(); // Redirigir al menú de selección de juegos si no hay suficientes créditos
            return;
        }
        this.cartaActual = Carta_1.Carta.obtenerCartaAleatoria();
        console.log(`¡Juego iniciado por ${jugador1.getNombre()}! Carta inicial: ${this.cartaActual.getNombre()}`);
        this.jugarCartaAlta();
    }
    // Ciclo principal del juego
    jugarCartaAlta() {
        console.log('Elige: 1 - Mayor, 2 - Menor');
        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question('¿Qué eliges?: ', (opcion) => {
            const apuesta = opcion === '1' ? 'mayor' : 'menor';
            // Ejecuta la lógica de la siguiente carta
            const resultado = this.siguienteCartaJugador(apuesta);
            if (resultado) {
                console.log('¡Continúas jugando!\n');
                rl.close(); // Cierra la interfaz readline después de la jugada
                this.jugarCartaAlta(); // Continúa el ciclo si gana
            }
            else {
                rl.close(); // Cierra la interfaz readline después de la jugada
                this.menuCartaAlta(); // Vuelve al menú si pierde
            }
        });
    }
    // Lógica para manejar la elección del jugador y verificar el resultado
    siguienteCartaJugador(apuesta) {
        if (!this.cartaActual) {
            throw new Error("El juego no ha comenzado. Inicia el juego primero.");
        }
        if (this.jugador.consultarCreditos() < this.apuestaMinima) {
            console.log("No tienes suficientes créditos para continuar jugando.");
            return false;
        }
        // Descuenta la apuesta mínima
        this.jugador.cargarCreditos(-this.apuestaMinima);
        const nuevaCarta = Carta_1.Carta.obtenerCartaAleatoria();
        console.log(`Nueva carta: ${nuevaCarta.getNombre()}`);
        const esMayor = nuevaCarta.getValorNumerico() > this.cartaActual.getValorNumerico();
        if ((apuesta === 'mayor' && esMayor) || (apuesta === 'menor' && !esMayor)) {
            console.log("¡Ganaste!");
            this.jugador.cargarCreditos(this.apuestaMinima * 2); // Gana el doble de la apuesta mínima
            this.cartaActual = nuevaCarta; // Actualiza la carta actual
            // Mostrar solo después de la jugada
            console.log(`Su crédito actual es: $${this.jugador.consultarCreditos()}\n`);
            return true;
        }
        else {
            console.log("Perdiste.");
            this.cartaActual = null;
            console.log(`Su crédito actual es: $${this.jugador.consultarCreditos()}\n`);
            // Redirige al menú principal
            return false;
        }
    }
    // Método para redirigir al menú principal
    menuCartaAlta() {
        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        console.log("\nMenú de Carta Alta:");
        console.log("1. Jugar de nuevo");
        console.log("2. Volver al menú principal");
        rl.question("Elige una opción: ", (opcion) => {
            switch (opcion) {
                case '1':
                    console.log("¡Volviendo a jugar!");
                    rl.close(); // Cierra la interfaz readline antes de reiniciar el juego
                    this.iniciarJuego(this.jugador); // Vuelve a iniciar el juego de Carta Alta
                    break;
                case '2':
                    console.log("Volviendo al menú principal...");
                    rl.close(); // Cierra la interfaz readline antes de regresar
                    this.volverAlMenuPrincipal(); // Llama a la función que maneja el menú principal
                    break;
                default:
                    console.log("Opción no válida. Por favor elige 1 o 2.");
                    this.menuCartaAlta(); // Si la opción no es válida, vuelve a mostrar el menú
                    break;
            }
        });
    }
    // Método para volver al menú principal (utiliza la clase MenuCasino)
    volverAlMenuPrincipal() {
        const menuCasino = MenuCasino_1.MenuCasino.getInstance(); // Obtén la instancia de MenuCasino
        menuCasino.menuElejirJuegos(this.jugador); // Llama al método para mostrar el menú de juegos
    }
    //Método para cargar créditos al jugador
    cargarCredito() {
        const monto = 50;
        this.jugador.cargarCreditos(monto);
        console.log(`Se han cargado $${monto} a tu cuenta. Créditos actuales: $${this.jugador.consultarCreditos()}`);
    }
    //Actualiza el saldo del jugador
    actualizarSaldo() {
        console.log(`Saldo actual: $${this.jugador.consultarCreditos()}`);
    }
    // Cobra un premio fijo
    cobrarPremio() {
        const premio = 100;
        this.jugador.cargarCreditos(premio);
        console.log(`Has cobrado un premio de $${premio}. Créditos actuales: $${this.jugador.consultarCreditos()}`);
    }
    // Realiza una apuesta si el jugador tiene créditos suficientes
    realizarApuesta() {
        if (this.jugador.consultarCreditos() >= this.apuestaMinima) {
            this.jugador.cargarCreditos(-this.apuestaMinima);
            console.log(`Has realizado una apuesta de $${this.apuestaMinima}. Créditos restantes: $${this.jugador.consultarCreditos()}`);
        }
        else {
            console.log("No tienes suficientes créditos para realizar esta apuesta.");
        }
    }
}
exports.CartaAlta = CartaAlta;
