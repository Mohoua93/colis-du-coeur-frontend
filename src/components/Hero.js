// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/img-don1.jpg'; // importe ton image hero

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Bienvenue chez Colis du Cœur</h1>
        <p>Ensemble, apportons réconfort et chaleur humaine.</p>
        <button className="hero-button">Découvrez nos actions</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Action humanitaire" />
      </div>
    </section>
  );
}

export default Hero;