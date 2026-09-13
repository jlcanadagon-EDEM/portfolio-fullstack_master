/*
Ejercicio 15

Recorre el array y muestra por consola todos los valores
que incluyan la palabra "Camiseta".

Utiliza el método includes().
*/

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

for (const product of products) {
  if (product.includes("Camiseta")) {
    console.log(product);
  }
}