import { INITIAL_CALL_CARACRTERS } from "../Utils/const";

export async function getAllCaracters(link = null) {
  let currentLink = INITIAL_CALL_CARACRTERS;

  if (link) {
    currentLink = link;
  }

  const result = await fetch(currentLink);

  const data = await result.json();

  if (!result.ok) {
    throw new Error("Cant Fetch the caracters");
  }

  return data;
}

export async function getSearchCaracter(caracter) {
  const result = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${caracter}`
  );

  const data = await result.json();

  if (!result.ok) {
    throw new Error(
      `Cant Ferch those caracters with this parameter ${caracter}`
    );
  }

  return data;
}
