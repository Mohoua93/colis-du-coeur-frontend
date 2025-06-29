import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/navbar.css';
import '../styles/Bangladesh.css';
import logo from '../assets/logo.png';
import distribAlim1 from '../assets/distribAlim1.jpeg';
import distribAlim2 from '../assets/distribAlim2.jpeg';
import distribAlim3 from '../assets/distribAlim3.jpeg';
import iftarVideo from '../assets/iftarVideo.mp4';
import iftar1 from '../assets/iftar1.jpeg';
import iftar2 from '../assets/iftar2.jpeg';
import iftar3 from '../assets/iftar3.jpeg';
import coran1 from '../assets/coran1.jpeg';
import coran2 from '../assets/coran2.jpeg';
import coran3 from '../assets/coran3.jpeg';
import coran4 from '../assets/coran4.jpeg';
import videoCoran from '../assets/videoCoran.mp4';

const images = [distribAlim1, distribAlim2, distribAlim3];
const images2 = [iftar1, iftar2, iftar3];
const images3 = [coran1, coran2, coran3, coran4];

export default function Bangladesh() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const navRef = useRef(null);

  const handleClickOutside = useCallback(
    (e) => {
      if ((menuOpen || submenuOpen) && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
        setSubmenuOpen(false);
      }
    },
    [menuOpen, submenuOpen]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  // Carrousel 1
  const prevSlide = () => setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1));
  const nextSlide = () => setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1));

  // Carrousel 2
  const prevSlide2 = () => setCurrentIndex2(i => (i === 0 ? images2.length - 1 : i - 1));
  const nextSlide2 = () => setCurrentIndex2(i => (i === images2.length - 1 ? 0 : i + 1));

  // Carrousel 3
  const prevSlide3 = () => setCurrentIndex3(i => (i === 0 ? images3.length - 1 : i - 1));
  const nextSlide3 = () => setCurrentIndex3(i => (i === images3.length - 1 ? 0 : i + 1));

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(o => !o);
    if (menuOpen) setSubmenuOpen(false);
  };

  const toggleSubmenu = (e) => {
    e.stopPropagation();
    setSubmenuOpen(o => !o);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setSubmenuOpen(false);
  };

  return (
    <>
      <nav className="navbar" ref={navRef} onClick={e => e.stopPropagation()} aria-label="Main navigation">
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
          <Link to="/" onClick={handleLinkClick}>Accueil</Link>
          <Link to="/maraudes" onClick={handleLinkClick}>Maraudes</Link>
          <Link to="/colis-alimentaires" onClick={handleLinkClick}>Colis Alimentaires</Link>
          <Link to="/projets-nationaux" onClick={handleLinkClick}>Projets Nationaux</Link>
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

      {/* Premier carrousel */}
      <header className="slider-header">
        <div className="slider-container">
          <button className="chevron arrow left" onClick={e => { e.stopPropagation(); prevSlide(); }} aria-label="Previous slide">
            <ChevronLeft size={48} />
          </button>
          <img src={images[currentIndex]} alt={`International project slide ${currentIndex + 1}`} className="slider-image" onClick={e => e.stopPropagation()} />
          <button className="chevron arrow right" onClick={e => { e.stopPropagation(); nextSlide(); }} aria-label="Next slide">
            <ChevronRight size={48} />
          </button>
        </div>
      </header>

      <main className="projets-content">
        {/* Première section description */}
        <section className="description-section">
          <h1>🌟 Ensemble, nourrissons l'espoir ! 🌟</h1>
          <div className="section-p">
            <p>Depuis 2022, Les Colis du Cœur est engagé chaque mois dans une mission essentielle : distribuer des repas au Bangladesh 🇧🇩 pour celles et ceux qui en ont le plus besoin. Chaque jour, nous apportons notre aide à 12 orphelinats, offrant chaleur et réconfort à des centaines d’enfants.</p>
            <p>Grâce à cette mobilisation, nous atteignons aujourd’hui une moyenne de 1 100 repas distribués chaque mois. C’est une victoire collective, mais aussi un combat quotidien.</p>
            <p>👉 Ce combat, nous ne pouvons pas le mener seuls. Les besoins sont grands, les ressources limitées.</p>
            <p>C’est pourquoi nous faisons appel à vous : ➡️ Particuliers, entreprises, donateurs, donatrices, partenaires solidaires… Chaque geste, chaque contribution fait une réelle différence.</p>
            <p>💛 Soutenir Les Colis du Cœur, c’est nourrir bien plus que des ventres. C’est nourrir l’espoir, la dignité et l’avenir de ces enfants.</p>
            <p>Ensemble, faisons en sorte que personne ne soit laissé de côté. 🙏 Rejoignez le mouvement.</p>
          </div>
        </section>

        {/* Première vidéo */}
        <section className="video-section">
          <h2>Distribution de repas au Bangladesh</h2>
          <video className="project-video" controls preload="metadata">
            <source src={iftarVideo} type="video/mp4" />
          </video>
        </section>

        {/* Deuxième carrousel */}
        <header className="slider-header">
          <div className="slider-container">
            <button className="chevron arrow left" onClick={e => { e.stopPropagation(); prevSlide2(); }} aria-label="Previous slide">
              <ChevronLeft size={48} />
            </button>
            <img src={images2[currentIndex2]} alt={`Iftar slide ${currentIndex2 + 1}`} className="slider-image" onClick={e => e.stopPropagation()} />
            <button className="chevron arrow right" onClick={e => { e.stopPropagation(); nextSlide2(); }} aria-label="Next slide">
              <ChevronRight size={48} />
            </button>
          </div>
        </header>

        {/* Deuxième section description */}
        <section className="description-section">
          <h1>🌟 Iftar Bangladesh 🌟</h1>
          <div className="section-p">
            <p>Chaque année, pendant le mois sacré du Ramadan, nous organisons des distributions de repas pour les personnes dans le besoin. Ces moments de partage et de solidarité sont essentiels pour apporter un peu de réconfort à ceux qui traversent des périodes difficiles.</p>
          </div>
        </section>

        {/* Deuxième vidéo */}
        <section className="video-section">
          <h2>Vidéo Iftar</h2>
          <video className="project-video" controls preload="metadata">
            <source src={iftarVideo} type="video/mp4" />
          </video>
        </section>

        {/* Troisième carrousel */}
        <header className="slider-header">
          <div className="slider-container">
            <button className="chevron arrow left" onClick={e => { e.stopPropagation(); prevSlide3(); }} aria-label="Previous slide">
              <ChevronLeft size={48} />
            </button>
            <img src={images3[currentIndex3]} alt={`Coran slide ${currentIndex3 + 1}`} className="slider-image" onClick={e => e.stopPropagation()} />
            <button className="chevron arrow right" onClick={e => { e.stopPropagation(); nextSlide3(); }} aria-label="Next slide">
              <ChevronRight size={48} />
            </button>
          </div>
        </header>

        {/* Troisième section description */}
        <section className="description-section">
          <h1>📖❤️ Offrez un Coran pour seulement 5€ ! ❤️📖</h1>
          <div className="section-p">
            <p>L’association Les Colis du Cœur vous propose de participer à une action pleine de bénédictions : ➡️ Offrir un Coran à un enfant, un étudiant ou une personne en quête de savoir.
            </p>
            <p>
            💖 C’est ce qu’on appelle une Sadaqa Jariya :
            Une aumône continue, qui vous rapporte des récompenses tant que ce Coran sera lu, récité ou transmis. ✨
            </p>
            <p>
            🌟 Imaginez… Chaque verset lu, chaque mot appris, chaque prière récitée grâce à vous… Des bienfaits qui ne s’arrêtent jamais, même après votre départ. 🌙
            </p>
            <p>
            🕌 Ne laissez pas passer cette opportunité d’investir pour votre Akhira !
            </p>
            <p>
            ➡️ Seulement 5€ le Coran
            🤲 Participez à cette magnifique cause
            </p>
          </div>
        </section>

        {/* Troisième vidéo */}
        <section className="video-section">
          <h2>Vidéo dons de Coran</h2>
          <video className="project-video" controls preload="metadata">
            <source src={videoCoran} type="video/mp4" />
          </video>
        </section>
      </main>
    </>
  );
}
