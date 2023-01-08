import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { userLoginAction, userSignUpAction } from '../store/actions/user.action';
import { BASE_URL, URL } from '../config/baseUrl';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const { error, loading, user } = useSelector((state) => state.users);
  // const [url, setUrl] = useState('');

  // const getUrl = () => {
  //   if (typeof window === 'undefined') {
  //     setUrl(BASE_URL);
  //   } else {
  //     setUrl(URL);
  //   }
  // };

  // useEffect(() => {
  //   getUrl();
  // }, [url]);

  // console.log(url);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignUp = ({ name, email, password, passwordConform }) => {
    dispatch(userSignUpAction({ name, email, password, passwordConform, url: '/' }));
  };

  const handleLogin = (email, password) => {
    dispatch(userLoginAction({ email, password }));
  };

  return { handleSignUp, handleLogin, router, error, loading, user };
};
