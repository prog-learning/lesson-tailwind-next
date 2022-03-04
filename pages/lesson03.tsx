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
    <div className='space-y-4'>
      <h2>Lesson03</h2>
      <h3>色を変える</h3>
      <div className={`${currentClass} w-20 h-20`}></div>
      {colors.map((color) => (
        <button
          className={`p-1 m-1 border-2 bg-${color}-400`}
          key={color}
          onClick={() => onChangeColor(color)}
        >
          {color}
        </button>
      ))}
      <br />
      {darknessQuantities.map((num) => (
        <button
          className={`p-1 m-1 border-2 bg-gray-${num} ${
            Number(num) > 400 && 'text-white'
          }`}
          key={num}
          onClick={() => onChangeDarkness(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
