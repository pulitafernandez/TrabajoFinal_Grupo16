import { Apuesta } from "./Apuesta";
import { Carta } from "./Carta";
import { Juego } from "./Juego";

export class BlackJack extends Juego {

  private jugador: Carta[];
  private banca: Carta[];

  constructor(apuestaMinima: number) {
    super("BlackJack", apuestaMinima)

    this.jugador = [];
    this.banca = [];
  }


  iniciarJuego() {
    this.jugador.push(Carta.obtenerCartaAleatoria());
    this.jugador.push(Carta.obtenerCartaAleatoria());
    this.banca.push(Carta.obtenerCartaAleatoria());
    this.banca.push(Carta.obtenerCartaAleatoria());
  }

  obtenerSumaJugador(): number {
    let suma = 0;
    for (const carta of this.jugador) {
      suma += carta.getValorNumerico();
    }
    return suma;
  }

  obtenerSumaBanca(): number {
    let suma = 0;
    for (const carta of this.banca) {
      suma += carta.getValorNumerico();
    }
    return suma;
  }

  pedirCartaJugador() {
    this.jugador.push(Carta.obtenerCartaAleatoria());
  }

  pedirCartaBanca() {
    this.banca.push(Carta.obtenerCartaAleatoria());
  }

  jugar() {
    this.iniciarJuego();
    while (this.obtenerSumaJugador() < 21) {
      console.log(`Suma jugador: ${this.obtenerSumaJugador()}`);
      console.log(`¿Desea pedir otra carta?`);
      const respuesta = prompt('S/N');
      if (respuesta != null && respuesta.toUpperCase() === 'S') {
        this.pedirCartaJugador();
      } else {
        break;
      }
    }
    while (this.obtenerSumaBanca() < this.obtenerSumaJugador()) {
      this.pedirCartaBanca();
    }
    console.log(`Suma jugador: ${this.obtenerSumaJugador()}`);
    console.log(`Suma banca: ${this.obtenerSumaBanca()}`);
    if (this.obtenerSumaJugador() > 21) {
      console.log('Jugador se pasó, banca gana');
    } else if (this.obtenerSumaBanca() > 21) {
      console.log('Banca se pasó, jugador gana');
    } else if (this.obtenerSumaJugador() > this.obtenerSumaBanca()) {
      console.log('Jugador gana');
    } else if (this.obtenerSumaBanca() > this.obtenerSumaJugador()) {
      console.log('Banca gana');
    } else {
      console.log('Empate');
    }
  }
}