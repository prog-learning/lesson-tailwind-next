import { useState } from 'react';
import { colors, darknessQuantities } from '../src/const';

export default function Lesson() {
  const [currentClass, setCurrentClass] = useState('bg-blue-200');
  const onChangeColor = (value: string) => {
    const arr = currentClass.split('-');
    arr[1] = value;
    setCurrentClass(arr.join('-'));
  };
  const onChangeDarkness = (value: string) => {
    const arr = currentClass.split('-');
    arr[2] = value;
    setCurrentClass(arr.join('-'));
  };
  console.log(currentClass);

  return (
    <div>
      <h2 className={currentClass}>Lesson01</h2>
      <h3>余白系</h3>
      <div className={`${currentClass} w-10 h-10`}></div>
      {colors.map((color) => (
        <button
          className='p-1 m-1 border-2 bg-blue-500'
          key={color}
          onClick={() => onChangeColor(color)}
        >
          {color}
        </button>
      ))}
      <br />
      {darknessQuantities.map((num) => (
        <button
          className='p-1 m-1 border-2 '
          key={num}
          onClick={() => onChangeDarkness(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
