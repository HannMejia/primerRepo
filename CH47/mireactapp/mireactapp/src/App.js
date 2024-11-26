import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/contactPage';
import { Toolbar } from '@mui/material';

const App = () => {
  return (
    <Router>
      <SideMenu />
      <Toolbar /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
