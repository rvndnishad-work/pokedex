import Image from 'next/image';
import { colorCodes } from '../utils/constants';
import { getPokemonCardBackground } from '../utils/functions';

export const Pokemon = ({ pokemon }) => {
  return (
    <div
      className='px-8 pt-8 pb-4 border-[1px] rounded-lg border-label border-dashed grid grid-flow-row-dense'
      style={{
        background: getPokemonCardBackground(pokemon.types, colorCodes),
      }}
    >
      <div className='grow h-full w-full flex items-center'>
        <Image
          className='h-[200px] w-[250px]'
          src={`${pokemon.imgSrc}`}
          width={200}
          height={250}
          alt={`${pokemon.name}`}
        />
      </div>
      <div className='flex flex-col items-center justify-end'>
        <div className='capitalize text-labelDark font-bold text-xl py-2'>
          {pokemon.name}
        </div>
        <div className='font-normal text-xl'>{pokemon.paddedId}</div>
      </div>
    </div>
  );
};
