/*
Ejercicio ES6 3

Utilizar map() para transformar arrays y generar
nuevos valores.
*/

// 3.1 Obtener un array con los nombres
{
  const users = [
    { id: 1, name: "Abel" },
    { id: 2, name: "Julia" },
    { id: 3, name: "Pedro" },
    { id: 4, name: "Amanda" },
  ];

  const userNames = users.map((user) => user.name);

  console.log(userNames);
}

// 3.2 Cambiar por "Anacleto" los nombres que comiencen por A
{
  const users = [
    { id: 1, name: "Abel" },
    { id: 2, name: "Julia" },
    { id: 3, name: "Pedro" },
    { id: 4, name: "Amanda" },
  ];

  const transformedNames = users.map((user) => {
    if (user.name.startsWith("A")) {
      return "Anacleto";
    }

    return user.name;
  });

  console.log(transformedNames);
}

// 3.3 Añadir "(Visitado)" a las ciudades visitadas
{
  const cities = [
    { isVisited: true, name: "Tokyo" },
    { isVisited: false, name: "Madagascar" },
    { isVisited: true, name: "Amsterdam" },
    { isVisited: false, name: "Seul" },
  ];

  const cityNames = cities.map((city) => {
    if (city.isVisited) {
      return `${city.name} (Visitado)`;
    }

    return city.name;
  });

  console.log(cityNames);
}