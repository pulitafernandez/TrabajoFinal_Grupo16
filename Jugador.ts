

export class Jugador {
    private idJugador: number;
    private nombre: string;
    private creditos: number;
   

    constructor (nombre: string, creditos: number) {
        this.nombre = nombre;
        this.creditos = creditos; 
    }

    //getters y setters
    getIdJugador(): number {
        return this.idJugador
    }

    setIdJugador(nuevoidJugador: number): void {
        this.idJugador = nuevoidJugador;
    }

    getNombre(): string {
        return this.nombre
    }

    setNombre(nuevoNombre: string):void {
        this.nombre = nuevoNombre;
    }

    getCreditos(): number {
        return this.creditos
    }

    setCreditos(nuevoCreditos: number):void {
        this.creditos = nuevoCreditos;
    }
}