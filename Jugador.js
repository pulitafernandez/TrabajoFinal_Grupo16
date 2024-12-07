"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
class Jugador {
    constructor(nombre, creditos) {
        this.idJugador = 0;
        this.min = 0;
        this.max = 1000;
        this.nombre = nombre;
        this.creditos = creditos;
        this.idJugador = (Math.floor(Math.random() * (this.max - this.min + 1)) + this.min);
    }
    // Manejo Creditos
    cargarCreditos(monto) {
        this.creditos += monto;
        console.log(`Su crédito actual es: $${this.creditos}`);
    }
    setCreditos(nuevoCreditos) {
        this.creditos = nuevoCreditos;
    }
    consultarCreditos() {
        return this.creditos;
    }
    //Getters y setters
    getNombre() {
        return this.nombre;
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    getIdJugador() {
        return this.idJugador;
    }
    setIdJugador(nuevoidJugador) {
        this.idJugador = nuevoidJugador;
    }
}
exports.Jugador = Jugador;
