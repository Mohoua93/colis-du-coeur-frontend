// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Maraudes from './pages/Maraudes';
import ColisAlimentaires from './pages/ColisAlimentaires';
import ProjetsNationaux from './pages/ProjetsNationaux';
import ProjetsInternationaux from './pages/ProjetsInternationaux';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maraudes" element={<Maraudes />} />
        <Route path="/colis-alimentaires" element={<ColisAlimentaires />} />
        <Route path="/projets-nationaux" element={<ProjetsNationaux />} />
        <Route path="/projets-internationaux" element={<ProjetsInternationaux />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;





