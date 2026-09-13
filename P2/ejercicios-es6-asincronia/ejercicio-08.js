/*
Ejercicio ES6 8

Obtiene los personajes de Juego de Tronos mediante fetch().
Crea un select con sus nombres y muestra la imagen del
personaje seleccionado.
*/

const apiUrl = "https://thronesapi.com/api/v2/Characters";

const characterSelect = document.querySelector("#character-list");
const characterImage = document.querySelector(".character-image");

const loadCharacters = async () => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const characters = await response.json();

    for (const character of characters) {
      const option = document.createElement("option");

      option.value = character.imageUrl;
      option.textContent = character.fullName;

      characterSelect.appendChild(option);
    }

    showSelectedCharacter();
  } catch (error) {
    console.error("No se pudieron cargar los personajes:", error);
  }
};

const showSelectedCharacter = () => {
  const selectedOption =
    characterSelect.options[characterSelect.selectedIndex];

  characterImage.src = characterSelect.value;
  characterImage.alt = selectedOption.textContent;
};

characterSelect.addEventListener("change", showSelectedCharacter);

loadCharacters();