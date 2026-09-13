/*
Ejercicio 38

Utiliza for...of y for...in para calcular la media del
volumen de todos los sonidos favoritos de los usuarios.
*/

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let totalVolume = 0;
let numberOfSounds = 0;

for (const user of users) {
  for (const soundName in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[soundName].volume;
    numberOfSounds++;
  }
}

const averageVolume = totalVolume / numberOfSounds;

console.log(`Volumen total: ${totalVolume}`);
console.log(`Número de sonidos: ${numberOfSounds}`);
console.log(`Volumen medio: ${averageVolume}`);