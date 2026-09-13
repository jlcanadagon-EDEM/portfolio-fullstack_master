/*
Ejercicio 33

Crea una función que reciba un país y devuelva su capital.

Si el país no se encuentra en el objeto, debe devolver
un mensaje adecuado.
*/

const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  }

  return `No se ha encontrado la capital de ${country}`;
}

console.log(getCapital("Spain"));
console.log(getCapital("Greece"));
console.log(getCapital("Japan"));