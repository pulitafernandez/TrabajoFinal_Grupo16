import { Apuesta } from "./apuesta copy";
import { Apostable } from "./interfaceApuesta";


export abstract class Juego implements Apostable {
    public nombre: string;
    public apuestaMinima: number;

    constructor(nombre: string, apuestaMinima: number) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;

    }
    iniciarJuego(){}
    // public esValida(apuestaMinima: number): boolean {
    //     return this.cantidadApuesta >= apuestaMinima;
    // }

    // //calculo la ganancia del jugador
    // calcularGanancia(esGanador: boolean): number {
    //     return esGanador ? this.cantidadApuesta * 2 : 0;
    // }
    //metodo abstracto
    mostrarResultado(): void{}
   
    resultado(): string{
      
    return("");
    }
   
}