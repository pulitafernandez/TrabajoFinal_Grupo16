import { Apuesta } from "./Apuesta";

export interface Apostable {


    // public esValida(apuestaMinima: number): boolean {
    //     return this.cantidadApuesta >= apuestaMinima;
    // }

    // //calculo la ganancia del jugador
    // calcularGanancia(esGanador: boolean): number {
    //     return esGanador ? this.cantidadApuesta * 2 : 0;
    // }
    //metodo abstracto


    mostrarResultado(): void



    cargarCredito(): void


    actualizarSaldo(): void


    cobrarPremio(): void


    realizarApuesta(): void
}
