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
          <Form className='form'>
            <h3 className='form__title'>Login with email & password</h3>
            {error &&
              error.map((el: any, idx: number) => (
                <div className='form__error-msg' key={idx}>
                  {el.message}
                </div>
              ))}
            <Field
              id='email'
              name='email'
              placeholder='Enter your email'
              type='email'
              className='form__text-input'
            />
            <ErrorMessage name='email' data-testid='emailError'>
              {(msg) => <div className='form__error-msg'>{msg}</div>}
            </ErrorMessage>

            <Field
              id='password'
              name='password'
              type='password'
              placeholder='Enter your password'
              className='form__text-input'
            />
            <ErrorMessage name='password' data-testid='passwordError'>
              {(msg) => {
                return <div className='form__error-msg'>{msg}</div>;
              }}
            </ErrorMessage>
            <div className='form__button-wrapper'>
              <Button title='Login' type='submit' />
            </div>
            <p className='form__link'>
              Don't have an account?{' '}
              <Link className='form__link--text' to='/auth/signup'>
                <span className='form__link--text--blue'>Click to signup</span>
              </Link>
            </p>
          </Form>
        </>
      </Formik>
    </div>
  );
};

export default LoginPage;
