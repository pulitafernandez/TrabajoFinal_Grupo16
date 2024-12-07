import { Juego } from "./Juego";

export abstract class Tragamonedas extends Juego {
    tematica: string;
    
    constructor(nombre: string, tematica: string,) {
        super("Tragamonedas");
        this.tematica = tematica;
    }
    
    //metodo abstracto
    abstract iniciarJuego(): void;

    //metodo abstracto
    public abstract mostrarResultado(): void;

}