import { Apuesta } from "./apuesta copy";
import { Apostable } from "./interfaceApuesta";
import { Juego } from "./Juego";

export abstract class Tragamonedas extends Juego {
    tematica: string;

    constructor(nombre: string, apuestaMinima: number, tematica: string,) {
        super("Tragamonedas", apuestaMinima);
        this.tematica = tematica;
    }


    //en base a la apuesta, veo que resultado obtiene
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
    }

    //metodo abstracto
    abstract iniciarJuego(): void;

    //metodo abstracto
    public abstract mostrarResultado(): void;

    resultado(): string {
        // Código para calcular el resultado
        return 'Resultado';
        }
}

