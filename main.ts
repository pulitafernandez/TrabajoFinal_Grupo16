import { Casino } from "./Casino";
import { Jugador } from "./Jugador";
import { MenuCasino } from "./MenuCasino";
import { TragamonedasAvanzado } from "./TragamonedasAvanzado";

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

const juego1 = new MenuCasino();
juego1.mostrarMenuPrincipal();
