//import { Jugador } from './Jugador';
import * as readline from 'readline';
import { BlackJack } from "./blackjack copy";
import { MenuBlackJack } from "./menuBj";

export class MenuCasino {
  constructor() { }

  //utilizar modulo readline de node para crear una interfaz de consola
  // const readline = require('readline');

  rl = readline.createInterface({
    //input y output son los canales de comunicación
    input: process.stdin,
    output: process.stdout
  });


  //mensaje de bienvenida y avance con enter (el enter es el callback)
   mensajeBienvenida() {
    // Falta dividir en metodos
    this.rl.question('Bienvenido al Casino Grupo 16, presione enter para continuar.\n', () => {
 });
  }

    mostrarMenuPrincipal() {

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
  


  menuElejirJuegos(){ 
    console.log('1- Tragamonedas');
    console.log('2- BlackJack');
    console.log('3- Volver');
    this.rl.question('Seleccione una opción: ', (opcion: string) => {
      switch (opcion) {
        case '1':
         this.menutragamonedas(); 
          break;
        case '2':
          this.MenuBlackJack124();
      break;
      case '3':
        this.mostrarMenuPrincipal();
    break;
      }
    });
  }


  menutragamonedas(){ 
    console.log('TRAGAMONEDAS');
    console.log('1- Frutas');
    console.log('2- Superheroes');
    this.rl.question('Seleccione una opción: ', (opcionTragamonedas: string) => {
      switch (opcionTragamonedas) {
        case '1':
          this.menutragamonedasFrutas()
        break;
        case '2':
        this.menuSuperheroe1();            
        break;
      }
    });
  }


  menutragamonedasFrutas(){ 
    console.log('FRUTAS');
    console.log('1- Jugar');
    console.log('2- Reglas');
    console.log('3- Salir');
    this.rl.question('Seleccione una opción: ', (opcionFrutas: string) => {
      switch (opcionFrutas) {
        case '1':
          // Jugar Frutas
          break;
        case '2':
          // Reglas Frutas
          break;
        case '3':
         // this.mostrarMenuPrincipal();
          break;
      }
    });
  }

  menuSuperheroe1(){
    console.log('SUPERHEROES');
    console.log('1- Jugar');
    console.log('2- Reglas');
    console.log('3- Salir');
    this.rl.question('Seleccione una opción: ', (opcionSuperheroes: string) => {
      switch (opcionSuperheroes) {
        case '1':
          // Jugar Superheroes
          break;
        case '2':
          // Reglas Superheroes
          break;
        case '3':
        this.mostrarMenuPrincipal();
        break;
      }
    });
  }


  MenuBlackJack124(){  
    console.log('BLACKJACK');
    console.log('1- Jugar');
    console.log('2- Reglas');
    console.log('3- Salir');
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
          //this.mostrarMenuPrincipal();
          break;
      }  
    });
  }
}








