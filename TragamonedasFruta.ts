import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasFruta extends Tragamonedas {
    private carretes: string[][]; 
    private simbolos: string[]; 
    
    constructor( apuestaMinima: number) {
    //constructor(nombre:string, apuestaMinima: number,  tematica:string) {
        super("TragamonedasClasico", apuestaMinima, "Frutas");
        this.simbolos = ["🍎", "🍊", "🍒", "🍇", "🍉"];  // Frutas representadas por emojis
        this.carretes = [
            [], [], [] // Tres carretes vacíos (un carrete por fila)
        ];
    }
    iniciarJuego(): void {
        console.log("Girando los carretes de Tragamonedas Frutas...");
        // Llenar cada carrete con una combinación aleatoria de frutas
        for (let i = 0; i < this.carretes.length; i++) {
          this.carretes[i] = [];
          for (let j = 0; j < 3; j++) {
            // Supongamos que cada carrete tiene 3 símbolos
            const simboloAleatorio = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
            this.carretes[i].push(simboloAleatorio);
          }
          // Verificar si hay una combinación ganadora
          if (this.evaluarGanador()) {
            console.log("¡Has ganado!");
            break; // Detener el bucle si se produce una combinación ganadora
          }
        }
        // Mostrar los resultados de los carretes
        this.mostrarResultado();
      }



/*
    // Implementación de iniciarJuego para TragamonedasFrutas
    iniciarJuego(): void {
        console.log("Girando los carretes de Tragamonedas Frutas...");
        // Llenar cada carrete con una combinación aleatoria de frutas
        for (let i = 0; i < this.carretes.length; i++) {
            this.carretes[i] = [];
            for (let j = 0; j < 3; j++) {  // Supongamos que cada carrete tiene 3 símbolos
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
        } else {
        console.log("No has ganado esta vez. ¡Sigue intentándolo!");
        }
    } 
*/

    //implemento el metodo generarResultado
    mostrarResultado(): void {
        console.log("Resultado de los carretes:");
        for (let i = 0; i < this.carretes.length; i++) {
            console.log(this.carretes[i].join(" | "));
        }
    }

    // Evaluar si hay una combinación ganadora
    private evaluarGanador(): boolean {
        // Verificar si los tres carretes tienen la misma fruta en la misma posición
        for (let i = 0; i < this.carretes[0].length; i++) {
        const fruta = this.carretes[0][i]; // Tomamos el primer símbolo de la primera fila
        if (this.carretes.every(carrete => carrete[i] === fruta)) {
            return true;  // Si todos los carretes tienen la misma fruta en la misma posición, gana
        }
        }
        return false;  // Si no hay combinación ganadora
    }
}