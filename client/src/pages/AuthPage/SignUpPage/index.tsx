import { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { signupValidationSchema } from '../../../validation';
import { Button, Loader } from '../../../components';
import { useSignUpPageHook } from './hooks';
import './styles.scss';

interface Values {
  name: string;
  email: string;
  password: string;
  passwordConform: string;
}

const SignUpPage = () => {
  const { handleSignUp, error, loading, navigate, user } = useSignUpPageHook();

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
          name: '',
          email: '',
          password: '',
          passwordConform: '',
        }}
        onSubmit={(values: Values) => {
          handleSignUp(values);
        }}
        validationSchema={signupValidationSchema}>
        <>
          <Form className='w-1/3 shadow-xl px-10 pt-4 py-10 shadow-slate-300 rounded-lg'>
            <h3 className='text-2xl font-semibold text-blue-600 mt-4 mb-2 text-center'>
              Create new account
            </h3>
            {error &&
              error.map((el: any, idx: number) => (
                <div className='form__error-msg' key={idx}>
                  {el.message}
                </div>
              ))}
            <div className='flex flex-col'>
              <Field
                id='name'
                name='name'
                placeholder='Your name'
                type='text'
                className='rounded-md text-lg h-16 border border-gray-200 p-4 w-3/2 mt-6 focus:bg-blue-100 hover:text-black-500 focus:outline-none focus:placeholder:text-blue-500'
              />
              <ErrorMessage name='name'>
                {(msg) => (
                  <div className='text-base text-red-500 font-semibold ml-15 self-start my-2'>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
              <Field
                id='email'
                name='email'
                placeholder='Your email'
                type='email'
                className='rounded-md text-lg h-16 border border-gray-200 p-4 w-3/2 mt-6 focus:bg-blue-100 hover:text-black-500 focus:outline-none focus:placeholder:text-blue-500'
              />
              <ErrorMessage name='email'>
                {(msg) => (
                  <div className='text-base text-red-500 font-semibold ml-15 self-start my-2'>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
              <Field
                id='password'
                name='password'
                placeholder='Password'
                type='password'
                className='rounded-md text-lg h-16 border border-gray-200 p-4 w-3/2 mt-6 focus:bg-blue-100 hover:text-black-500 focus:outline-none focus:placeholder:text-blue-500'
              />
              <ErrorMessage name='password'>
                {(msg) => (
                  <div className='text-base text-red-500 font-semibold ml-15 self-start my-2'>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
              <Field
                id='passwordConform'
                name='passwordConform'
                placeholder='Password again'
                type='password'
                className='rounded-md text-lg h-16 border border-gray-200 p-4 w-3/2 mt-6 focus:bg-blue-100 hover:text-black-500 focus:outline-none focus:placeholder:text-blue-500'
              />
              <ErrorMessage name='passwordConform'>
                {(msg) => (
                  <div className='text-base text-red-500 font-semibold ml-15 self-start my-2'>
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
            <div className='form__button-wrapper'>
              <Button title='Login' />
            </div>
            <p className='text-base my-6 text-center'>
              Don't have an account?{' '}
              <Link to='/auth/login'>
                <span className='text-base my-6 text-blue-500 font-semibold'>Click to login</span>
              </Link>
            </p>
          </Form>
        </>
      </Formik>
    </div>
  );
};

export default SignUpPage;
