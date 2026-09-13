/*
Ejercicio ES6 5

Filtra los streamers según el texto introducido
por el usuario en el input.
*/

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamerInput = document.querySelector(
  '[data-function="toFilterStreamers"]'
);

streamerInput.addEventListener("input", (event) => {
  const searchText = event.target.value;

  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.includes(searchText)
  );

  console.log(filteredStreamers);
});