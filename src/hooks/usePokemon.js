import { useQuery } from '@tanstack/react-query';
import { fetchApi } from '../utils/fetchApi';
import { formatPokemonData } from '../utils/functions';

export const usePokemons = () => {
  const { data } = useQuery({
    queryKey: ['pokemon'],
    queryFn: async () => {
      const { pokemon: pokemonList } = await fetchApi('/pokemon');
      const pokemons = await Promise.all(
        pokemonList.map(async ({ pokemon }) => {
          const res = await fetch(pokemon.url);
          const data = await res.json();
          return formatPokemonData(data);
        }),
      );

      return pokemons;
    },
  });
  return data;
};
