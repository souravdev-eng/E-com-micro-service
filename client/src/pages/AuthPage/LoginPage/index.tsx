import { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Button, Loader } from '../../../components';
import { logInSchema } from '../../../validation';
import { useLoginPageHook } from './hooks';
import './login.style.scss';

const LoginPage = () => {
  const { handleLogin, error, loading, user, navigate } = useLoginPageHook();

  useEffect(() => {
    if (user !== null && error === null) {
      navigate('/');
    }
  }, [user, error, navigate]);

  useEffect(() => {
    if (user !== null && user.id) {
      redirect('/');
    }
  }, [user]);

  return (
    <div className='container'>
      {loading && <Loader />}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={({ email, password }, { resetForm }) => {
          handleLogin(email, password);
          resetForm();
        }}
        validationSchema={logInSchema}>
        <>
          <Form className='w-1/3 shadow-xl px-10 pt-4 py-10 shadow-slate-300 rounded-lg'>
            <h3 className='text-2xl font-semibold text-blue-500 mt-4 mb-10 text-center'>
              Login with email & password
            </h3>
            {error &&
              error.map((el: any, idx: number) => (
                <div className='form__error-msg' key={idx}>
                  {el.message}
                </div>
              ))}
            <div className='flex flex-col'>
              <Field
                id='email'
                name='email'
                placeholder='Enter your email'
                type='email'
                className='rounded-md text-lg h-16 border border-gray-200 p-4 w-3/2 focus:bg-blue-100 hover:text-black-500 focus:outline-none focus:placeholder:text-blue-500'
              />
              <ErrorMessage name='email' data-testid='emailError'>
                {(msg) => (
                  <div className='text-base text-red-500 font-semibold ml-15 self-start my-1'>
                    {msg}
                  </div>
                )}
              </ErrorMessage>

              <Field
                id='password'
                name='password'
                type='password'
                placeholder='Enter your password'
                className='rounded-md text-lg h-16 border border-gray-200 p-4 w-3/2 mt-6 focus:bg-blue-100 hover:text-black-500 focus:outline-none focus:placeholder:text-blue-500'
              />
              <ErrorMessage name='password' data-testid='passwordError'>
                {(msg) => {
                  return (
                    <div className='text-base text-red-500 font-semibold ml-15 self-start my-2'>
                      {msg}
                    </div>
                  );
                }}
              </ErrorMessage>
            </div>
            <div className='form__button-wrapper'>
              <Button title='Login' type='submit' />
            </div>
            <p className='text-base my-6 text-center'>
              Don't have an account?{' '}
              <Link to='/auth/signup'>
                <span className='text-base my-6 text-blue-500 font-semibold'>Click to signup</span>
              </Link>
            </p>
          </Form>
        </>
      </Formik>
    </div>
  );
};

export default LoginPage;
