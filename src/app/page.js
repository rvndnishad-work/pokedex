import { Headers } from '../components/headers';
import { Search } from '../components/search';
import { PokemonLists } from '../components/pokemonLists';
import { formatPokemonData } from '../utils/functions';

async function getPokemonData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const pokemonListData = await res.json();
  const pokemons = Promise.all(
    pokemonListData.results.map(async ({ url }) => {
      const data = await fetch(url);
      const pokemonData = await data.json();
      return formatPokemonData(pokemonData);
    }),
  );
  return pokemons;
}

export default async function Home() {
  const pokemonsData = await getPokemonData();
  return (
    <div className='p-10'>
      <Headers />
      <Search />
      <PokemonLists pokemons={pokemonsData} />
    </div>
  );
}
