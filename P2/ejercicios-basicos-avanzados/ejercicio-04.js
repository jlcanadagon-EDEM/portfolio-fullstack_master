/*
Ejercicio 4

4.1 Saca a "Tendo" por consola accediendo a su posición.
4.2 Coloca "Cervasio" al final del array.
4.3 Cambia el primer elemento por "Bambina".
4.4 Dale la vuelta al array.
4.5 Cambia "Narciso" por "Canela" usando un método de array.
4.6 Muestra el último elemento sin indicar explícitamente su posición.
*/

const aldeanos = [
  "Fibrilio",
  "Narciso",
  "Vacarena",
  "Tendo",
  "Nendo",
];

// 4.1
console.log(aldeanos[3]);

// 4.2
aldeanos.push("Cervasio");

// 4.3
aldeanos[0] = "Bambina";

// 4.4
aldeanos.reverse();

// 4.5
const posicionNarciso = aldeanos.indexOf("Narciso");
aldeanos.splice(posicionNarciso, 1, "Canela");

// 4.6
console.log(aldeanos[aldeanos.length - 1]);

// Mostramos el resultado completo para comprobar los cambios.
console.log(aldeanos);