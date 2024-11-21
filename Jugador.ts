export class Jugador {
    private idJugador: number;
    private nombre: string;
    private creditos: number;
    private jugador: Jugador[] = [];
    private min = 0;
    private max = 1000;

    contructor(idJugador: number, nombre: string, creditos: number) {
        this.idJugador = idJugador;
        this.nombre = nombre;
        this.creditos = creditos;

    }
    //getters y setters
    getIdJugador(): number {
        return this.idJugador
    }
    getNombre(): string {
        return this.nombre
    }
    cargarCreditos(monto: number): void {
        this.creditos = this.creditos + monto;
        return console.log(`Su credito actual es,${this.creditos}`);
    }
    consultarCreditos(): number {

        return this.creditos;
    }
    agregarJugador(nuevoJugador: Jugador) {
        if (nuevoJugador instanceof Jugador) {
            nuevoJugador.setIdJugador(Math.floor(Math.random() * (this.max - this.min + 1)) + this.min)
            this.jugador.push(nuevoJugador)
        }

    }
    setIdJugador(nuevoidJugador: number): void {
        this.idJugador = nuevoidJugador;
    }


}
//