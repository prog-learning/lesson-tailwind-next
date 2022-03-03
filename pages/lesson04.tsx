import { useState } from 'react';

export default function Lesson() {
  const [currentClass, setCurrentClass] = useState('');

  return (
    <div>
      <h2>Lesson01</h2>
      <h3>columnを試す</h3>
      <div></div>
    </div>
  );
}
