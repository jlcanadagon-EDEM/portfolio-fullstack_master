/*
Ejercicio ES6 2

Practicar el spread operator con arrays y objetos.
*/

// 2.1 Copiar un array
{
  const pointsList = [32, 54, 21, 64, 75, 43];

  const pointsListCopy = [...pointsList];

  console.log(pointsListCopy);
}

// 2.2 Copiar un objeto
{
  const toy = {
    name: "Bus laiyiar",
    date: "20-30-1995",
    color: "multicolor",
  };

  const toyCopy = { ...toy };

  console.log(toyCopy);
}

// 2.3 Unir dos arrays
{
  const pointsList = [32, 54, 21, 64, 75, 43];
  const pointsList2 = [54, 87, 99, 65, 32];

  const combinedPoints = [...pointsList, ...pointsList2];

  console.log(combinedPoints);
}

// 2.4 Fusionar dos objetos
{
  const toy = {
    name: "Bus laiyiar",
    date: "20-30-1995",
    color: "multicolor",
  };

  const toyUpdate = {
    lights: "rgb",
    power: ["Volar like a dragon", "MoonWalk"],
  };

  const updatedToy = {
    ...toy,
    ...toyUpdate,
  };

  console.log(updatedToy);
}

// 2.5 Copiar un array eliminando la posición 2
{
  const colors = [
    "rojo",
    "azul",
    "amarillo",
    "verde",
    "naranja",
  ];

  const colorsWithoutPositionTwo = [
    ...colors.slice(0, 2),
    ...colors.slice(3),
  ];

  console.log(colors);
  console.log(colorsWithoutPositionTwo);
}