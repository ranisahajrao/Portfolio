import './Header.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Resume from '../assets/PradnyaSahajrao_CV.pdf';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleTheme() {
    const html = document.getElementsByTagName('html')[0];
    html.classList.toggle('light');
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header-container header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Pradnya"}</span>
          <span>{" Sahajrao/>"}</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={menuOpen ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href={Resume} download className="button">
            Resume
          </a>
        </nav>

        <div
          aria-expanded={menuOpen ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className={menuOpen ? 'menu active' : 'menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        ></div>
      </Router>
    </header>
  );
}
