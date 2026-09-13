/*
Ejercicio 42

Crea una función llamada swap que reciba un array y dos
índices. La función debe intercambiar los elementos que
ocupen esas posiciones y devolver el array resultante.
*/

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, firstIndex, secondIndex) {
  const temporaryValue = array[firstIndex];

  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temporaryValue;

  return array;
}

console.log(swap(fantasticFour, 0, 3));