// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/navbar.css'; // Import des styles de la navbar
import logo from '../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const close  = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className={`menu ${open ? 'open' : ''}`} onClick={toggle}>
        <div className="bar bar1" />
        <div className="bar bar2" />
        <div className="bar bar3" />
      </div>
      <div className="logo">
        <img src={logo} alt="Logo Colis du Cœur" />
      </div>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="/"      onClick={close}>Accueil</a>
        <a href="/about" onClick={close}>À propos</a>
        <a href="/don"   onClick={close}>Faire un don</a>
      </div>
    </nav>
  );
}


