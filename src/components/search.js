'use client';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { CustomDropdown, CustomOverlay } from './customDropdown';
import { STRING_CONSTANT } from '../utils/constants';
import { RangeSlider } from './rangeSlider';

export const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [types, setTypes] = useState([]);
  const [gender, setGender] = useState([]);
  const [stats, setStats] = useState([70, 150]);

  return (
    <div
      div
      className='flex my-7 gap-9'
      role='search'
      aria-label='Search or filter pokemon by name, number, type, gender and stats'
    >
      <div className='w-3/5'>
        <label className='mb-2 ml-2 text-md block text-label' htmlFor='filter'>
          {STRING_CONSTANT.searchLbl}
        </label>
        <div
          className='flex relative'
          role='search'
          tabIndex='0'
          aria-label='Select pokemon by name or number'
        >
          <input
            className='p-3 w-full h-full rounded-lg  bg-textbox hover: bg-while'
            type='text'
            id='filter'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder={STRING_CONSTANT.searchPlaceHolderText}
          />
          <span>
            <AiOutlineSearch className=' flex absolute top-1/4 border-0 w-7 h-7 end-4 text-label' />
          </span>
        </div>
      </div>
      <div
        className='w-1/5 px-2'
        role='search'
        tabIndex='-1'
        aria-label='Select pokemon by type'
      >
        <label className='mb-2 text-md block text-label'>
          {STRING_CONSTANT.pokemonTypeLbl}
        </label>
        <CustomDropdown optType='checkbox' />
      </div>
      <div className='w-1/5 px-2'>
        <label className='mb-2 text-md block text-label'>
          {STRING_CONSTANT.pokemonGenderLbl}
        </label>
        <CustomDropdown optType='checkbox' />
      </div>
      <div className='w-1/5 px-2'>
        <label className='mb-2 text-md block text-label'>
          {STRING_CONSTANT.pokemonStatsLbl}
        </label>
        <RangeSlider rangValues={stats} setRangeValue={setStats} />
      </div>
    </div>
  );
};
