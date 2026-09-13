/*
Ejercicio 13

Crea una función que reciba un array y un nombre.

Si el nombre existe, debe devolver true y su posición.
Si no existe, debe devolver false.
*/

const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, nameToFind) {
  const position = nameList.indexOf(nameToFind);

  if (position !== -1) {
    return {
      found: true,
      position: position,
    };
  }

  return {
    found: false,
  };
}

console.log(nameFinder(names, "Bruce"));
console.log(nameFinder(names, "Wanda"));