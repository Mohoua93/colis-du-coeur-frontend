import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/navbar.css';
import '../styles/projet-int.css';
import logo from '../assets/logo.png';
import distribAlim1 from '../assets/distribAlim1.jpeg';
import distribAlim2 from '../assets/distribAlim2.jpeg';
import distribAlim3 from '../assets/distribAlim3.jpeg';
import projectVideo from '../assets/distribRepas.mp4';

const images = [distribAlim1, distribAlim2, distribAlim3];

export default function ProjetInternationaux() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navRef = useRef(null);

  // Close menu when clicking outside
  const handleClickOutside = useCallback(
    (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    },
    [menuOpen]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  const prevSlide = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextSlide = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  const toggleMenu = (e) => { e.stopPropagation(); setMenuOpen((o) => !o); };
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="navbar"
        ref={navRef}
        onClick={(e) => e.stopPropagation()}
        aria-label="Main navigation"
      >
        <button
          className={`burger-menu ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Colis du Cœur logo" className="logo" />
        </Link>

        <div className={`nav-items ${menuOpen ? 'open' : ''}`}> 
          {['/', '/maraudes', '/colis-alimentaires', '/projets-nationaux', '/projets-internationaux', '/about', '/contact'].map((path, idx) => {
            const labels = ['Accueil', 'Maraudes', 'Colis Alimentaires', 'Projets Nationaux', 'Projets Internationaux', 'À propos', 'Contact'];
            return (
              <Link key={path} to={path} onClick={handleLinkClick}>
                {labels[idx]}
              </Link>
            );
          })}
        </div>
      </nav>

      <header className="slider-header">
        <div className="slider-container">
          <button
            className="chevron arrow left"
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={images[currentIndex]}
            alt={`International project slide ${currentIndex + 1}`}
            className="slider-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="chevron arrow right"
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            aria-label="Next slide"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      </header>

      <main className="projets-content">
        {/* Section description pour faciliter la maintenance */}
        <section className="description-section">
          <h1>🌟 Ensemble, nourrissons l'espoir ! 🌟</h1>
          <div className='section-p'>
          <p>
            Depuis 2022, Les Colis du Cœur est engagé chaque mois dans une mission essentielle : distribuer des repas au Bangladesh 🇧🇩 pour celles et ceux qui en ont le plus besoin. Chaque jour, nous apportons notre aide à 12 orphelinats, offrant chaleur et réconfort à des centaines d'enfants.
          </p>
          <p>
            Grâce à cette mobilisation, nous atteigons aujourd'hui une moyenne de 1100 repas distribués chaque mois. C'est une victoire collective mais aaussi un combat quotidien.
          </p>
          <p>
            👉 Ce combat, nous ne pouvons pas le mener seuls.
          </p>
          <p>
            C'est pourquoi nous faisons appel à vous: ➡️ Particulier, entreprise, donatrices, donateurs, partenaires solidaires... Chaque geste, chaaque contribution fait une réelle différence.
          </p>
          <p>
            💛 Soutenir les Colis du Cœur, c'est nourrir bien plus que des ventres. C'est nourrir l'espoir, la dignité et l'avenir de ces enfants.
          </p>
          <p>
            Ensemble, faisons en sorte que personne ne soit laissé de côté. 🙏 Rejoignez le mouvement.
          </p>
          </div>
        </section>

        {/* Section vidéo */}
        <section className="video-section">
          <h2>Distribution de repas au Bengladesh</h2>
          <video
            className="project-video"
            controls
            preload="metadata"
          >
            <source src={projectVideo} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </section>

        {/* TODO: Ajouter partenaires, témoignages, carte interactive, etc. */}
      </main>
    </>
  );
}





