export class Carta {
    private valor: string;
    private palo: string;
  
    constructor(valor: string, palo: string) {
      this.valor = valor;
      this.palo = palo;
    }
  
    getValor(): string {
      return this.valor;
    }
  
    getPalo(): string {
      return this.palo;
    }
  
    getValorNumerico(): number {
      switch (this.valor) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
          return parseInt(this.valor);
        case 'J':
        case 'Q':
        case 'K':
          return 10;
        case 'A':
          return 11; // por defecto, el AS vale 11
        default:
          throw new Error(`Valor de carta no reconocido: ${this.valor}`);
      }
    }
  
    static valoresCarta: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    static palos: string[] = ['Trebol', 'Pica', 'Diamante', 'Corazon'];
  
    static obtenerCartaAleatoria(): Carta {
      const valor = Carta.valoresCarta[Math.floor(Math.random() * Carta.valoresCarta.length)];
      const palo = Carta.palos[Math.floor(Math.random() * Carta.palos.length)];
      return new Carta(valor, palo);
    }
  }