/*
Ejercicio 8

Crea una función que reciba un array de strings y devuelva
la palabra más larga. Si dos elementos tienen la misma
longitud, debe devolver el primero.
*/

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  let longestWord = stringList[0];

  for (const word of stringList) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord(avengers));