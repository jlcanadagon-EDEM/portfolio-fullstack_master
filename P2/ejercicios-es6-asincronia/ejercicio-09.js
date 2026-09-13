/*
Ejercicio ES6 9

Obtiene un Pokémon aleatorio de la primera generación,
del número 1 al 151, y muestra su imagen.

Cada vez que se recarga la página se genera otro número.
*/

const pokemonImage = document.querySelector(".random-image");

const getRandomPokemon = async () => {
  const randomPokemonId = Math.floor(Math.random() * 151) + 1;
  const apiUrl =
    `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const pokemon = await response.json();

    const officialArtwork =
      pokemon.sprites.other["official-artwork"].front_default;

    pokemonImage.src =
      officialArtwork || pokemon.sprites.front_default;

    pokemonImage.alt = pokemon.name;

    console.log(`Pokémon ${randomPokemonId}: ${pokemon.name}`);
  } catch (error) {
    console.error("No se pudo cargar el Pokémon:", error);
  }
};

getRandomPokemon();