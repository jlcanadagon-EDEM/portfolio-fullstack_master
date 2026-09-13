/*
Ejercicio DOM 5

Crea dinámicamente una lista ul > li que muestre
cada uno de los álbumes del array.
*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumContainer = document.querySelector("#album-list");
const albumList = document.createElement("ul");

albumList.className = "album-list";

for (const album of albums) {
  const albumItem = document.createElement("li");

  albumItem.className = "album-card";
  albumItem.textContent = album;

  albumList.appendChild(albumItem);
}

albumContainer.appendChild(albumList);