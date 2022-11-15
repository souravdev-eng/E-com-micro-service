import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './styles.scss';

const LoginPage = () => {
  return (
    <div className='container'>
      <form className='form'>
        <h3 className='form__title'>Login with email & password</h3>
        <input placeholder='Enter your email' type='email' className='form__text-input' />
        <input placeholder='Enter your Password' type='password' className='form__text-input' />
        <div className='form__button-wrapper'>
          <Button title='Login' />
        </div>
        <p className='form__link'>
          Don't have an account?{' '}
          <Link className='form__link--text' to='/auth/signup'>
            <span className='form__link--text--blue'>Click to signup</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
