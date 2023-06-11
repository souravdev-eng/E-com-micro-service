import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppRedux';
import { NAV_DATA } from '../../data/navdata';
import ProfileTab from '../ProfileTab';
import './navbar.style.scss';

const Navbar = () => {
  const { user } = useAppSelector((state) => state.users);

  return (
    <header className='header'>
      <Link to={'/'}>
        <img className='logo' src='/img/logo.png' alt='logo' />
      </Link>
      <nav className='nav'>
        <ul className='nav__list'>
          {NAV_DATA.map((el, idx) => {
            return (
              <li key={idx}>
                <Link to={`/shop${el.path}`} className='nav__list--link'>
                  {el.name}
                </Link>
              </li>
            );
          })}
          {user === null ? (
            <li>
              <Link to={'/auth/login'}>
                <button className='login-btn'>Login</button>
              </Link>
            </li>
          ) : (
            <li>
              <ProfileTab />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
