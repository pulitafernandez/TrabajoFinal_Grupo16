import { Jugador } from './Jugador';
import * as readline from 'readline';
import { BlackJack } from "./blackjack copy";
import { MenuBlackJack } from "./menuBj";
import { MenuTragamonedas} from "./menuTragamonedas";
import { Casino} from './Casino';
export class MenuCasino {

  constructor() { }
 
  //utilizar modulo readline de node para crear una interfaz de consola
  // const readline = require('readline');

  rl = readline.createInterface({
    //input y output son los canales de comunicación
    input: process.stdin,
    output: process.stdout
  });

  private casino1 = new Casino(1);
  private indexAuxJug:number;
  private nomJugadorAux:string;

 

  menuLogin() {
    console.log('*******************');
    console.log('* Ingrese jugador *');
    console.log('*******************' + '\n');
    console.log('1 - Ingresar Usuario');
    console.log('2 - Salir');

    //pide una opcion al usuario, y la ejecuta en el switch 
    // la llamada a metodo estan desactivadas para probar comportamiento sin depender de las clases
    this.rl.question('Ingrese una opción: ', (opcion: string) => {
      switch (opcion) {
        case '1':
          this.rl.question('Ingrese Nombre Jugador: '+ '\n', (nombreJug) => {
            this.rl.question('Ingrese Creditos: ', (creditosJug) => {
              this.nomJugadorAux = nombreJug;
              const jugador1 = new Jugador(nombreJug, parseInt(creditosJug));
              this.casino1.agregarJugador(jugador1);
              this.elegirJugador(this.nomJugadorAux);
              this.mostrarMenuPrincipal();
            });
          });                 
          break;
        case '2':
          console.log('Gracias por visitar Casino Grupo 16');
          this.rl.close();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.mostrarMenuPrincipal();
      }
    });
  }
   
  public elegirJugador(nombreJugador:string) {
    let jugador33  = nombreJugador;
    const jugador2: Jugador[] = this.casino1.getJugadores();
    const index1 = jugador2.findIndex((jug) => jug.getNombre().toLowerCase() === jugador33.toLowerCase());
      if (index1 !== -1) {
        this.indexAuxJug = index1;
        console.log(`Jugador seleccionado: ${jugador2[this.indexAuxJug].getNombre()}`+ '\n');
        this.mostrarMenuPrincipal();
      } else {
        console.log("Jugador no encontrado");
        this. menuLogin();
      }
  }

  mostrarMenuPrincipal() {
   const casino2: Jugador[] = this.casino1.getJugadores();
   
    console.log(`Esta Jugando: ${casino2[this.indexAuxJug].getNombre()}`);
   
    console.log('*********************************');
    console.log('* Bienvenido al Casino Grupo 16 *');
    console.log('*********************************' + '\n');
    console.log('1 - Consultar Credito');
    console.log('2 - Cargar Credito');
    console.log('3 - Juegos');
    console.log('4 - Salir');

    //pide una opcion al usuario, y la ejecuta en el switch 
    // la llamada a metodo estan desactivadas para probar comportamiento sin depender de las clases
    this.rl.question('Ingrese una opción: ', (opcion: string) => {
      switch (opcion) {
        case '1':
          /*const jugador = new Jugador(); //instacia de la clase jugador
          const creditos = jugador.consultarCreditos(); //ejecutar el método para consultar
          console.log(`Su saldo es de ${creditos} créditos.`)*/
          console.log('Su saldo es de $... créditos.');
          this.rl.question('Presione Enter para continuar...', () => {
            this.mostrarMenuPrincipal();
          });
          break;
        case '2':
          console.log('Ingrese el monto a cargar: $...');
          /* this.rl.question('Ingrese el monto a cargar: ', (monto) => {
      const montoValido = parseInt(monto);
      if (isNaN(montoValido) || montoValido <= 0) {
        console.log('Error: Por favor ingrese un valor válido superior a 0');
        return pedirMonto(jugador); // <--- Aquí se utiliza un return para volver a ejecutar la función
      } else {
        jugador.cargarCreditos(montoValido); */
          this.rl.question('Presione Enter para continuar...', () => {
            this.mostrarMenuPrincipal();
          });
          break;
        //MENU DE JUEGOS
        case '3':
          this.menuElejirJuegos();
          break;
        case '4':
          console.log('Gracias por visitar Casino Grupo 16');
          this.rl.close();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.mostrarMenuPrincipal();
      }
    });
  }

  menuElejirJuegos() {
    console.log('1- Tragamonedas');
    console.log('2- BlackJack');
    console.log('3- Volver');
    this.rl.question('Seleccione una opción: ', (opcion: string) => {
      switch (opcion) {
        case '1':
          this.menutragamonedas();
          break;
        case '2':
          this.menuBlackJack124();
          break;
        case '3':
          this.mostrarMenuPrincipal();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menuElejirJuegos();
      }
    });
  }

  menutragamonedas() {
    console.log('TRAGAMONEDAS');
    console.log('1- Frutas');
    console.log('2- Superheroes');
    console.log('3- Volver');
    this.rl.question('Seleccione una opción: ', (opcionTragamonedas: string) => {
      switch (opcionTragamonedas) {
        case '1':
          this.menutragamonedasFrutas()
          break;
        case '2':
          this.menuSuperheroe1();
          break;
        case '3':
          this.menuElejirJuegos();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menutragamonedas();
      }
    });
  }


  menutragamonedasFrutas() {
    console.log('FRUTAS');
    console.log('1- Jugar');
    console.log('2- Reglas');
    console.log('3- Volver');
    this.rl.question('Seleccione una opción: ', (opcionFrutas: string) => {
      switch (opcionFrutas) {
        case '1':
          const menuTragamonedasSuper1 = new MenuTragamonedas();
          menuTragamonedasSuper1.menuTragamonedasFruta();
          break;
        case '2':
          // Reglas Frutas
          break;
        case '3':
          this.menutragamonedas();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menutragamonedasFrutas();
      }
    });
  }

  menuSuperheroe1() {
    console.log('SUPERHEROES');
    console.log('1- Jugar');
    console.log('2- Reglas');
    console.log('3- Volver');
    this.rl.question('Seleccione una opción: ', (opcionSuperheroes: string) => {
      switch (opcionSuperheroes) {
        case '1':
          const menuTragamonedasSuper2 = new MenuTragamonedas();
          menuTragamonedasSuper2.menuTragamonedasSuper();
          break;
        case '2':
          // Reglas Superheroes
          break;
        case '3':
          this.menutragamonedas();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menuSuperheroe1();
      }
    });
  }

  menuBlackJack124() {
    console.log('BLACKJACK');
    console.log('1- Jugar');
    console.log('2- Reglas');
    console.log('3- Volver');
    this.rl.question('Seleccione una opción: ', (opcionBlackjack: string) => {
      switch (opcionBlackjack) {
        case '1':
          // Jugar Blackjack
          console.log("caso 1")
          const juego1 = new MenuBlackJack();
          juego1.menuPrin();
          break;
        case '2':
          // Reglas Blackjack
          break;
        case '3':
          this.menuElejirJuegos();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menuBlackJack124();
      }
    });
  }



}