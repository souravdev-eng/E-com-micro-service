import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/AuthPage/LoginPage';
import SignUpPage from './pages/AuthPage/SignUpPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
