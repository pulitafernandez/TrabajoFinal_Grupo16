import { Apuesta } from "./apuesta";
import { Carta } from "./carta";
import { BlackJack } from "./blackjack";
import { MenuBlackJack } from "./menuBj";

//const juego1 = new BlackJack("Peter",100);
const juego1 = new MenuBlackJack();
juego1.menuPrin();