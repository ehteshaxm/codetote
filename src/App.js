import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ContentPage from './screens/ContentPage';
import LandingPage from './screens/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/resource/:id' element={<ContentPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
