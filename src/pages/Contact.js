import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import '../styles/contact.css';

// Import du logo
import logo from '../assets/logo.png';

export default function NavbarWithContact() {
  // State pour le menu burger
  const [menuOpen, setMenuOpen] = useState(false);
  // State pour le formulaire
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = () => {
      if (menuOpen) setMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Handlers menu
  const stopPropagation = (e) => e.stopPropagation();
  const handleLinkClick = () => setMenuOpen(false);

  // Handlers formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erreur réseau');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <nav className="navbar" onClick={stopPropagation}>
        <button
          className="burger-menu"
          aria-label="Toggle menu"
          onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <Link to="/" onClick={() => { stopPropagation(); handleLinkClick(); }}>
          <img src={logo} alt="Logo Colis du Cœur" className="logo" />
        </Link>

        <div className={`nav-items ${menuOpen ? 'open' : ''}`} onClick={stopPropagation}>
          <Link to="/" onClick={handleLinkClick}>Accueil</Link>
          <Link to="/maraudes" onClick={handleLinkClick}>Maraudes</Link>
          <Link to="/colis-alimentaires" onClick={handleLinkClick}>Colis Alimentaires</Link>
          <Link to="/projets-nationaux" onClick={handleLinkClick}>Projets Nationaux</Link>
          <Link to="/projets-internationaux" onClick={handleLinkClick}>Projets Internationnels</Link>
          <Link to="/about" onClick={handleLinkClick}>À propos</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>
      </nav>

      <div className="contact-page">
        <section className="contact-hero">
          <h1>Contactez-nous</h1>
          <p>Vous avez une question ou souhaitez des informations? Remplissez le formulaire ci-dessous. Nous vous garantissons une réponse sous 24 à 48h.</p>
        </section>

        <section className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Nom<span>*</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Email<span>*</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Message<span>*</span>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Envoi...' : 'Envoyer'}
              </button>

              {status === 'success' && <p className="success-message">Votre message a été envoyé !</p>}
              {status === 'error' && <p className="error-message">Une erreur est survenue. Veuillez réessayer.</p>}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}



