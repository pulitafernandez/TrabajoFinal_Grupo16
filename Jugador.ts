export class Jugador {
    private id: number;
    private nombre: string;
    private creditos: number;
    private min = 0;
    private max = 1000;

    contructor(id: number, nombre: string, creditos: number) {
        this.id = id;
        this.nombre = nombre;
        this.creditos = creditos;

    }
    //getters y setters

    cargarCreditos(monto: number): void {
        this.creditos = this.creditos + monto;
        return console.log(`Su credito actual es,${this.creditos}`);
    }
    consultarCreditos(): number {
        return this.creditos;
    }
    setIdJugador() {
        (Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }


}
//