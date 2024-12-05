
export class Apuesta {
    
    cantidadApuesta: number;

    constructor(cantidadApuesta: number) {
        this.cantidadApuesta = cantidadApuesta;
    }

    //verifico si la apuesta es valida
    public esValida(apuestaMinima: number): boolean {
        return this.cantidadApuesta >= apuestaMinima;
    }

    //calculo la ganancia del jugador
    calcularGanancia(esGanador: boolean): number {
        return esGanador ? this.cantidadApuesta * 2 : 0;
    }
}