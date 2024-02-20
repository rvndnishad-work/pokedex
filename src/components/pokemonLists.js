import React from 'react';
import { Pokemon } from './pokemonCard';

export const PokemonLists = ({ pokemons = [] }) => {
  return (
    <div className=' grid auto-cols-auto grid-cols-6 gap-4'>
      {pokemons.map((pokemon) => {
        return <Pokemon pokemon={pokemon} />;
      })}
    </div>
  );
};
