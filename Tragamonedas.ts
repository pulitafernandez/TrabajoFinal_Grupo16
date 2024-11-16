import { Apuesta } from "./Apuesta";
import { Juego } from "./Juego";

export abstract class Tragamonedas extends Juego {
    tematica: string;

    constructor(nombre: string, apuestaMinima: number, tematica: string, ) {
        super("Tragamonedas", apuestaMinima);
        this.tematica = tematica;
    }

    //en base a la apuesta, veo que resultado obtiene
    public resultado(apuesta: Apuesta): string {
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
    }

    //metodo abstracto
    abstract iniciarJuego(): void;

    //metodo abstracto
    protected abstract mostrarResultado(): void;

}

