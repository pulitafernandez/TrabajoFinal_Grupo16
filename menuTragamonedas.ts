import { Apuesta } from "./Apuesta";
import { Apostable } from "./InterfaceApuesta";
import { Juego } from "./Juego";
import * as readline from 'readline';
import { TragamonedasAvanzado } from "./TragamonedasAvanzado";
import { MenuCasino } from "./MenuCasino";
import { TragamonedasFruta } from "./TragamonedasFruta";

export class MenuTragamonedas  {
    
   super1 = new TragamonedasAvanzado(1000);
   Fruta1 = new TragamonedasFruta(1000);
   menuCasino1 = new MenuCasino();
constructor() {}
   
rl = readline.createInterface({
    //input y output son los canales de comunicación
    input: process.stdin,
    output: process.stdout
  });

menuTragamonedasSuper(){
    console.log('*********************');
    console.log('* Tragamonedas Super*');
    console.log('*********************' + '\n');
        console.log('1- Tirar');
        console.log('2- Ingresar más Creditos');
        console.log('3- Cobrar');
        console.log('4- Volver');
        this.rl.question('Seleccione una opción: ', (opcion: string) => {
          switch (opcion) {
            case '1':
              this.super1.iniciarJuego();
              this.menuTragamonedasSuper()
              break;
            case '2':
              //funcion agregar creditos();
              break;
              case '3':
              //funcion de cobro();
              break;
            case '4':
                this.menuCasino1.menuElejirJuegos();
              break;
            default:
              console.log('Opción inválida. Por favor, intente de nuevo.');
              this.menuCasino1.menuElejirJuegos();
          }
        });
      }

      menuTragamonedasFruta(){
    console.log('***********************');
    console.log('* Tragamonedas Frutas *');
    console.log('***********************' + '\n');
        console.log('1- Tirar');
        console.log('2- Ingresar más Creditos');
        console.log('3- Cobrar');
        console.log('4- Volver');
        this.rl.question('Seleccione una opción: ', (opcion: string) => {
          switch (opcion) {
            case '1':
              this.Fruta1.iniciarJuego();
              this.menuTragamonedasFruta();
              break;
            case '2':
              //funcion agregar creditos();
              break;
              case '3':
              //funcion de cobro();
              break;
            case '4':
              this.menuCasino1.menuElejirJuegos();
              break;
            default:
              console.log('Opción inválida. Por favor, intente de nuevo.');
              this.menuCasino1.menuElejirJuegos();
          }
        });
      }

}   
