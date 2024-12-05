
import { Apuesta } from "./apuesta copy";
import { Carta } from "./carta copy";
import { Jugador } from "./Jugador";

export class BlackJack {
 
  private jugadorCarta: Carta[];
  private bancaCarta: Carta[];
 

  constructor() {
    
    this.jugadorCarta = [];
    this.bancaCarta = [];
  }

  limpiarArrays(): void {
    this.jugadorCarta.splice(0);
    this.bancaCarta.splice(0);
  }


  public mostrarCartaJug() {
    console.log(this.jugadorCarta.map((carta1) => `Carta: ${carta1.getValor()} ${carta1.getPalo()}`).join('\n'));
  }

  public mostarCartaBanca() {
    console.log(this.bancaCarta.map((carta1) => `Carta: ${carta1.getValor()} ${carta1.getPalo()}`).join('\n'));
  }

  obtenerSumaJugador(): number {
    let suma = 0;
    for (const carta of this.jugadorCarta) {
      suma += carta.getValorNumerico();
    }
    return suma;
  }

  obtenerSumaBanca(): number {
    let suma = 0;
    for (const carta of this.bancaCarta) {
      suma += carta.getValorNumerico();
    }
    return suma;
  }

  pedirCartaJugador() {
    this.jugadorCarta.push(Carta.obtenerCartaAleatoria());
  }

  pedirCartaBanca() {
    this.bancaCarta.push(Carta.obtenerCartaAleatoria());
  }

}