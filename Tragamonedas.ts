import { Juego } from "./Juego";
import { Jugador } from "./Jugador";

export abstract class Tragamonedas extends Juego {
    tematica: string;
    
    constructor(nombre: string, tematica: string,) {
        super("Tragamonedas");
        this.tematica = tematica;
    }

    
    //metodo abstracto
    abstract iniciarJuego(jugador1:Jugador, apuesta:number): void;

    //metodo abstracto
    public abstract mostrarResultado(): void;

   
}

