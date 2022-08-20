import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ContentPage from './screens/ContentPage';
import LandingPage from './screens/LandingPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/resource/:id' element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
