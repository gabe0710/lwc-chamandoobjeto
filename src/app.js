import { LightningElement } from "lwc";

export default class App extends LightningElement {
  pessoa = {
    nome : "Gabriel",
    tel  : "40028922",
    idade: 21,
    Status: true
  }

  pokemons = [
    {code: 1, nome:"Pikachu", tipo:"Raio", nivel:50},
    {code: 2, nome:"Squirtle", tipo:"Água", nivel:60},
    {code: 3, nome:"psyduck", tipo:"psiquico", nivel:80},
    {code: 4, nome:"Charizard", tipo:"Fogo", nivel:90},
    {code: 5, nome:"ho-ho", tipo:"fogo - Lendário", nivel:700}
  ];

  cavernaDoDagrao = [
    {code: 1, nome:"Eric", arma:"Escudo", forca: 70, agilidade: 50, inteligencia: 80, estamina: 20},
    {code: 2, nome:"Diana", arma:"Bastão", forca: 80, agilidade:75 , inteligencia: 80, estamina: 30},
    {code: 3, nome:"Sheila", arma:"Capuz", forca: 40, agilidade: 60, inteligencia: 90, estamina: 40},
    {code: 4, nome:"Presto", arma:"Chapéu de Feiticeiro", forca: 80, agilidade: 90, inteligencia: 75, estamina: 50},
    {code: 5, nome:"Bobby", arma:"Tacape", forca: 100, agilidade: 70, inteligencia: 65, estamina: 60},
    {code: 6, nome:"Mestre dos Magos", arma:"Sumir nos melhores momentos", forca: 200, agilidade: 10000, inteligencia: 700000, estamina: 70},
    {code: 7, nome:"Vingador", arma:"Reunir as armas dos ôto", forca: 0, agilidade: 0, inteligencia: 0, estamina: 0}
  ];

}
