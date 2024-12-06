import { Carta } from "./Carta";
import { Apostable } from "./InterfaceApuesta";
import { Juego } from "./Juego";
import { Jugador } from "./Jugador";
import { MenuCasino } from './MenuCasino';

export class CartaAlta extends Juego implements Apostable {
    private jugador: Jugador;
    private cartaActual: Carta;

    private apuesta1!: number;


    constructor(jugador: Jugador) {
        super("CartaAlta");
        this.jugador = jugador;
        this.cartaActual;
    }
    
    menu4 = new MenuCasino();
    public menu1() {
        console.log(`---------------------------------------------------------------------- \n`);
        this.actualizarSaldo();
        console.log(`=========================== \n`);
        console.log(`= Bienvenido A Carta Alta =\n`);
        console.log(`=========================== \n`);
        console.log(`1. Cargar Creditos\n`);
        console.log(`2. Iniciar Partida\n`);
        console.log(`3. Salir\n`);
        console.log(`---------------------------------------------------------------------- \n`);
        this.menu4.rl.question('Ingrese su opción: ', (opcion1) => {
            switch (opcion1) {
                case '1':
                    this.cargarCredito();
                    break;
                case '2':
                    this.realizarApuesta()
                    break;
                case '3':
                    this.menu4.menuElejirJuegos();
                    break;
                default:
                    console.log('Opción inválida');
                    this.menu1();
            }
        });
    }

    public realizarApuesta() {
        this.apuesta1 = 0;
        console.log(`---------------------------------------------------------------------- \n`);
        this.menu4.rl.question('Ingrese Su apuesta (Recuerde la apuesta minima es de 1000 y la maxima es de 10000): ', (apuesta) => {
            const apuestaNumero = parseInt(apuesta);
            if (apuestaNumero >= 1000 && apuestaNumero <= 10000 && this.menu4.getcreditosMcasino() >= apuestaNumero) {
                if (this.menu4.getcreditosMcasino() >= apuestaNumero) {
                    this.apuesta1 = apuestaNumero;
                    this.menu4.setcreditosMcasino(this.menu4.getcreditosMcasino() - this.apuesta1);
                    console.log(`---------------------------------------------------------------------- \n`);
                    console.log(`Su apuesta es de ${this.apuesta1}`);
                    console.log(`Tus Creditos son : ${this.menu4.getcreditosMcasino()}`);
                    console.log(`---------------------------------------------------------------------- \n`);
                    this.iniciarJuego();
                }
            }
            else {
                console.log(`---------------------------------------------------------------------- \n`);
                console.log(`Su apuesta no esta entre los parametros requeridos`);
                this.apuesta1 = 0;
                this.menu1();
            }
        });
    }
    // Inicia el juego validando si el jugador tiene créditos suficientes
    public iniciarJuego(): void {
        this.cartaActual = Carta.obtenerCartaAleatoria();
        console.log(`CARTA INICIAL: ${this.cartaActual.getNombre()}`);
        this.jugarCartaAlta();
    }

    // Ciclo principal del juego
    public jugarCartaAlta(): void {
        console.log('Elige: 1 - Mayor, 2 - Menor');
        this.menu4.rl.question('¿Qué eliges?: ', (opcion: string) => {
            const apuesta = opcion === '1' ? 'mayor' : 'menor';
            // Ejecuta la lógica de la siguiente carta
            const resultado = this.siguienteCartaJugador(apuesta);

            if (resultado) {
                console.log('¡Continúas jugando!\n');
                this.jugarCartaAlta(); // Continúa el ciclo si gana
            } else {
                this.menu1(); // Vuelve al menú si pierde
            }
        });
    }

    // Lógica para manejar la elección del jugador y verificar el resultado
    public siguienteCartaJugador(apuesta: 'mayor' | 'menor'): boolean {
        const nuevaCarta = Carta.obtenerCartaAleatoria();
        console.log(`Nueva carta: ${nuevaCarta.getNombre()}`);
        const esMayor = nuevaCarta.getValorNumerico() > this.cartaActual.getValorNumerico();
        if ((apuesta === 'mayor' && esMayor) || (apuesta === 'menor' && !esMayor)) {
            console.log("¡Ganaste!");
            this.menu4.setcreditosMcasino(this.menu4.getcreditosMcasino() + (this.apuesta1 * 2)); // Gana el doble de la apuesta mínima
            this.cartaActual = nuevaCarta; // Actualiza la carta actual
            // Mostrar solo después de la jugada
            this.actualizarSaldo();
            return true;
        } else {
            this.actualizarSaldo();
            return false;
        }
    }

    //Actualiza el saldo del jugador
    public actualizarSaldo(): void {
        console.log(`Jugador ${this.menu4.getnombreMcasino()}`);
        console.log(`Tus Creditos son de:${this.menu4.getcreditosMcasino()}\n`);
    }

    // Cargar créditos al jugador
    public cargarCredito(): void {
        this.menu4.rl.question('Ingrese el monto a cargar: $', (monto: string) => {
            const montoValido = parseInt(monto);
            if (isNaN(montoValido) || montoValido <= 0) {
                console.log('Error: Por favor ingrese un valor válido superior a 0');
                this.menu4.rl.question('Presione Enter para continuar...', () => {
                    this.menu1();
                });
            } else {
                this.jugador.cargarCreditos(montoValido);
                this.menu4.setcreditosMcasino(this.menu4.getcreditosMcasino() + montoValido);
                console.log(`Se han cargado $${montoValido}. Su nuevo saldo es: $${this.menu4.getcreditosMcasino()}.`);
                this.menu4.rl.question('Presione Enter para continuar...', () => {
                    this.menu1();
                });
            }
        });
    }

    mostrarResultado(): void { }
    cobrarPremio(): void { }
}