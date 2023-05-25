import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './pages/MainPage/Main';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
