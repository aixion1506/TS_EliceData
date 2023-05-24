import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/MainPage/Main';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
};

export default App;
