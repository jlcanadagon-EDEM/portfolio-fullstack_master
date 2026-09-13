/*
Ejercicio DOM 2

Crear, insertar y eliminar elementos dinámicamente.
*/

// 2.1 Insertar un div vacío
const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 2.2 Insertar un div que contenga un p
const divWithParagraph = document.createElement("div");
const paragraphInsideDiv = document.createElement("p");

paragraphInsideDiv.textContent = "Párrafo dentro de un div";
divWithParagraph.appendChild(paragraphInsideDiv);
document.body.appendChild(divWithParagraph);

// 2.3 Insertar un div que contenga seis párrafos
const divWithSixParagraphs = document.createElement("div");

for (let i = 1; i <= 6; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent = `Párrafo dinámico ${i}`;
  divWithSixParagraphs.appendChild(paragraph);
}

document.body.appendChild(divWithSixParagraphs);

// 2.4 Insertar un p con el texto "Soy dinámico!"
const dynamicParagraph = document.createElement("p");
dynamicParagraph.textContent = "Soy dinámico!";
document.body.appendChild(dynamicParagraph);

// 2.5 Insertar texto dentro del h2
const insertHereTitle = document.querySelector("h2.fn-insert-here");
insertHereTitle.textContent = "Wubba Lubba dub dub";

// 2.6 Crear una lista ul > li con los elementos del array
const apps = [
  "Facebook",
  "Netflix",
  "Instagram",
  "Snapchat",
  "Twitter",
];

const appList = document.createElement("ul");

for (const app of apps) {
  const listItem = document.createElement("li");
  listItem.textContent = app;
  appList.appendChild(listItem);
}

document.body.appendChild(appList);

// 2.7 Eliminar todos los nodos con la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll(".fn-remove-me");

for (const element of elementsToRemove) {
  element.remove();
}

// 2.8 Insertar un p entre los dos primeros div
const divElements = document.querySelectorAll("body > div");
const middleParagraph = document.createElement("p");

middleParagraph.textContent = "Voy en medio!";
divElements[0].after(middleParagraph);

// 2.9 Insertar "Voy dentro!" en los div con .fn-insert-here
const insertHereDivs = document.querySelectorAll("div.fn-insert-here");

for (const div of insertHereDivs) {
  const insideParagraph = document.createElement("p");
  insideParagraph.textContent = "Voy dentro!";
  div.appendChild(insideParagraph);
}