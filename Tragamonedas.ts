import { Apostable } from "./InterfaceApuesta";
import { Juego } from "./Juego";
import { Jugador } from "./Jugador";

export abstract class Tragamonedas extends Juego {
    tematica: string;

    constructor(nombre: string, apuestaMinima: number, tematica: string,) {
        super("Tragamonedas");
        this.tematica = tematica;
    }

    //en base a la apuesta, veo que resultado obtiene
    /*
    public resultado1(apuesta: Apuesta): string {
        if (!apuesta.esValida(this.apuestaMinima)) {
            return `La apuesta minima es ${this.apuestaMinima}. Apuesta invalida`
        }

        //genero el resultado del juego
        const resultadoJuego = this.mostrarResultado();
        const esGanador = Math.random() > 0.5; //probalidad de ganar

        //calculo la ganancia
        const ganancia = apuesta.calcularGanancia(esGanador);
        if (ganancia > 0) {
            return `Ganaste!! El resultado es ${resultadoJuego}. Ganaste $ ${ganancia}`;
        }
        else {
            return `Perdiste. El resultado es ${resultadoJuego}`;
        }
    }*/

    //metodo abstracto
    abstract iniciarJuego(jugador1:Jugador, apuesta:number): void;

    //metodo abstracto
    public abstract mostrarResultado(): void;

    resultado(): string {
        // Código para calcular el resultado
        return 'Resultado';
        }
}

