import React, { FC } from 'react';
import './styles.css';

interface Props {
  title: string;
  role?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ title, onClick, role = 'button' }) => {
  return (
    <button className='button' role={role} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
