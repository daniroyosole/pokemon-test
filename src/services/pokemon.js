import { get } from '../utils/http';

const POKEMON_BASEURL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonList = (start = 0, num = 30) => {
    const pokemonGetUrl = `${POKEMON_BASEURL}?limit=${num}&offset=${start*num}`;
    return get(pokemonGetUrl);
  }

export const getPokemonDetails = (id) => {
  const pokemonGetUrl = `${POKEMON_BASEURL}${id}`;
  return get(pokemonGetUrl);
}
