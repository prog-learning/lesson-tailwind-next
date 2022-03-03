import { useState } from 'react';
import { sizes } from '../src/const';

export default function Lesson() {
  const [currentClass, setCurrentClass] = useState('text-base');

  const fontFamilies = ['font-sans', 'font-serif', 'font-mono'];
  const letterSpacings = [
    'tracking-tighter',
    'tracking-tight',
    'tracking-normal',
    'tracking-wide',
    'tracking-wider',
    'tracking-widest',
  ];

  return (
    <div>
      <h2>Lesson02</h2>
      <h2>font-size</h2>
      <hr />
      <div className='flex border w-min p-2'>
        <div>text-</div>
        <select onChange={(e) => setCurrentClass(e.target.value)}>
          {sizes.map((size) => (
            <option value={`text-${size}`} key={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <h2 className={`${currentClass} h-32`}>font-size</h2>
      <div className='flex flex-wrap gap-2'>
        {sizes.map((size) => {
          return (
            <button
              key={size}
              className='border px-2'
              onClick={() => setCurrentClass(`text-${size}`)}
            >
              {size}
            </button>
          );
        })}
      </div>
      <h2>Font Family</h2>
      <hr />
      {fontFamilies.map((styleClass) => {
        return (
          <div key={styleClass} className={styleClass}>
            {styleClass}
          </div>
        );
      })}
      <h2>letter-spacing</h2>
      <hr />
      {letterSpacings.map((styleClass) => {
        return (
          <div key={styleClass} className={styleClass}>
            {styleClass}
          </div>
        );
      })}
    </div>
  );
}
