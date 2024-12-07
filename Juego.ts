import { Jugador } from "./Jugador";
export abstract class Juego {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;

    }
    
    iniciarJuego(jugador1:Jugador, apuesta:number): void{ }
     mostrarResultado(): void { }

  
}