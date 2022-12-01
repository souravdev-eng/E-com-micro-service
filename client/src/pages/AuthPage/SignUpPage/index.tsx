import { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { signupValidationSchema } from '../../../validation';
import { Button } from '../../../components';
import './styles.scss';
import Loader from '../../../components/Loader';
import { useSignUpPageHook } from './hooks';

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
  }, [user, redirect]);

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
          <Form className='form'>
            <h3 className='form__title'>Create new account</h3>
            {error &&
              error.map((el: any, idx: number) => (
                <div className='form__error-msg' key={idx}>
                  {el.message}
                </div>
              ))}
            <Field
              id='name'
              name='name'
              placeholder='Your name'
              type='text'
              className='form__text-input'
            />
            <ErrorMessage name='name'>
              {(msg) => <div className='form__error-msg'>{msg}</div>}
            </ErrorMessage>
            <Field
              id='email'
              name='email'
              placeholder='Your email'
              type='email'
              className='form__text-input'
            />
            <ErrorMessage name='email'>
              {(msg) => <div className='form__error-msg'>{msg}</div>}
            </ErrorMessage>
            <Field
              id='password'
              name='password'
              placeholder='Password'
              type='password'
              className='form__text-input'
            />
            <ErrorMessage name='password'>
              {(msg) => <span className='form__error-msg'>{msg}</span>}
            </ErrorMessage>
            <Field
              id='passwordConform'
              name='passwordConform'
              placeholder='Password again'
              type='password'
              className='form__text-input'
            />
            <ErrorMessage name='passwordConform'>
              {(msg) => <div className='form__error-msg'>{msg}</div>}
            </ErrorMessage>
            <div className='form__button-wrapper'>
              <Button title='Login' />
            </div>
            <p className='form__link'>
              Don't have an account?{' '}
              <Link className='form__link--text' to='/auth/login'>
                <span className='form__link--text--blue'>Click to login</span>
              </Link>
            </p>
          </Form>
        </>
      </Formik>
    </div>
  );
};

export default SignUpPage;
