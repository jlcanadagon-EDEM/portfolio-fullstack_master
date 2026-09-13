/*
Ejercicio 35

Crea una función que busque mutantes con un poder
determinado y devuelva un mensaje indicando si fueron
encontrados.

Debe admitir que varios mutantes tengan el mismo poder.
*/

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutantList, power) {
  const matchingMutants = [];

  for (const mutant of mutantList) {
    if (mutant.power === power) {
      matchingMutants.push(mutant.name);
    }
  }

  if (matchingMutants.length === 0) {
    return `No se encontraron mutantes con el poder: ${power}`;
  }

  return `Mutantes encontrados con el poder ${power}: ${matchingMutants.join(
    ", "
  )}`;
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "invisibility"));