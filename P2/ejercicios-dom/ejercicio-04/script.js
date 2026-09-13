/*
Ejercicio DOM 4

Añadir eventos click, focus e input.
*/

// 1.1 Evento click sobre el botón
const button = document.querySelector("#btnToClick");

button.addEventListener("click", (event) => {
  console.log(event);
});

// 1.2 Evento focus que muestra el valor del input
const focusInput = document.querySelector(".focus");

focusInput.addEventListener("focus", (event) => {
  console.log(event.target.value);
});

// 1.3 Evento input que muestra el valor actual
const valueInput = document.querySelector(".value");

valueInput.addEventListener("input", (event) => {
  console.log(event.target.value);
});