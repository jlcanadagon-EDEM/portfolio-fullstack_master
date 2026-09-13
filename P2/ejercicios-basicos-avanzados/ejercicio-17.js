/*
Ejercicio 17

Usa un bucle for...in para mostrar por consola todas
las propiedades y valores del alienígena.

Formato:
"La propiedad ____ tiene como valor: ____"
*/

const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

for (const property in alien) {
  console.log(
    `La propiedad ${property} tiene como valor: ${alien[property]}`
  );
}