"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TragamonedasFruta = void 0;
const Tragamonedas_1 = require("./Tragamonedas");
class TragamonedasFruta extends Tragamonedas_1.Tragamonedas {
    constructor(apuestaMinima) {
        //constructor(nombre:string, apuestaMinima: number,  tematica:string) {
        super("TragamonedasClasico", apuestaMinima, "Frutas");
        this.simbolos = ["🍎", "🍊", "🍒", "🍇", "🍉"]; // Frutas representadas por emojis
        this.carretes = [
            [], [], [] // Tres carretes vacíos (un carrete por fila)
        ];
    }
    // Implementación de iniciarJuego para TragamonedasFrutas
    iniciarJuego(jugador1, apuesta) {
        console.log("Girando los carretes de Tragamonedas Frutas...");
        // Llenar cada carrete con una combinación aleatoria de frutas
        for (let i = 0; i < this.carretes.length; i++) {
            this.carretes[i] = [];
            for (let j = 0; j < 3; j++) { // Supongamos que cada carrete tiene 3 símbolos
                const simboloAleatorio = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
                this.carretes[i].push(simboloAleatorio);
            }
        }
        // Mostrar los resultados de los carretes
        this.mostrarResultado();
        // Evaluar si el jugador ha ganado
        const resultadoGanador = this.evaluarGanador();
        if (resultadoGanador) {
            console.log("¡Has ganado!");
            jugador1.cargarCreditos(apuesta);
        }
        else {
            console.log("No has ganado esta vez. ¡Sigue intentándolo!");
            jugador1.cargarCreditos(-apuesta);
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
        // Verificar si los tres carretes tienen la misma fruta en la misma posición
        for (let i = 0; i < this.carretes[0].length; i++) {
            const fruta = this.carretes[0][i]; // Tomamos el primer símbolo de la primera fila
            if (this.carretes.every(carrete => carrete[i] === fruta)) {
                return true; // Si todos los carretes tienen la misma fruta en la misma posición, gana
            }
        }
        return false; // Si no hay combinación ganadora
    }
}
exports.TragamonedasFruta = TragamonedasFruta;
