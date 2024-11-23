"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MenuCasino_1 = require("./MenuCasino");
/*
let casino1 = new Casino(1, "Casino Olavarria")
let juego1 = new TragamonedasAvanzado(1)
let jugador1 = new Jugador()
casino1.agregarJuego(juego1);
casino1.agregarJugador(jugador1);
jugador1.cargarCreditos(100)
jugador1.consultarCreditos()
juego1.iniciarJuego()
*/
var juego1 = new MenuCasino_1.MenuCasino();
juego1.mostrarMenuPrincipal();
