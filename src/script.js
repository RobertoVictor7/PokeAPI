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

function searchPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      const pokemon = {
        displayPokemon: document.querySelector(".pokemon-display img"),
        displayName: document.querySelector(".pokemon-name"),
        displayType: document.querySelector(".display-type"),
        displayHeight: document.querySelector(".display-height"),
        displayWeight: document.querySelector(".display-weight"),
      };

      pokemon.displayPokemon.src = data.sprites.front_default;
      pokemon.displayName.innerText = data.name;
      pokemon.displayHeight.innerText = data.height;
      pokemon.displayWeight.innerText = data.weight;

      const type = data.types;
      const pokemonTypes = type.map((type) => {
        return (type = type.type.name);
      });

      pokemon.displayType.innerText = pokemonTypes;
      displayError.innerText = '';
    })
    .catch((err) => {
      
      err.message = "Pokemon not found";
      const error = err.message;
      displayError.innerText = error;
    });
}

searchBtn.addEventListener("click", handleClick);
