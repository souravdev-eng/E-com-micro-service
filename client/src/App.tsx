import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetails';
import LoginPage from './pages/AuthPage/LoginPage';
import SignUpPage from './pages/AuthPage/SignUpPage';

import { useAppDispatch, useAppSelector } from './hooks/useAppRedux';
import { currentUserAction } from './store/actions/user.action';

const App = () => {
  const dispatch = useAppDispatch();
  const { user, loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(currentUserAction());
  }, [dispatch]);

  const Protected = ({ isSignedIn, children }: any) => {
    if (isSignedIn === null) {
      return <Navigate to='/auth/login' replace />;
    }
    return children;
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/signup' element={<SignUpPage />} />
        <Route
          path='/'
          element={
            <Protected isSignedIn={user}>
              <HomePage />
            </Protected>
          }
        />
        <Route
          path='/product/:id'
          element={
            <Protected isSignedIn={user}>
              <ProductDetail />
            </Protected>
          }
        />
      </Routes>
    </>
  );
};

export default App;
