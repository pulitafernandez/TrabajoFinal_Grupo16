"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
class Jugador {
    constructor(nombre, creditos) {
        this.idJugador = 0;
        this.nombre = nombre;
        this.creditos = creditos;
    }
    // Getters y setters
    getIdJugador() {
        return this.idJugador;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
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
    setIdJugador(nuevoidJugador) {
        this.idJugador = nuevoidJugador;
    }
}
exports.Jugador = Jugador;
