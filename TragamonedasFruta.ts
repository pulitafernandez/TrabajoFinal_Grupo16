import { Tragamonedas } from "./Tragamonedas";
export class TragamonedasFruta extends Tragamonedas {
    constructor(apuestaMinima: number,) {
        super("TragamonedasClasico", "Frutas", apuestaMinima);

    }

    //implemento el metodo generarResultado
    protected generarResultado(): string {
        const frutas = ["Frutilla", "Limon", "Sandia", "Naranja", "Uva"];
        const resultado = Array.from({ length: 3 }, () => frutas[Math.floor(Math.random() * frutas.length)]).join(" |");
        return `El resultado es: ${resultado}`;
    }
}