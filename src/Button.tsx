import { VFC } from 'react';

type ButtonProps = {
  label: string;
};

export const Button: VFC<ButtonProps> = ({ label }) => {
  return (
    <div className='w-max px-8 py-4 bg-red-200 rounded-lg cursor-pointer'>
      {label}
    </div>
  );
};
