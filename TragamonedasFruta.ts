import { MenuCasino } from "./MenuCasino";
import { Tragamonedas } from "./Tragamonedas";

export class TragamonedasFruta extends Tragamonedas {
    private carretes: string[][]; 
    private simbolos: string[]; 
    private apuesta : number;
      menu2 = new MenuCasino();

    constructor() {
    //constructor(nombre:string, apuestaMinima: number,  tematica:string) {
        super("TragamonedasClasico", "Frutas");
        this.simbolos = ["🍎", "🍊", "🍒", "🍇", "🍉"];  // Frutas representadas por emojis
        this.carretes = [
            [], [], [] // Tres carretes vacíos (un carrete por fila)
        ];
    }

    // Implementación de iniciarJuego para TragamonedasFrutas
    actualizarSaldo(): void{
        console.log(`Jugador ${this.menu2.getnombreMcasino()}`);
        console.log(`Tus Creditos son de:${this.menu2.getcreditosMcasino()}\n`);
      }
    
    public realizarApuesta() {
        this.actualizarSaldo();
        this.apuesta = 0;
        console.log(`---------------------------------------------------------------------- \n`);
        this.menu2.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 1000 y la maxima es de 10000): ', (apuesta) => {
          const apuestaNumero = parseInt(apuesta);
          if (apuestaNumero >= 1000 && apuestaNumero <= 10000 && this.menu2.getcreditosMcasino() >= apuestaNumero) {
           // if (this.menu5.getcreditosMcasino() >= apuestaNumero) {
              this.apuesta = apuestaNumero;
              this.menu2.setcreditosMcasino(this.menu2.getcreditosMcasino() - this.apuesta);
              console.log(`---------------------------------------------------------------------- \n`);
              console.log(`Su apuesta es de ${this.apuesta}`);
              console.log(`Tus Creditos son : ${this.menu2.getcreditosMcasino()}`);
              console.log(`---------------------------------------------------------------------- \n`);
             this.iniciarJuego();
            }
          else {
            console.log(`---------------------------------------------------------------------- \n`);
            console.log(`Su apuesta no esta entre los parametros requeridos`);
            this.apuesta = 0;
            this.menu2.menutragamonedasFrutas();
          }
        });
      }
    
    iniciarJuego(): void {
        this.actualizarSaldo();
        console.log("Girando los carretes de Tragamonedas Frutas...");
        // Llenar cada carrete con una combinación aleatoria de frutas
        for (let i = 0; i < this.carretes.length; i++) {
            this.carretes[i] = [];
            for (let j = 0; j < 3; j++) {  // Supongamos que cada carrete tiene 3 símbolos
            const simboloAleatorio = this.simbolos[Math.floor(Math.random() * this.simbolos.length)];
            this.carretes[i].push(simboloAleatorio);
            }
        }
        // Mostrar los resultados de los carretes
        this.mostrarResultado();
            // Evaluar si el jugador ha ganado
        const resultadoGanador = this.evaluarGanador();
        if (resultadoGanador) {
        console.log("¡Has ganado!");
        this.menu2.setcreditosMcasino(this.menu2.getcreditosMcasino() + (this.apuesta * 3));
        this.menu2.menutragamonedasFrutas();
        } else {
        console.log("No has ganado esta vez. ¡Sigue intentándolo!");
        this.menu2.menutragamonedasFrutas();
        }
    } 

    //implemento el metodo generarResultado
    mostrarResultado(): void {
        console.log("Resultado de los carretes:");
        for (let i = 0; i < this.carretes.length; i++) {
            console.log(this.carretes[i].join(" | "));
        }
    }

    // Evaluar si hay una combinación ganadora
    private evaluarGanador(): boolean {
        // Verificar si los tres carretes tienen la misma fruta en la misma posición
        for (let i = 0; i < this.carretes[0].length; i++) {
        const fruta = this.carretes[0][i]; // Tomamos el primer símbolo de la primera fila
        if (this.carretes.every(carrete => carrete[i] === fruta)) {
            return true;  // Si todos los carretes tienen la misma fruta en la misma posición, gana
        }
        }
        return false;  // Si no hay combinación ganadora
    }

}