/*
Ejercicio ES6 1

Practicar object destructuring y array destructuring.
*/

// 1.1 Destructuring de un objeto
{
  const game = {
    title: "The Last of Us 2",
    gender: ["action", "zombie", "survival"],
    year: 2020,
  };

  const { title, gender, year } = game;

  console.log(title);
  console.log(gender);
  console.log(year);
}

// 1.2 Destructuring de un array
{
  const fruits = ["Banana", "Strawberry", "Orange"];

  const [fruit1, fruit2, fruit3] = fruits;

  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

// 1.3 Destructuring del resultado de una función
{
  const animalFunction = () => {
    return {
      name: "Bengal Tiger",
      race: "Tiger",
    };
  };

  const { name, race } = animalFunction();

  console.log(name);
  console.log(race);
}

// 1.4 Destructuring de un objeto y de un array interno
{
  const car = {
    name: "Mazda 6",
    itv: [2015, 2011, 2020],
  };

  const { name, itv } = car;
  const [itvYear1, itvYear2, itvYear3] = itv;

  console.log(name);
  console.log(itv);
  console.log(itvYear1);
  console.log(itvYear2);
  console.log(itvYear3);
}