import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages';
import SignUpPage from './pages/AuthPage/SignUpPage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/auth/login' element={<LoginPage />} />
        <Route path='/auth/signup' element={<SignUpPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
