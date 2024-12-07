"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TragamonedasAvanzado = void 0;
const Tragamonedas_1 = require("./Tragamonedas");
const MenuCasino_1 = require("./MenuCasino");
class TragamonedasAvanzado extends Tragamonedas_1.Tragamonedas {
    constructor() {
        super("Tragamonedas Avanzado", "Superheroes");
        this.apuesta = 0;
        this.menu1 = new MenuCasino_1.MenuCasino();
        this.simbolos = ["🦸‍♂️", "🦸‍♀️", "💥", "⚡", "🛡️", "🦸‍♂️🦹‍♂️"]; // Ejemplo de superhéroes, poderes y comodines
        this.carretesCount = 5; // Supongamos que hay 5 carretes
        this.filasCount = 3; // Y cada carrete tiene 3 filas
        this.carretes = Array.from({ length: this.carretesCount }, () => []); // Inicializamos el array de carretes
    }
    actualizarSaldo() {
        console.log(`Jugador ${this.menu1.getnombreMcasino()}`);
        console.log(`Tus Creditos son de:${this.menu1.getcreditosMcasino()}\n`);
    }
    realizarApuesta() {
        this.actualizarSaldo();
        this.apuesta = 0;
        console.log(`---------------------------------------------------------------------- \n`);
        this.menu1.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 1000 y la maxima es de 10000): ', (apuesta) => {
            const apuestaNumero = parseInt(apuesta);
            if (apuestaNumero >= 1000 && apuestaNumero <= 10000 && this.menu1.getcreditosMcasino() >= apuestaNumero) {
                this.apuesta = apuestaNumero;
                this.menu1.setcreditosMcasino(this.menu1.getcreditosMcasino() - this.apuesta);
                console.log(`---------------------------------------------------------------------- \n`);
                console.log(`Su apuesta es de ${this.apuesta}`);
                console.log(`Tus Creditos son : ${this.menu1.getcreditosMcasino()}`);
                console.log(`---------------------------------------------------------------------- \n`);
                this.iniciarJuego();
            }
            else {
                console.log(`---------------------------------------------------------------------- \n`);
                console.log(`Su apuesta no esta entre los parametros requeridos`);
                this.apuesta = 0;
                this.menu1.menuSuperheroe();
            }
        });
    }
    // Implementación de iniciarJuego para TragamonedasAvanzado
    iniciarJuego() {
        console.log("Girando los carretes de Tragamonedas Avanzado: Superhéroes...");
        // Llenamos cada carrete con una combinación aleatoria de símbolos
        for (let i = 0; i < this.carretes.length; i++) {
            this.carretes[i] = [];
            for (let j = 0; j < this.filasCount; j++) { // Cada carrete tiene 3 filas
                const simboloAleatorio = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
                this.carretes[i].push(simboloAleatorio);
            }
            // Mostrar los resultados de los carretes
        }
        // Evaluar si el jugador ha ganado
        const resultadoGanador = this.evaluarGanador();
        if (resultadoGanador) {
            console.log("¡Has ganado! Felicitaciones, tu superhéroe ha salvado el día.");
            this.menu1.setcreditosMcasino(this.menu1.getcreditosMcasino() + (this.apuesta * 3));
            this.menu1.menuSuperheroe();
        }
        else {
            console.log("No has ganado esta vez. ¡Sigue luchando!");
            this.menu1.menuSuperheroe();
        }
    }
    //implemento el metodo generarResultado
    mostrarResultado() {
        console.log("Resultado de los carretes:");
        for (let i = 0; i < this.carretes.length; i++) {
            console.log(this.carretes[i].join(" | "));
        }
    }
    // Evaluar si hay una combinación ganadora
    evaluarGanador() {
        // Evaluar combinaciones de superhéroes o poderes en las filas
        for (let i = 0; i < this.filasCount; i++) {
            const combinacion = this.carretes.map(carrete => carrete[i]); // Tomamos una fila de cada carrete
            console.log(`Fila ${i + 1}:`, combinacion);
            // Comprobar si todas las posiciones de la fila son iguales (combinación ganadora)
            if (combinacion.every(simbolo => simbolo === combinacion[0])) {
                return true; // Si todos los símbolos en la fila son iguales, hay una ganancia
            }
        }
        return false; // Si no hay combinación ganadora
    }
    cargarCredito() { }
}
exports.TragamonedasAvanzado = TragamonedasAvanzado;
