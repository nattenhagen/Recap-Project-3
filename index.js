import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
// import { prevButton } from "./components/NavButton.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');

const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const characters = data.results;
  characters.forEach((character) => {
    const card = CharacterCard(character);
    cardContainer.append(card);
  });
}
fetchCharacters();
