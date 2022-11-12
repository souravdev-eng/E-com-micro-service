import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './styles.css';

const LoginPage = () => {
  return (
    <div className='container'>
      <form className='form'>
        <h3 className='title'>Login with email & password</h3>
        <input placeholder='Enter your email' type='email' className='text-input' />
        <input placeholder='Enter your Password' type='password' className='text-input' />
        <div className='button-wrapper'>
          <Button title='Login' />
        </div>
        <p>
          Don't have an account?{' '}
          <Link className='link' to='/auth/signup'>
            <span className='link-blue'>Click to signup</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
