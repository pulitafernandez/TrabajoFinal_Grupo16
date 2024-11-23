import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasAvanzado extends Tragamonedas {

    private carretes: string[][];    // Los carretes, cada uno puede tener varios símbolos
    private simbolos: string[];      // Los símbolos disponibles para los carretes (superhéroes)
    private carretesCount: number;   // Cantidad de carretes
    private filasCount: number;

    constructor(apuestaMinima: number) {
        super("Tragamonedas Avanzado", apuestaMinima, "Superheroes");
        this.simbolos = ["🦸‍♂️", "🦸‍♀️", "💥", "⚡", "🛡️", "🦸‍♂️🦹‍♂️"]; // Ejemplo de superhéroes, poderes y comodines
        this.carretesCount = 5;   // Supongamos que hay 5 carretes
        this.filasCount = 3;      // Y cada carrete tiene 3 filas
        this.carretes = Array.from({ length: this.carretesCount }, () => []); // Inicializamos el array de carretes

    }

    // Implementación de iniciarJuego para TragamonedasAvanzado
    iniciarJuego(): void {
        console.log("Girando los carretes de Tragamonedas Avanzado...");
        console.log("Girando los carretes de Tragamonedas Avanzado: Superhéroes...");

        // Llenamos cada carrete con una combinación aleatoria de símbolos
        for (let i = 0; i < this.carretes.length; i++) {
            this.carretes[i] = [];
            for (let j = 0; j < this.filasCount; j++) {  // Cada carrete tiene 3 filas
                const simboloAleatorio = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
                this.carretes[i].push(simboloAleatorio);

            }

            // Mostrar los resultados de los carretes
            this.mostrarResultado();
            // Evaluar si el jugador ha ganado
            const resultadoGanador = this.evaluarGanador();
            if (resultadoGanador) {
                console.log("¡Has ganado! Felicitaciones, tu superhéroe ha salvado el día.");
            } else {
                console.log("No has ganado esta vez. ¡Sigue luchando!");
            }
        }
    }

    //implemento el metodo generarResultado
     mostrarResultado(): void {
        console.log("Resultado de los carretes:");
        for (let i = 0; i < this.carretes.length; i++) {
            console.log(this.carretes[i].join(" | "));
        }
    }

    // Evaluar si hay una combinación ganadora
    private evaluarGanador(): boolean {
        // Evaluar combinaciones de superhéroes o poderes en las filas
        for (let i = 0; i < this.filasCount; i++) {
            const combinacion = this.carretes.map(carrete => carrete[i]); // Tomamos una fila de cada carrete
            console.log(`Fila ${i + 1}:`, combinacion);

            // Comprobar si todas las posiciones de la fila son iguales (combinación ganadora)
            if (combinacion.every(simbolo => simbolo === combinacion[0])) {
                return true;  // Si todos los símbolos en la fila son iguales, hay una ganancia
            }
        }

        return false; // Si no hay combinación ganadora
    }

}