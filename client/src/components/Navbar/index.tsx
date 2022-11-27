import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.style.scss';
import { NAV_DATA } from '../../data/navdata';

const Navbar = () => {
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
          <li>
            <Link to={'/auth/login'}>
              <button className='login-btn'>Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
