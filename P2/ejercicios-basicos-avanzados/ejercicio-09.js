/*
Ejercicio 9

Completa la función sumNumbers para que reciba un array
de números y devuelva la suma de todos sus elementos.
*/

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let total = 0;

  for (const number of numberList) {
    total += number;
  }

  return total;
}

console.log(sumNumbers(numbers));