import { Jugador } from "./Jugador";
import { Apuesta } from "./Apuesta";
import { Carta } from "./Carta";
import { Apostable } from "./InterfaceApuesta";
import { Juego } from "./Juego";

export class BlackJack extends Juego implements Apostable {

  private jugador: Carta[];
  private banca: Carta[];



  constructor(apuestaMinima: number, jugador: Jugador) {
    super("BlackJack");

    this.jugador = []
    this.banca = []
  }

  limpiarArrays(): void {
    this.jugador.splice(0);
    this.banca.splice(0);
  }


  public mostrarCartaJug() {
    console.log(this.jugador.map((carta1) => `Carta: ${carta1.getValor()} ${carta1.getPalo()}`).join('\n'));
  }

  public mostarCartaBanca() {
    console.log(this.banca.map((carta1) => `Carta: ${carta1.getValor()} ${carta1.getPalo()}`).join('\n'));
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

  mostrarResultado(): void { }



  cargarCredito(): void { }


  actualizarSaldo(): void { }


  cobrarPremio(): void { }


  realizarApuesta(): void { }
}