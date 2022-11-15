import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const DATA = [
  {
    name: 'Top Offers',
    path: '/top-offer',
  },
  {
    name: 'Mobiles',
    path: '/mobile',
  },
  {
    name: 'Fashions',
    path: '/fashions',
  },
  {
    name: 'Electronics',
    path: '/electronics',
  },
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'Beauty, Toys & More',
    path: '/beauty-toys-more',
  },
];

const Navbar = () => {
  return (
    <header className='header'>
      <Link to={'/'}>
        <img className='logo' src='/img/logo.png' alt='logo' />
      </Link>
      <nav className='main-nav'>
        <ul className='main-nav__list'>
          {DATA.map((el, idx) => {
            return (
              <li key={idx}>
                <Link to={`/shop${el.path}`} className='main-nav__list_link'>
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
