import { Apuesta } from "./apuesta copy";

export interface Apostable {

    iniciarJuego(): void;
    
    mostrarResultado(): void;
    resultado(apuesta:Apuesta): string;
    
}

