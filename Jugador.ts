export class Jugador {
    private idJugador: number = 0;
    private nombre: string;
    private creditos: number;
    private min = 0;
    private max = 1000;

    constructor(nombre: string, creditos: number) {
        this.nombre = nombre;
        this.creditos = creditos;
        this.idJugador = (Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }

    
    // Getters y setters
    getIdJugador(): number {
        return this.idJugador;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    cargarCreditos(monto: number): void {
        this.creditos += monto;
        console.log(`Su crédito actual es: $${this.creditos}`);
    }
  
    public setCreditos(nuevoCreditos: number): void {
        this.creditos = nuevoCreditos;
    }

    consultarCreditos(): number {
        return this.creditos;
    }

    setIdJugador(nuevoidJugador: number): void {
        this.idJugador = nuevoidJugador;
    }
}