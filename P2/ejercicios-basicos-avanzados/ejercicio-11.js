/*
Ejercicio 11

Crea una función que reciba un array con números y strings.

Si el elemento es un número, suma su valor.
Si es un string, suma la cantidad de caracteres.
Finalmente, devuelve el promedio.
*/

const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let total = 0;

  for (const element of list) {
    if (typeof element === "number") {
      total += element;
    } else {
      total += element.length;
    }
  }

  return total / list.length;
}

console.log(averageWord(mixedElements));