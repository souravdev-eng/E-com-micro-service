import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './styles.css';

const SignUpPage = () => {
  return (
    <div className='container'>
      <form className='form'>
        <h3 className='title'>Create your new account</h3>
        <input placeholder='Enter your name' type='text' className='text-input' />
        <input placeholder='Enter your email' type='email' className='text-input' />
        <input placeholder='Enter your Password' type='password' className='text-input' />
        <input placeholder='Conform your Password' type='password' className='text-input' />
        <div className='button-wrapper'>
          <Button title='Sign up' />
        </div>
        <p>
          Don't have an account?{' '}
          <Link className='link' to='/auth/login'>
            <span className='link-blue'>Click to login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
