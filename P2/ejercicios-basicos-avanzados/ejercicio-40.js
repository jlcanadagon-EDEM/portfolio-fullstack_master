/*
Ejercicio 40

1. Crea una función findArrayIndex que reciba un array
y un texto, y devuelva la posición del texto.

2. Crea una función removeItem que utilice findArrayIndex
y splice() para eliminar el elemento indicado.
*/

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }

  return -1;
}

function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

// Pruebas de findArrayIndex
console.log(findArrayIndex(mainCharacters, "Han Solo"));
console.log(findArrayIndex(mainCharacters, "Yoda"));

// Pruebas de removeItem
console.log(removeItem([...mainCharacters], "Leia"));
console.log(removeItem([...mainCharacters], "Obi-Wan"));
console.log(removeItem([...mainCharacters], "Yoda"));