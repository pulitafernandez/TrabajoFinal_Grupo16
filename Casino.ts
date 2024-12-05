
import { Juego } from './Juego';
import { Jugador } from './Jugador';
export class Casino {

    private idCasino: number;
    private juegos: Juego[];
    private jugadores: Jugador[];

   
    

    constructor(idCasino: number) {
        this.idCasino = idCasino;
        this.juegos = [];
        this.jugadores = []
    }
   

    public getIdCasino(): number {
        return this.idCasino;
    }

    
    public agregarJugador(jugador: Jugador): void {
        
        this.jugadores.push(jugador);
    }
    
    public getJugadores(): Jugador[] {
        return this.jugadores;
    }

    public setJugadores(jugadores: Jugador[]) {
        this.jugadores = jugadores;
    }
}