import { Apuesta } from "./Apuesta";

export interface Apostable {


    mostrarResultado(): void

    cargarCredito(): void


    actualizarSaldo(): void


    cobrarPremio(): void


    realizarApuesta(): void
}
