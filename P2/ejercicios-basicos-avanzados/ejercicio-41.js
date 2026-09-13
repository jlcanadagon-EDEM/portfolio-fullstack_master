/*
Ejercicio 41

Crea una función llamada rollDice que reciba el número
de caras de un dado y devuelva el resultado de una
tirada aleatoria.
*/

function rollDice(numberOfSides) {
  return Math.floor(Math.random() * numberOfSides) + 1;
}

// Pruebas
console.log(`Dado de 6 caras: ${rollDice(6)}`);
console.log(`Dado de 12 caras: ${rollDice(12)}`);
console.log(`Dado de 20 caras: ${rollDice(20)}`);
