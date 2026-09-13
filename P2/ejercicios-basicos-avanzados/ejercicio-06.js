/*
Ejercicio 6

1.1 Crea un bucle for desde 0 hasta 9.

1.2 Crea otro bucle desde 0 hasta 9 y muestra solamente
los números cuyo resto al dividirlos entre 2 sea 0.

1.3 Crea un bucle de 10 vueltas para contar ovejas.
Muestra "Intentando dormir 🐑" y, en la décima vuelta,
muestra "¡Dormido!".
*/

// 1.1: números del 0 al 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 1.2: números pares del 0 al 9
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 1.3: contar ovejas durante 10 vueltas
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log("¡Dormido!");
  } else {
    console.log("Intentando dormir 🐑");
  }
}
