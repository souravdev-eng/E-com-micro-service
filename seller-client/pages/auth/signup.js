import React from 'react';
import Link from 'next/link';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { signupValidationSchema } from '../../validation';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../styles/Signup.module.css';

const SignupPage = () => {
  const { handleSignUp, error, loading, router, user } = useAuth();
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
        <h3 className={styles.formTitle}>Create new seller account</h3>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            passwordConform: '',
          }}
          onSubmit={(values) => {
            handleSignUp(values);
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
                id='name'
                name='name'
                placeholder='Enter your name'
                type='text'
                className={styles.formTextInput}
              />
              <ErrorMessage name='name'>
                {(msg) => <div className={styles.formErrorMsg}>{msg}</div>}
              </ErrorMessage>
              <Field
                id='email'
                name='email'
                placeholder=' Enter your email'
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

              <Field
                id='passwordConform'
                name='passwordConform'
                placeholder='Enter your password again'
                type='password'
                className={styles.formTextInput}
              />
              <ErrorMessage name='passwordConform'>
                {(msg) => <div className={styles.formErrorMsg}>{msg}</div>}
              </ErrorMessage>

              <div className={styles.formButtonWrapper}>
                <button className={styles.button}>Signup</button>
              </div>
              <p className={styles.formLink}>
                Already have an account?{' '}
                <Link href='/auth/login'>
                  <span className={styles.textBlue}>Click to login</span>
                </Link>
              </p>
            </Form>
          </>
        </Formik>
      </div>
    </div>
  );
};

export default SignupPage;
