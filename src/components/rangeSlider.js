'use client';

import { useState, useRef, useEffect } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { AiOutlineDown } from 'react-icons/ai';

const STEP = 1;
const MIN = 0;
const MAX = 100;

export const RangeSlider = ({
  min = 0,
  max = 210,
  step = 1,
  rangValues = [25, 75],
  setRangeValue,
}) => {
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
    <div
      className='w-full'
      role='select'
      aria-label='Country calling code'
      name='countryCode'
    >
      <div
        className={`flex rounded-lg relative ${showDropdown ? 'bg-white' : 'bg-textbox'}`}
        ref={overlayRef}
      >
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className='flex w-full h-full rounded-lg relative py-[10px] items-center'
        >
          <span className='grow ml-3 '>Label</span>
          <span className=' mr-3 '>
            <AiOutlineDown />
          </span>
        </div>
        <div
          className={`inline-table absolute transition-all top-[55px] right-0 p-2 rounded-lg shadow-lg bg-white w-[535px] h-full ${showDropdown ? 'inline' : 'hidden'} `}
        >
          <h3>Select stats</h3>
          <div>
            <div>HP</div>
            <div className='flex flex-column items-center border-[1px] border-label rounded-lg px-2 bg-sliderBG'>
              <div className='text-label'>{min}</div>
              <div className='flex w-full justify-center flex-wrap px-2'>
                <Range
                  values={rangValues}
                  step={step}
                  min={min}
                  max={max}
                  onChange={(values) => {
                    setRangeValue(values);
                  }}
                  renderTrack={({ props, children }) => (
                    <div
                      className='flex w-full h-9'
                      onMouseDown={props.onMouseDown}
                      onTouchStart={props.onTouchStart}
                    >
                      <div
                        ref={props.ref}
                        className={`h-1 w-full rounded-md bg self-center`}
                        style={{
                          background: getTrackBackground({
                            values: rangValues,
                            colors: ['#ccc', '#2e3156', '#ccc'],
                            min: min,
                            max: max,
                          }),
                        }}
                      >
                        {children}
                      </div>
                    </div>
                  )}
                  renderThumb={({ index, props, isDragged }) => {
                    return (
                      <div
                        {...props}
                        className='flex justify-center align-center w-8 rounded-xl bg-label text-white text-sm'
                      >
                        {rangValues[index]}
                      </div>
                    );
                  }}
                />
              </div>
              <div className='text-label'>{max}</div>
            </div>
            <div className='flex flex-column items-center border-[1px] border-label rounded-lg px-2 bg-sliderBG'>
              <div className='text-label'>{min}</div>
              <div className='flex w-full justify-center flex-wrap px-2'>
                <Range
                  values={rangValues}
                  step={step}
                  min={min}
                  max={max}
                  onChange={(values) => {
                    setRangeValue(values);
                  }}
                  renderTrack={({ props, children }) => (
                    <div
                      className='flex w-full h-9'
                      onMouseDown={props.onMouseDown}
                      onTouchStart={props.onTouchStart}
                    >
                      <div
                        ref={props.ref}
                        className={`h-1 w-full rounded-md bg self-center`}
                        style={{
                          background: getTrackBackground({
                            values: rangValues,
                            colors: ['#ccc', '#2e3156', '#ccc'],
                            min: min,
                            max: max,
                          }),
                        }}
                      >
                        {children}
                      </div>
                    </div>
                  )}
                  renderThumb={({ index, props, isDragged }) => {
                    return (
                      <div
                        {...props}
                        className='flex justify-center align-center w-8 rounded-xl bg-label text-white text-sm'
                      >
                        {rangValues[index]}
                      </div>
                    );
                  }}
                />
              </div>
              <div className='text-label'>{max}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
