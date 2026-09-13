/*
Ejercicio 7

Completa esta función para que, al recibir dos números,
devuelva el mayor de los dos.
*/

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  }

  return numberTwo;
}

// Pruebas
console.log(greaterNumber(10, 5));
console.log(greaterNumber(4, 12));
console.log(greaterNumber(20, 20));