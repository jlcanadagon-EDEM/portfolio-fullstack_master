/*
Ejercicio 2.1 — Luke Skywalker cumple años

Modifica el siguiente código para actualizar la edad
de Luke Skywalker a 25 años.
*/

const jedi = {
  nombre: "Luke Skywalker",
  edad: 19,
};
jedi.edad = 25;
console.log(jedi);
/*
Ejercicio 2.2 — Presentación al estilo Leia Organa

Crea tres variables:
nombre: "Leia"
apellido: "Organa"
edad: 20

Muestra el mensaje mediante concatenación:
"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."
*/

const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

console.log(
  "Soy " +
    nombre +
    " " +
    apellido +
    ", tengo " +
    edad +
    " años y soy una princesa de Alderaan."
);
/*
Ejercicio 2.3 — Coste total de los sables de luz

Calcula el precio total del Shoto de Yoda
y el sable de Darth Vader.
*/

const sable1 = {
  nombre: "Shoto de Yoda",
  precio: 1500,
};

const sable2 = {
  nombre: "Sable de Darth Vader",
  precio: 2000,
};

const precioTotalSables = sable1.precio + sable2.precio;

console.log(precioTotalSables);
/*
Ejercicio 2.4 — Actualización del precio final de las naves

Cambia precioBaseGlobal a 25.000 créditos y actualiza
el precio final de ambas naves.
*/

let precioBaseGlobal = 10000;

// Modificamos el valor global.
precioBaseGlobal = 25000;

const nave1 = {
  nombre: "Ala-X",
  precioBase: 50000,
  precioFinal: 60000,
};

const nave2 = {
  nombre: "Halcón Milenario",
  precioBase: 70000,
  precioFinal: 80000,
};

// Actualizamos el precio final de cada nave.
nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log(nave1);
console.log(nave2);