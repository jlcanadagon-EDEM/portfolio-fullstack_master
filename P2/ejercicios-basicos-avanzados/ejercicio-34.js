/*
Ejercicio 34

Crea una función que reciba un array de películas
y devuelva el promedio de sus duraciones.
*/

const movies = [
  { title: "Inception", duration: 148 },
  { title: "The Dark Knight", duration: 152 },
  { title: "Interstellar", duration: 169 },
  { title: "Dunkirk", duration: 106 },
  { title: "The Prestige", duration: 130 },
  { title: "Memento", duration: 113 },
  { title: "Batman Begins", duration: 140 },
  { title: "The Dark Knight Rises", duration: 164 },
  { title: "Tenet", duration: 150 },
  { title: "Insomnia", duration: 118 },
];

function averageMovieDuration(movieList) {
  let totalDuration = 0;

  for (const movie of movieList) {
    totalDuration += movie.duration;
  }

  return totalDuration / movieList.length;
}

console.log(averageMovieDuration(movies));
