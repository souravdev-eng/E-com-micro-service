import { FC } from 'react';
import './styles.scss';

interface Props {
  title: string;
  role?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<Props> = ({ title, onClick, role = 'button', type = 'submit' }) => {
  return (
    <button className='button' role={role} onClick={onClick} type={type}>
      {title}
    </button>
  );
};

export default Button;
