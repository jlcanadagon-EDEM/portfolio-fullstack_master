/*
Ejercicio 32

Crea una función que reciba un array de miembros de los
X-Men y devuelva el miembro con el año de aparición
más antiguo.
*/

const xMen = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

function findOldestXMen(xMenList) {
  let oldestXMen = xMenList[0];

  for (const member of xMenList) {
    if (member.year < oldestXMen.year) {
      oldestXMen = member;
    }
  }

  return oldestXMen;
}

console.log(findOldestXMen(xMen));