/*
Ejercicio 18

Recorre todos los destinos y elimina los elementos
que tengan el id 11 o el id 40.

Muestra el array resultante por consola.
*/

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let i = placesToTravel.length - 1; i >= 0; i--) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1);
  }
}

console.log(placesToTravel);