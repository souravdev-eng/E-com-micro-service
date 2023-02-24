import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetails';
import LoginPage from './pages/AuthPage/LoginPage';
import SignUpPage from './pages/AuthPage/SignUpPage';

import { useAppDispatch } from './hooks/useAppRedux';
import { currentUserAction } from './store/actions/user.action';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(currentUserAction());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/signup' element={<SignUpPage />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
