import { Juego } from './Juego';
import { Jugador } from './Jugador';
export class Casino {
    private idCasino: number;
    private nombre: string;
    private juegos: Juego[];
    private jugadores: Jugador[];


    constructor(idCasino: number, nombre: string) {
        this.idCasino = idCasino;
        this.nombre = nombre;
        this.juegos = [];
        this.jugadores = []

    }
    public getNombre(): string {
        return this.nombre;
    }
    public getIdCasino(): number {
        return this.idCasino;
    }
    public agregarJuego(juego: Juego): void {
        this.juegos.push(juego);
    }

    public agregarJugador(jugador: Jugador): void {
        this.jugadores.push(jugador);
    }

    public iniciarJuego(juego: Juego) {

    }

    // public asignarIdJugador(jugadorAsig: Jugador) {
    //     const indiceDuplicado = this.jugador.findIndex((jug) => jug.getIdJugador() === jugadorAsig.getIdVeterinaria());
    //     if (indiceDuplicado !== -1) {
    //         let nuevoId = 1;
    //         while (this.jugador.some((jug) => jug.getIdJugador() === nuevoId)) {
    //             nuevoId++;
    //         }
    //         jugadorAsig.setIdJugador(nuevoId);
    //     }
    // }
}