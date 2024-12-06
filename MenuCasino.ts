//import * as readline from "readline-sync";
import * as readline from 'readline';
import { Jugador } from './Jugador';
import { Casino } from './Casino';
import { MenuBlackJack } from './MenuBj';
import { MenuTragamonedas } from './MenuTragamonedas';
import { CartaAlta } from './CartaAlta';
import * as fs from 'fs'

export class MenuCasino {
  private static instance: MenuCasino;
 
  private casino1: Casino;
  private jugador: Jugador;
   rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.casino1 = new Casino(1, "Casino Pepe");
    this.jugador = new Jugador("JugadorPorDefecto", 0); // Inicializar con un jugador por defecto
  }

  /*
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
*/

private static creditosMcasino:number;
private static nombreMcasino:string;

public getcreditosMcasino(): number {
    return MenuCasino.creditosMcasino;
}
public setcreditosMcasino(nuevocreditosMcasino: number): void {
  MenuCasino.creditosMcasino = nuevocreditosMcasino;
}

public getnombreMcasino(): string {
  return MenuCasino.nombreMcasino;
}
public setnombreMcasino(nuevonombreMcasino: string): void {
MenuCasino.nombreMcasino = nuevonombreMcasino;
}

  // Método estático para obtener la instancia única de MenuCasino
  public static getInstance(): MenuCasino {
    if (!MenuCasino.instance) {
      MenuCasino.instance = new MenuCasino();
    }
    return MenuCasino.instance;
  }



  // Función para mostrar el menú de login e ingresar nombre y créditos
  
  menuLogin(): void {
    console.log('*********************************');
    console.log('* Loguear como jugador*');
    console.log('*********************************' + '\n');
    console.log('1 - Ingresar usuario');
    console.log('2 - Salir');

    this.rl.question('Ingrese una opción: ', (opcion: string) => {
      switch (opcion) {
        case '1':
          // Solicitar el nombre del usuario
          this.rl.question('Cargar su nombre de usuario: ', (nombre: string) => {
            // Solicitar el saldo inicial
            this.rl.question('Cargar los créditos para jugar: $ ', (creditos: string) => {
              const jugador1 = new Jugador(nombre, parseInt(creditos));
              this.casino1.agregarJugador(jugador1);
              this.jugador = jugador1; // Reemplazar el jugador por defecto
              MenuCasino.nombreMcasino = nombre;
              MenuCasino.creditosMcasino = parseInt(creditos);

              console.log(`\nBienvenido, ¡${nombre}! Su saldo inicial es de ${creditos} créditos.`);
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
          this.menuLogin();
      }
    });

  }



  // Función que muestra el menú principal y maneja las opciones
  mostrarMenuPrincipal(): void {

    console.log('\n****************************************');
    console.log(`* Jugador: ${MenuCasino.nombreMcasino} - Creditos: ${MenuCasino.creditosMcasino } *`);
    console.log('*     Bienvenido al Casino Grupo 16    *');
    console.log('****************************************' + '\n');
    console.log('1 - Consultar Crédito');
    console.log('2 - Cargar Crédito');
    console.log('3 - Juegos');
    console.log('4 - Salir');

    this.rl.question('Ingrese una opción: ', (opcion: string) => {
      switch (opcion) {
        case '1':
          this.consultarSaldo();
          break;
        case '2':
          this.cargarCreditos();
          break;
        case '3':
          this.menuElejirJuegos();
          break;
        case '4':
          this.menuLogin();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.mostrarMenuPrincipal();
      }
    });
  }

  // Consultar el saldo de créditos
  private consultarSaldo(): void {
    this.jugador.setCreditos(MenuCasino.creditosMcasino);
    const creditos = this.jugador.consultarCreditos();
    if (creditos !== undefined) {
      console.log(`Su saldo es de $${creditos} créditos.`);
    }
    this.rl.question('Presione Enter para continuar...', () => {
      this.mostrarMenuPrincipal();
    });
  }

  // Cargar créditos al jugador
  private cargarCreditos(): void {
    this.rl.question('Ingrese el monto a cargar: $', (monto: string) => {
      const montoValido = parseInt(monto);
      if (isNaN(montoValido) || montoValido <= 0) {
        console.log('Error: Por favor ingrese un valor válido superior a 0');
        this.rl.question('Presione Enter para continuar...', () => {
          this.mostrarMenuPrincipal();
        });
      } else {
        this.jugador.cargarCreditos(montoValido);
        MenuCasino.creditosMcasino = this.jugador.consultarCreditos();
        console.log(`Se han cargado $${montoValido}. Su nuevo saldo es: $${this.jugador.consultarCreditos()}.`);
        this.rl.question('Presione Enter para continuar...', () => {
          this.mostrarMenuPrincipal();
        });
      }
    });
  }

  // Menú de juegos
  public menuElejirJuegos(): void {
    console.log(`****************************`);
    console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino }*`);
    console.log(`****************************`+ '\n');
    console.log('1- Tragamonedas');
    console.log('2- BlackJack');
    console.log('3- Carta Alta');
    console.log('4- Volver');
    console.log(`---------------------------------------------`+ '\n');
    this.rl.question('Seleccione una opción: ', (opcion: string) => {
      switch (opcion) {
        case '1':
          this.menutragamonedas();
          break;
        case '2':
          this.menuBlackJack124();
          break;
        case '3':
          this.menuCartaAlta();
          break;
        case '4':
          this.mostrarMenuPrincipal();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menuElejirJuegos();
      }
    });
  }

  // Funciones de juegos
  private menutragamonedas() {
    console.log(`****************************`);
    console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino }*`);
    console.log(`****************************`+ '\n');
    console.log('TRAGAMONEDAS');
    console.log('1- Frutas');
    console.log('2- Superheroes');
    console.log('3- Volver');
    console.log(`---------------------------------------------`+ '\n');
    this.rl.question('Seleccione una opción: ', (opcionTragamonedas: string) => {
      switch (opcionTragamonedas) {
        case '1':
          this.menutragamonedasFrutas();
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
    console.log(`****************************`);
    console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino }*`);
    console.log(`****************************`+ '\n');
    console.log('FRUTAS');
    console.log('1- Jugar');
    console.log('2- Reglas');
    console.log('3- Volver');
    console.log(`---------------------------------------------`+ '\n');
    this.rl.question('Seleccione una opción: ', (opcionFrutas: string) => {
      switch (opcionFrutas) {
        case '1':
          const menuTragamonedasSuper1 = new MenuTragamonedas();
          menuTragamonedasSuper1.menuTragamonedasFruta();
          break;
        case '2':
          this.mostrarReglasFrutas();
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

  mostrarReglasFrutas() {
    fs.readFile('./Reglas/Reglas-TragamonedasFrutas.txt', 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
            console.error('Error al leer las reglas:', err);
            return;
        }
        console.log('\n' + data);
        this.menutragamonedasFrutas();  // Regresa al menú de Tragamonedas Frutas después de mostrar las reglas
    });
}

  menuSuperheroe1() {
    console.log(`****************************`);
    console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino }*`);
    console.log(`****************************`+ '\n');
    console.log('SUPERHEROES');
    console.log('1- Jugar');
    console.log('2- Reglas');
    console.log('3- Volver');
    console.log(`---------------------------------------------`+ '\n');
    this.rl.question('Seleccione una opción: ', (opcionSuperheroes: string) => {
      switch (opcionSuperheroes) {
        case '1':
          const menuTragamonedasSuper2 = new MenuTragamonedas();
          menuTragamonedasSuper2.menuTragamonedasSuper();
          break;
        case '2':
          this.mostrarReglasSuperheroes();
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

  mostrarReglasSuperheroes() {
    fs.readFile('./Reglas/Reglas-TragamonedasSuperheroes.txt', 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
        if (err) {
            console.error('Error al leer las reglas:', err);
            return;
        }
        console.log('\n' + data);
        this.menuSuperheroe1();  // Regresa al menú de Tragamonedas Superhéroes después de mostrar las reglas
    });
}

  private menuBlackJack124() {
    console.log(`\n****************************`);
    console.log(`* Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino } *`);
    console.log(`****************************`+ '\n');
    console.log('BLACKJACK');
    console.log('1- Jugar');
    console.log('2- Reglas');
    console.log('3- Volver');
    console.log(`---------------------------------------------`+ '\n');
    this.rl.question('Seleccione una opción: ', (opcionBlackjack: string) => {
      switch (opcionBlackjack) {
        case '1':
          const juego1 = new MenuBlackJack();
          juego1.menu1();
          break;
        case '2':
          this.mostrarReglasBlackjack(); 
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

  // Método para mostrar las reglas del Blackjack desde un archivo
private mostrarReglasBlackjack() {
  const fs = require('fs');
  fs.readFile('./Reglas/Reglas-Blackjack.txt', 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
          console.error('Error al leer las reglas:', err);
          return;
      }
      console.log('\n' + data);
      this.menuBlackJack124();  // Regresa al menú de Blackjack después de mostrar las reglas
  });
}

  menuCartaAlta() {
    const apuestaMinima = 100;
    const cartaAlta = new CartaAlta(apuestaMinima, this.jugador);
    console.log(`\n*************************************`);
    console.log(`* Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino }  *`);
    console.log(`*************************************`+ '\n');
    console.log('*****************************');
    console.log('*        Carta Alta         *');
    console.log('*****************************');
    console.log('1 - Jugar');
    console.log('2 - Reglas');
    console.log('3 - Volver');
    console.log(`---------------------------------------------`+ '\n');
    this.rl.question('Seleccione una opción: ', (opcion: string) => {
      switch (opcion) {
        case '1':
          cartaAlta.iniciarJuego();
          break;
        case '2':
          this.mostrarReglas();
          break;
        case '3':
          this.menuElejirJuegos();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menuCartaAlta();
      }
    });
  }

  // Método para mostrar las reglas
  mostrarReglas(): void {
    fs.readFile('./Reglas/Reglas-CartaAlta.txt', 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {
      if (err) {
          console.error('Error al leer las reglas:', err);
          return;
      }
      console.log('\n' + data);
      this.menuCartaAlta();  // Regresa al menú después de mostrar las reglas
    });
}

}