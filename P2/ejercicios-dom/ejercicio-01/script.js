/*
Ejercicio DOM 1

Seleccionar diferentes elementos del HTML y mostrarlos
en la consola del navegador.
*/

// 1.1 Botón con la clase .showme
const showMeButton = document.querySelector(".showme");
console.log(showMeButton);

// 1.2 h1 con el id #pillado
const caughtTitle = document.querySelector("#pillado");
console.log(caughtTitle);

// 1.3 Todos los elementos p
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// 1.4 Todos los elementos con la clase .pokemon
const pokemonElements = document.querySelectorAll(".pokemon");
console.log(pokemonElements);

// 1.5 Todos los elementos con data-function="testMe"
const testMeElements = document.querySelectorAll(
  '[data-function="testMe"]'
);
console.log(testMeElements);

// 1.6 Tercer personaje con data-function="testMe"
const thirdCharacter = document.querySelectorAll(
  '[data-function="testMe"]'
)[2];

console.log(thirdCharacter);