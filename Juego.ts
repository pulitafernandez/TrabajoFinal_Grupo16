import { Apostable } from "./interfaceApuesta";

export abstract class Juego {
    public nombre: string;
    public apuestaMinima: number;

    constructor(nombre: string, apuestaMinima: number) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;

    }


}