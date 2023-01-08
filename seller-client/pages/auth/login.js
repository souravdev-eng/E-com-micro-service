import React from 'react';
import Link from 'next/link';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { signupValidationSchema } from '../../validation';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../styles/Signup.module.css';

const LoginPage = () => {
  const { handleLogin, error, loading, router, user } = useAuth();
  // useEffect(() => {
  //   if (user !== null && error === null) {
  //     router.push('/');
  //   }
  // }, [user, error, navigate]);

  // useEffect(() => {
  //   if (user !== null && user.id) {
  //     router.push('/');
  //   }
  // }, []);

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h3 className={styles.formTitle}>Login to your seller account</h3>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            console.log(values);
            handleLogin(values);
          }}
          validationSchema={signupValidationSchema}>
          <>
            <Form className={styles.form}>
              {error &&
                error.map((el, idx) => (
                  <div className={styles.formErrorMsg} key={idx}>
                    {el.message}
                  </div>
                ))}
              <Field
                id='email'
                name='email'
                placeholder='Enter your email'
                type='text'
                className={styles.formTextInput}
              />
              <ErrorMessage name='email'>
                {(msg) => <div className={styles.formErrorMsg}>{msg}</div>}
              </ErrorMessage>
              <Field
                id='password'
                name='password'
                placeholder='Enter your password'
                type='password'
                className={styles.formTextInput}
              />
              <ErrorMessage name='password'>
                {(msg) => <div className={styles.formErrorMsg}>{msg}</div>}
              </ErrorMessage>

              <div className={styles.formButtonWrapper}>
                <button className={styles.button} onClick={handleLogin}>
                  Login
                </button>
              </div>
              <p className={styles.formLink}>
                Don't have an account?{' '}
                <Link href='/auth/signup'>
                  <span className={styles.textBlue}>Click to signup</span>
                </Link>
              </p>
            </Form>
          </>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
