import { useEffect, useState } from 'react';
import './Navigation.css';
import Resume from '../../assets/Almat Resume SD.pdf';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <a href="#hero" className="nav-name">Almat Bolatbekov</a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="https://linkedin.com/in/almat-bolatbekov" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/AlmatB22" target="_blank" rel="noreferrer">GitHub</a>
        <a href={Resume} target="_blank" rel="noreferrer" className="nav-resume">Resume</a>
      </div>
    </nav>
  );
}

export default Navigation;
