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
   
    mostrarResultado(): void{}
   
    resultado(): string{
      
    return("");
    }
   
}