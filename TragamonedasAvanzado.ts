import { Tragamonedas } from "./Tragamonedas";
class TragamonedasAvanzado extends Tragamonedas {
    constructor(apuestaMinima: number,) {
        super("Tragamonedas Avanzado", "Superheroes", apuestaMinima);

    }

    //implemento el metodo generarResultado
    protected generarResultado(): string {
        const superHeroes = ["Batman", "Superman", "Robin", "MujerMaravilla", "Flash"];
        const resultado = Array.from({ length: 3 }, () => superHeroes[Math.floor(Math.random() * superHeroes.length)]).join(" |");
        return `El resultado es: ${resultado}`;
    }
}