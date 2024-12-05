import { Apuesta } from "./Apuesta";
import { Apostable } from "./InterfaceApuesta";


export abstract class Juego {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;


    }
    iniciarJuego() { }
    // public esValida(apuestaMinima: number): boolean {
    //     return this.cantidadApuesta >= apuestaMinima;
    // }

    // //calculo la ganancia del jugador
    // calcularGanancia(esGanador: boolean): number {
    //     return esGanador ? this.cantidadApuesta * 2 : 0;
    // }
    //metodo abstracto
    mostrarResultado(): void { }

    resultado(): string {

        return ("");
    }

}