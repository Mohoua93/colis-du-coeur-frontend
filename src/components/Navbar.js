// src/components/Navbar.js
import React, { useState } from 'react';
import '../styles/navbar.css'; // Assurez-vous que le chemin est correct
import logo from '../assets/logo.png';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Menu burger à gauche */}
      <div className={`menu ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>

      {/* Logo centré */}
      <div className="logo">
        <img src={logo} alt="Logo Colis du Cœur" />
      </div>

      {/* Liens de navigation qui s'ouvrent depuis la droite */}
      <div className={`nav-links ${open ? 'open' : ''}`}>  
        <a href="/">Accueil</a>
        <a href="/about">À propos</a>
        <a href="/don">Faire un don</a>
      </div>
    </nav>
  );
}

export default Navbar;