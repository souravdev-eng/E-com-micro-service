import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Formik, Field, FormikHelpers, ErrorMessage } from 'formik';
import { logInSchema } from '../../../validation/authFormValidation';
import Button from '../../../components/Button';
<<<<<<< HEAD:web/src/pages/AuthPage/LoginPage/index.tsx
import './styles.scss';
=======
import './login.style.scss';
>>>>>>> f7d32683f5fcb36fb644163ea61bc196c2986aa4:web/src/pages/AuthPage/LoginPage/LoginPage.tsx

interface Values {
  email: string;
  password: string;
}

const LoginPage = () => {
  const handleSubmit = (email: string, password: string) => {
    console.log(email, password);
  };

  return (
    <div className='container'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={({ email, password }: Values, { resetForm }: FormikHelpers<Values>) => {
          handleSubmit(email, password);
          resetForm();
        }}
        validationSchema={logInSchema}>
        <>
          <Form className='form'>
            <h3 className='form__title'>Login with email & password</h3>

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
              placeholder='Enter your password'
              type='password'
              className='form__text-input'
            />
            <ErrorMessage name='password' data-testid='passwordError'>
              {(msg) => {
                console.log(msg);
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
