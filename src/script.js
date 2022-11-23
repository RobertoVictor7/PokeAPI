const searchBtn = document.querySelector("#search");
const pokeName = document.querySelector(".poke-name");
const inputSearch = document.querySelector(".poke-search");
const displayError = document.querySelector(".error-area");

function handleClick(e) {
  e.preventDefault();
  const pokemon = inputSearch.value;
  const formatPokemon = pokemon.toLowerCase();
  searchPokemon(formatPokemon);
}

async function searchPokemon(pokemon) {
  try {
    const pokeApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokeData = await pokeApi.json();

    const displayPokemon = document.querySelector(".pokemon-display img");
    const displayName = document.querySelector(".pokemon-name");
    const displayType = document.querySelector(".display-type");
    const displayHeight = document.querySelector(".display-height");
    const displayWeight = document.querySelector(".display-weight");

    displayPokemon.src = pokeData.sprites.front_default;
    displayName.innerText = pokeData.name;
    displayHeight.innerText = pokeData.height;
    displayWeight.innerText = pokeData.weight;

    const type = pokeData.types;
    const pokemonTypes = type.map((type) => {
      return (type = type.type.name);
    });

    displayType.innerText = pokemonTypes;
    displayError.innerText = "";
  } catch {
    displayError.innerText = "Pokemon Not Found";
  }
}
searchBtn.addEventListener("click", handleClick);
