import { Carta } from "./Carta";
import { Juego } from "./Juego";

export class BlackJack extends Juego {

  private jugador: Carta[];
  private banca: Carta[];

  constructor() {
    super("BlackJack");
    this.jugador = []
    this.banca = []
  }

  public limpiarArrays(): void {
    this.jugador.splice(0);
    this.banca.splice(0);
  }

  public mostrarCartaJug(): void  {
    console.log(this.jugador.map((carta1) => `Carta: ${carta1.getValor()} ${carta1.getPalo()}`).join('\n'));
  }

  public mostarCartaBanca(): void {
    console.log(this.banca.map((carta1) => `Carta: ${carta1.getValor()} ${carta1.getPalo()}`).join('\n'));
  }

  public obtenerSumaJugador(): number {
    let suma = 0;
    for (const carta of this.jugador) {
      suma += carta.getValorNumerico();
    }
    return suma;
  }

  public obtenerSumaBanca(): number {
    let suma = 0;
    for (const carta of this.banca) {
      suma += carta.getValorNumerico();
    }
    return suma;
  }

  public pedirCartaJugador(): void {
    this.jugador.push(Carta.obtenerCartaAleatoria());
  }

  public pedirCartaBanca(): void {
    this.banca.push(Carta.obtenerCartaAleatoria());
  }
}