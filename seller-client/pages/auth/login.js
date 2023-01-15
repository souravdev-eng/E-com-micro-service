import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useSession } from 'next-auth/client';
import styles from '../../styles/Signup.module.css';

const LoginPage = () => {
  const { handleLogin, error, router, user } = useAuth();
  const [session, loading] = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && loading) return null;

    if (typeof window !== 'undefined' && !session) {
      router.push('/login');
    }
    router.push('/');
  }, []);

  // useEffect(() => {
  //   if (user !== null && user.id) {
  //     router.push('/');
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h3 className={styles.formTitle}>Login to your seller account</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          {error &&
            error.map((el, idx) => (
              <div className={styles.formErrorMsg} key={idx}>
                {el.message}
              </div>
            ))}

          <input
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            className={styles.formTextInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            id='password'
            name='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
            className={styles.formTextInput}
          />

          <div className={styles.formButtonWrapper}>
            <button className={styles.button} type='submit'>
              Login
            </button>
          </div>
          <p className={styles.formLink}>
            Don't have an account?{' '}
            <Link href='/auth/signup'>
              <span className={styles.textBlue}>Click to signup</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
