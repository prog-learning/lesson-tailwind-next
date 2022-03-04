import { useEffect, useMemo, useRef, useState } from 'react';
import { sizeQuantity } from '../src/const';

export default function Lesson() {
  const [currentClass, setCurrentClass] = useState('w-4');
  const el = useRef(null);
  const [width, setWidth] = useState(
    el.current?.getBoundingClientRect().width || '',
  );
  useEffect(() => {
    if (!el?.current) return;
    setWidth(el.current.getBoundingClientRect().width);
  }, [currentClass]);

  return (
    <div className='space-y-4'>
      <h2>Lesson01</h2>
      <h3>width/height</h3>
      <div className='flex border w-min p-2'>
        <div>w-</div>
        <select onChange={(e) => setCurrentClass(e.target.value)}>
          {sizeQuantity.map((num) => (
            <option value={`w-${num}`} key={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div
        className={`${currentClass} h-10 bg-red-400 rounded transition-all flex items-center`}
        ref={el}
      >
        {width}px
      </div>
      <div className='flex flex-wrap gap-2'>
        {sizeQuantity.map((num) => (
          <button
            className={`border px-2 ${
              currentClass === `w-${num}` ? 'bg-red-400 text-white' : ''
            }`}
            key={num}
            onClick={() => setCurrentClass(`w-${num}`)}
          >
            {`w-${num}`}
          </button>
        ))}
      </div>
    </div>
  );
}
