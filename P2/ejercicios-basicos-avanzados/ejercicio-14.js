/*
Ejercicio 14

Crea una función que reciba un array de palabras y devuelva
el número de veces que aparece cada una.
*/

const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  const repetitions = {};

  for (const word of list) {
    if (repetitions[word]) {
      repetitions[word]++;
    } else {
      repetitions[word] = 1;
    }
  }

  return repetitions;
}

console.log(repeatCounter(words));