/*
Ejercicio 25

Cuenta cuántas películas son anteriores al año 2000
y cuántas son posteriores.

Muestra ambos resultados por consola.
*/

const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

let moviesBefore2000 = 0;
let moviesAfter2000 = 0;

for (const movie of movies) {
  if (movie.releaseYear < 2000) {
    moviesBefore2000++;
  }

  if (movie.releaseYear > 2000) {
    moviesAfter2000++;
  }
}

console.log(`Películas anteriores al año 2000: ${moviesBefore2000}`);
console.log(`Películas posteriores al año 2000: ${moviesAfter2000}`);