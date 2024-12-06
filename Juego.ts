

export abstract class Juego {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;

    }
    iniciarJuego() { }
   
    mostrarResultado(): void { }

    resultado(): void {}

}