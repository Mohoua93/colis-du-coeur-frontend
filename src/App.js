// src/App.js
import React from 'react';
// Import global des styles de la navbar
import './styles/navbar.css';
import './styles/home.css';
import './styles/contact.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Maraudes from './pages/Maraudes';
import ColisAlimentaires from './pages/ColisAlimentaires';
import ProjetsNationaux from './pages/ProjetsNationaux';
import Bengladesh from './pages/Bengladesh';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      {/* Navbar globale */}
      <Navbar />

      {/* Contenu : on ajoute un padding-top = hauteur de la navbar */}
      <div className="app-content" style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maraudes" element={<Maraudes />} />
          <Route path="/colis-alimentaires" element={<ColisAlimentaires />} />
          <Route path="/projets-nationaux" element={<ProjetsNationaux />} />
          <Route path="/bengladesh" element={<Bengladesh />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}








