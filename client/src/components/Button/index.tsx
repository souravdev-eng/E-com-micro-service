import { FC } from 'react';

interface Props {
  title: string;
  role?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<Props> = ({ title, onClick, role = 'button', type = 'submit' }) => {
  return (
    <button
      className='text-white bg-blue-600 w-full rounded-md h-14 hover:bg-blue-700 font-semibold text-lg'
      role={role}
      onClick={onClick}
      type={type}>
      {title}
    </button>
  );
};

export default Button;
