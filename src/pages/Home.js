import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

// Import des images depuis le dossier assets
import logo from '../assets/logo.png';
import heroImage from '../assets/img-home.jpeg';
import imgDon1 from '../assets/img-don1.jpg';
import imgDon2 from '../assets/img-don2.jpg';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const navRef = useRef(null);

  // Fermer le menu et sous-menu quand on clique en dehors
  const handleClickOutside = useCallback((e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setMenuOpen(false);
      setSubmenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  // Empêcher la propagation du clic sur la navbar
  const stopPropagation = (e) => e.stopPropagation();

  // Ferme le menu et le sous-menu
  const handleLinkClick = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  // Toggle sous-menu Projets Internationaux
  const toggleSubmenu = (e) => {
    e.stopPropagation();
    setSubmenuOpen((o) => !o);
  };

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar" ref={navRef} onClick={stopPropagation}>
        <button
          className="burger-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={(e) => { e.stopPropagation(); setMenuOpen((o) => !o); }}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        {/* Logo cliquable renvoyant à la page d'accueil */}
        <Link to="/" onClick={(e) => { stopPropagation(e); handleLinkClick(); }}>
          <img src={logo} alt="Logo Colis du Cœur" className="logo" />
        </Link>

        {/* Panneau de navigation */}
        <div className={`nav-items ${menuOpen ? 'open' : ''}`} onClick={stopPropagation}>
          <Link to="/" onClick={handleLinkClick}>Accueil</Link>
          <Link to="/maraudes" onClick={handleLinkClick}>Maraudes</Link>
          <Link to="/colis-alimentaires" onClick={handleLinkClick}>Colis Alimentaires</Link>
          <Link to="/projets-nationaux" onClick={handleLinkClick}>Projets Nationaux</Link>

          {/* Projets Internationaux with collapse submenu */}
          <div className="nav-item submenu-toggle" onClick={toggleSubmenu}>
            <span>Projets Internationaux</span>
            <span className={`arrow ${submenuOpen ? 'open' : ''}`}>▾</span>
          </div>
          <div className={`submenu ${submenuOpen ? 'open' : ''}`}>
            <Link to="/bangladesh" onClick={handleLinkClick}>Bangladesh</Link>
            <Link to="/asie" onClick={handleLinkClick}>Asie</Link>
            <Link to="/ameriques" onClick={handleLinkClick}>Amériques</Link>
          </div>

          <Link to="/about" onClick={handleLinkClick}>À propos</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>
      </nav>

      {/* Bloc photo principale */}
      <section className="hero-image">
        <img
          src={heroImage}
          alt="Illustration Colis du Cœur"
          className="full-width-image"
        />
      </section>

      {/* Section descriptif des actions */}
      <section id="actions" className="actions-section">
        <p className="actions-text">
          Colis du Cœur agit chaque jour pour venir en aide aux plus démunis. À travers
          nos maraudes régulières, nous apportons du réconfort et de la nourriture aux
          personnes sans abri. Nous distribuons des colis alimentaires aux familles en
          difficulté, recensons les besoins urgents sur le terrain et mettons en place des
          solutions durables comme la construction de puits d’eau dans les zones isolées.
          Grâce à vos dons, nous organisons également des voyages humanitaires pour apporter
          une aide directe et humaine à ceux qui en ont le plus besoin.
        </p>
      </section>

      {/* Bloc deux photos */}
      <section className="image-pair">
        <img
          src={imgDon1}
          alt="Maraude humanitaire"
          className="half-image"
        />
        <img
          src={imgDon2}
          alt="Distribution de colis"
          className="half-image"
        />
      </section>

      {/* Bloc appel au don */}
      <section id="donate" className="donation-section">
        <p className="donation-text">
          Votre soutien est essentiel pour nous permettre de continuer notre mission.
          Chaque don, même le plus petit, contribue à améliorer la vie des personnes
          que nous aidons.
        </p>
        <button className="donation-button">Faire un don</button>
      </section>
    </div>
  );
}





