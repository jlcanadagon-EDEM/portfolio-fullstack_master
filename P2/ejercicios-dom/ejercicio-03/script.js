/*
Ejercicio DOM 3

Crear listas y tarjetas dinámicamente, además de añadir
botones para eliminar elementos.
*/

// 1.1 Crear una lista de países
const countryNames = [
  "Japón",
  "Nicaragua",
  "Suiza",
  "Australia",
  "Venezuela",
];

const countryList = document.createElement("ul");

for (const country of countryNames) {
  const listItem = document.createElement("li");
  listItem.textContent = country;
  countryList.appendChild(listItem);
}

document.body.appendChild(countryList);

// 1.2 Eliminar el elemento con la clase .fn-remove-me
const elementToRemove = document.querySelector(".fn-remove-me");
elementToRemove.remove();

// 1.3 Crear una lista de coches dentro de printHere
const cars = [
  "Mazda 6",
  "Ford fiesta",
  "Audi A4",
  "Toyota corola",
];

const printHereDiv = document.querySelector(
  '[data-function="printHere"]'
);

const carList = document.createElement("ul");

for (const car of cars) {
  const listItem = document.createElement("li");
  listItem.textContent = car;
  carList.appendChild(listItem);
}

printHereDiv.appendChild(carList);

// 1.4 Datos para crear las tarjetas
const countries = [
  {
    title: "Random title",
    imgUrl: "https://picsum.photos/300/200?random=1",
  },
  {
    title: "Random title",
    imgUrl: "https://picsum.photos/300/200?random=2",
  },
  {
    title: "Random title",
    imgUrl: "https://picsum.photos/300/200?random=3",
  },
  {
    title: "Random title",
    imgUrl: "https://picsum.photos/300/200?random=4",
  },
  {
    title: "Random title",
    imgUrl: "https://picsum.photos/300/200?random=5",
  },
];

const cardsContainer = document.createElement("section");
cardsContainer.className = "country-cards";

document.body.appendChild(cardsContainer);

for (const country of countries) {
  const card = document.createElement("div");
  const title = document.createElement("h4");
  const image = document.createElement("img");

  title.textContent = country.title;
  image.src = country.imgUrl;
  image.alt = country.title;

  card.appendChild(title);
  card.appendChild(image);

  // 1.6 Botón que elimina su propia tarjeta
  const removeCardButton = document.createElement("button");
  removeCardButton.textContent = "Eliminar esta tarjeta";

  removeCardButton.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(removeCardButton);
  cardsContainer.appendChild(card);
}

// 1.5 Botón que elimina la última tarjeta
const removeLastButton = document.createElement("button");
removeLastButton.textContent = "Eliminar la última tarjeta";

removeLastButton.addEventListener("click", () => {
  const lastCard = cardsContainer.lastElementChild;

  if (lastCard) {
    lastCard.remove();
  }
});

document.body.appendChild(removeLastButton);