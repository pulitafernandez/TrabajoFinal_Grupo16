//import * as readline from "readline-sync";
import * as readline from 'readline';
import { Jugador } from './Jugador';
import { Casino } from './Casino';
import { MenuBlackJack } from './MenuBj';
import { CartaAlta } from './CartaAlta';
import * as fs from 'fs'
import { TragamonedasFruta } from './TragamonedasFruta';
import { TragamonedasAvanzado } from './TragamonedasAvanzado';

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
              this.mostrarMenuPrincipal(jugador1);
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
  mostrarMenuPrincipal(jugador1:Jugador): void {

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
          this.consultarSaldo(jugador1);
          break;
        case '2':
          this.cargarCreditos(jugador1);
          break;
        case '3':
          this.menuElejirJuegos(jugador1);
          break;
        case '4':
          this.menuLogin();
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.mostrarMenuPrincipal(jugador1);
      }
    });
  }

  // Consultar el saldo de créditos
public consultarSaldo(jugador1:Jugador): void {
  jugador1.setCreditos(MenuCasino.creditosMcasino);
  const creditos = jugador1.consultarCreditos();
  if (creditos !== undefined) {
    console.log(`Su saldo es de $${creditos} créditos.`);
    }
  this.mostrarMenuPrincipal(jugador1); // Volver directamente al menú principal
}

  // Cargar créditos al jugador
public cargarCreditos(jugador1:Jugador): void {
  this.rl.question('Ingrese el monto a cargar: $', (monto: string) => {
    const montoValido = parseInt(monto);
    if (isNaN(montoValido) || montoValido <= 0) {
      console.log('Error: Por favor ingrese un valor válido superior a 0');
      this.mostrarMenuPrincipal(jugador1); // Volver al menú principal automáticamente
    } else {
      jugador1.cargarCreditos(montoValido);
      MenuCasino.creditosMcasino = jugador1.consultarCreditos();
      console.log(`Se han cargado $${montoValido}. Su nuevo saldo es: $${jugador1.consultarCreditos()}.`);
      this.mostrarMenuPrincipal(jugador1); // Volver al menú principal automáticamente
    }
  });
}

  // Menú de juegos
  public menuElejirJuegos(jugador1:Jugador): void {
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
          this.menutragamonedas(jugador1);
          break;
        case '2':
          this.menuBlackJack124();
          break;
        case '3':
          this.menuCartaAlta(jugador1);
          break;
        case '4':
          this.mostrarMenuPrincipal(jugador1);
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menuElejirJuegos(jugador1);
      }
    });
  }

  // Funciones de juegos
  private menutragamonedas(jugador1:Jugador) {
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
          this.menutragamonedasFrutas(jugador1);
          break;
        case '2':
          this.menuSuperheroe1(jugador1);
          break;
        case '3':
          this.menuElejirJuegos(jugador1);
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menutragamonedas(jugador1);
      }
    });
  }

  menutragamonedasFrutas(jugador1:Jugador) {
    console.log(`****************************`);
    console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino }*`);
    console.log(`****************************`+ '\n');
    console.log('FRUTAS');
    console.log('1- Jugar');
    console.log('2- Ingresar más Creditos')
    console.log('3- Reglas');
    console.log('4- Volver');
    console.log(`---------------------------------------------`+ '\n');
    this.rl.question('Seleccione una opción: ', (opcionFrutas: string) => {
      switch (opcionFrutas) {
        case '1':
          this.rl.question('Ingrese la apuesta deseada: ', (apuestaMinima: string) => {
          const tragamonedaFruta1 = new TragamonedasFruta (Number(apuestaMinima));
          tragamonedaFruta1.iniciarJuego(jugador1,Number(apuestaMinima));
          this.menutragamonedasFrutas(jugador1);
        });
        break;
        case '2':
          this.rl.question('Ingrese el monto a cargar: $ ', (monto: string) => {
            const montoReal:number= Number(monto);
            jugador1.cargarCreditos(montoReal);
            this.menutragamonedasFrutas(jugador1);
          });
          break;
        case '3':
          this.mostrarReglasFrutas();
          break;
        case '4':
          this.menutragamonedas(jugador1);
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menutragamonedasFrutas(jugador1);
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
        this.menutragamonedasFrutas(this.jugador);  // Regresa al menú de Tragamonedas Frutas después de mostrar las reglas
    });
}

  menuSuperheroe1(jugador1:Jugador) {
    console.log(`****************************`);
    console.log(`*Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino }*`);
    console.log(`****************************`+ '\n');
    console.log('SUPERHEROES');
    console.log('1- Jugar');
    console.log('2- Ingresar más Creditos')
    console.log('3- Reglas');
    console.log('4- Volver');
    console.log(`---------------------------------------------`+ '\n');
    this.rl.question('Seleccione una opción: ', (opcionSuperheroes: string) => {
      switch (opcionSuperheroes) {
        case '1':
          this.rl.question('Ingrese la apuesta deseada: ', (apuestaMinima: string) => {
          const TragamonedasAvanzado1 = new TragamonedasAvanzado (Number(apuestaMinima));
          TragamonedasAvanzado1.iniciarJuego(jugador1,Number(apuestaMinima));
          this.menuSuperheroe1(jugador1);
        });
        break;
        case '2':
          this.rl.question('Ingrese el monto a cargar: $ ', (monto: string) => {
            const montoReal:number= Number(monto);
            jugador1.cargarCreditos(montoReal);
            this.menuSuperheroe1(jugador1);
          });
          break;
        case '3':
          this.mostrarReglasSuperheroes();
          break;
        case '4':
          this.menutragamonedas(jugador1);
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menuSuperheroe1(jugador1);
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
        this.menuSuperheroe1(this.jugador);  // Regresa al menú de Tragamonedas Superhéroes después de mostrar las reglas
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
          this.menuElejirJuegos(this.jugador);
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

  menuCartaAlta(jugador1:Jugador) {
    const apuestaMinima = 100;
    const cartaAlta = new CartaAlta(apuestaMinima, this.jugador);
    console.log(`\n*************************************`);
    console.log(`* Jugador: ${MenuCasino.nombreMcasino} Creditos: ${MenuCasino.creditosMcasino }  *`);
    console.log(`*************************************`+ '\n');
    console.log('*****************************');
    console.log('*        Carta Alta         *');
    console.log('*****************************');
    console.log('1 - Jugar');
    console.log('2 - Ingresar más Creditos')
    console.log('3 - Reglas');
    console.log('4 - Volver');
    console.log(`---------------------------------------------`+ '\n');
    this.rl.question('Seleccione una opción: ', (opcion: string) => {
      switch (opcion) {
        case '1':
          cartaAlta.iniciarJuego(jugador1);
          break;
          case '2':
          this.rl.question('Ingrese el monto a cargar: $ ', (monto: string) => {
            const montoReal:number= Number(monto);
            jugador1.cargarCreditos(montoReal);
            this.menuCartaAlta(jugador1);
          });
          break;
        case '3':
          this.mostrarReglas();
          break;
        case '4':
          this.menuElejirJuegos(this.jugador);
          break;
        default:
          console.log('Opción inválida. Por favor, intente de nuevo.');
          this.menuCartaAlta(jugador1);
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
      this.menuCartaAlta(this.jugador);  // Regresa al menú después de mostrar las reglas
    });
}
}