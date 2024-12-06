//import { Apuesta } from "./Apuesta";

export interface Apostable {

    
    cargarCredito(): void
    actualizarSaldo(): void

    //no se estan usando
    cobrarPremio(): void
    realizarApuesta(): void
    mostrarResultado(): void

}

