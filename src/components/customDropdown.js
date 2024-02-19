'use client';

import { AiOutlineDown } from 'react-icons/ai';

import { useState, useEffect, useRef } from 'react';

export const CustomDropdown = ({ optType }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const overlayRef = useRef(null);

  const handleClickOutside = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="h-full w-full" role="select" aria-label="Country calling code" name="countryCode">
      <div className={`flex h-3/5 w-full  rounded-lg relative ${showDropdown ? 'bg-white' : 'bg-textbox'}`} ref={overlayRef}>
        <div onClick={() => setShowDropdown(!showDropdown)} className="flex h-3/5 w-full rounded-lg relative ">
          <span className="grow mt-3 ml-3 ">Label</span>
          <span className=" mt-4 mr-3 ">
            <AiOutlineDown />
          </span>
        </div>
        <div className={`absolute transition-all top-[55px] p-2 rounded-lg shadow-lg bg-white w-full h-full ${showDropdown ? 'inline' : 'hidden'} `}>testing</div>
      </div>
    </div>
  );
};
