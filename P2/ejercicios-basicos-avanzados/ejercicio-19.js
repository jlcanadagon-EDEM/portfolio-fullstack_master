/*
Ejercicio 19

Recorre todos los juguetes con for...of y crea un nuevo
array que contenga únicamente los juguetes cuyo nombre
no incluya la palabra "gato".
*/

const toys = [
  { id: 5, name: "Transformers" },
  { id: 11, name: "LEGO" },
  { id: 23, name: "Hot Wheels" },
  { id: 40, name: "Rascador de gato" },
  { id: 40, name: "FurReal Friends gato interactivo" },
  { id: 60, name: "Nerf Blaster" },
  { id: 71, name: "Sylvanian Families - Familia gato" },
];

const toysWithoutCats = [];

for (const toy of toys) {
  if (!toy.name.includes("gato")) {
    toysWithoutCats.push(toy);
  }
}

console.log(toysWithoutCats);