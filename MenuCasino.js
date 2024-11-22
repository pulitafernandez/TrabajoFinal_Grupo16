"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menuBj_1 = require("./menuBj");
//utilizar modulo readline de node para crear una interfaz de consola
var readline = require('readline');
var rl = readline.createInterface({
    //input y output son los canales de comunicación
    input: process.stdin,
    output: process.stdout
});
//mensaje de bienvenida y avance con enter (el enter es el callback)
rl.question('Bienvenido al Casino Grupo 16, presione enter para continuar.\n', function () {
    mostrarMenuPrincipal();
});
function mostrarMenuPrincipal() {
    var _this = this;
    console.log('1 - Consultar Credito');
    console.log('2 - Cargar Credito');
    console.log('3 - Juegos');
    console.log('4 - Salir');
    //pide una opcion al usuario, y la ejecuta en el switch 
    // la llamada a metodo estan desactivadas para probar comportamiento sin depender de las clases
    rl.question('Ingrese una opción: ', function (opcion) {
        switch (opcion) {
            case '1':
                /*const jugador = new Jugador(); //instacia de la clase jugador
                const creditos = jugador.consultarCreditos(); //ejecutar el método para consultar
                console.log(`Su saldo es de ${creditos} créditos.`)*/
                console.log('Su saldo es de $... créditos.');
                rl.question('Presione Enter para continuar...', function () {
                    _this.mostrarMenuPrincipal();
                });
                break;
            case '2':
                console.log('Ingrese el monto a cargar: $...');
                /* rl.question('Ingrese el monto a cargar: ', (monto) => {
            const montoValido = parseInt(monto);
            if (isNaN(montoValido) || montoValido <= 0) {
              console.log('Error: Por favor ingrese un valor válido superior a 0');
              return pedirMonto(jugador); // <--- Aquí se utiliza un return para volver a ejecutar la función
            } else {
              jugador.cargarCreditos(montoValido); */
                rl.question('Presione Enter para continuar...', function () {
                    _this.mostrarMenuPrincipal();
                });
                break;
            //MENU DE JUEGOS
            case '3':
                console.log('1- Tragamonedas');
                console.log('2- BlackJack');
                rl.question('Seleccione una opción: ', function (opcion) {
                    switch (opcion) {
                        case '1':
                            console.log('TRAGAMONEDAS');
                            console.log('1- Frutas');
                            console.log('2- Superheroes');
                            rl.question('Seleccione una opción: ', function (opcionTragamonedas) {
                                switch (opcionTragamonedas) {
                                    case '1':
                                        console.log('FRUTAS');
                                        console.log('1- Jugar');
                                        console.log('2- Reglas');
                                        console.log('3- Salir');
                                        rl.question('Seleccione una opción: ', function (opcionFrutas) {
                                            switch (opcionFrutas) {
                                                case '1':
                                                    // Jugar Frutas
                                                    break;
                                                case '2':
                                                    // Reglas Frutas
                                                    break;
                                                case '3':
                                                    _this.mostrarMenuPrincipal();
                                                    break;
                                            }
                                        });
                                        break;
                                    case '2':
                                        console.log('SUPERHEROES');
                                        console.log('1- Jugar');
                                        console.log('2- Reglas');
                                        console.log('3- Salir');
                                        rl.question('Seleccione una opción: ', function (opcionSuperheroes) {
                                            switch (opcionSuperheroes) {
                                                case '1':
                                                    // Jugar Superheroes
                                                    break;
                                                case '2':
                                                    // Reglas Superheroes
                                                    break;
                                                case '3':
                                                    _this.mostrarMenuPrincipal();
                                                    break;
                                            }
                                        });
                                        break;
                                }
                            });
                            break;
                        case '2':
                            console.log('BLACKJACK');
                            console.log('1- Jugar');
                            console.log('2- Reglas');
                            console.log('3- Salir');
                            rl.question('Seleccione una opción: ', function (opcionBlackjack) {
                                switch (opcionBlackjack) {
                                    case '1':
                                        // Jugar Blackjack
                                        console.log("caso 1");
                                        var juego1 = new menuBj_1.MenuBlackJack();
                                        juego1.menuPrin();
                                        break;
                                    case '2':
                                        // Reglas Blackjack
                                        break;
                                    case '3':
                                        _this.mostrarMenuPrincipal();
                                        break;
                                }
                            });
                            break;
                    }
                });
                break;
            case '4':
                console.log('Gracias por visitar Casino Grupo 16');
                rl.close();
                break;
            default:
                console.log('Opción inválida. Por favor, intente de nuevo.');
                _this.mostrarMenuPrincipal();
        }
    });
}
