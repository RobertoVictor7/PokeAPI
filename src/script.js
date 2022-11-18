const searchBtn = document.querySelector('#search');
const pokeName = document.querySelector('.poke-name')
const inputSearch = document.querySelector('.poke-search')


function handleClick(e) {
    e.preventDefault();
    const pokemon = inputSearch.value;
    const formatPokemon = pokemon.toLowerCase();
    searchPokemon(formatPokemon);
}

function searchPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.name)
    })
    
}

searchBtn.addEventListener('click', handleClick);

