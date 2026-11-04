import React, { useState, useEffect } from 'react';
import "./Header.css";

const Header = () => {
  /*================ Theme State & Auto-detection ========================== */
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    // Default to dark mode (Option 1: Deep Slate & Electric Cobalt)
    // or adapt automatically to OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleOSThemeChange = (e) => {
      const manuallySet = localStorage.getItem('portfolio-theme-manual');
      if (!manuallySet) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleOSThemeChange);
    return () => mediaQuery.removeEventListener('change', handleOSThemeChange);
  }, []);

  const toggleTheme = () => {
    localStorage.setItem('portfolio-theme-manual', 'true');
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  /*================ Show Background Header ========================== */
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        if (window.scrollY >= 80) {
          header.classList.add("scroll-header");
        } else {
          header.classList.remove("scroll-header");
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /*================ Toggle Menu ========================== */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='#home' className='nav__logo'>
          <span className="nav__logo-dot"></span>
          Khoa Bui
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a 
                href='#home' 
                onClick={() => { setActiveNav('#home'); showMenu(false); }} 
                className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>
            <li className='nav__item'>
              <a 
                href='#about' 
                onClick={() => { setActiveNav('#about'); showMenu(false); }} 
                className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>
            <li className='nav__item'>
              <a 
                href='#skills' 
                onClick={() => { setActiveNav('#skills'); showMenu(false); }} 
                className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>
            <li className='nav__item'>
              <a 
                href='#qualification' 
                onClick={() => { setActiveNav('#qualification'); showMenu(false); }} 
                className={activeNav === '#qualification' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-briefcase-alt nav__icon'></i> Experience
              </a>
            </li>
            <li className='nav__item'>
              <a 
                href='#portfolio' 
                onClick={() => { setActiveNav('#portfolio'); showMenu(false); }} 
                className={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-scenery nav__icon'></i> Projects
              </a>
            </li>
            <li className='nav__item'>
              <a 
                href='#contact' 
                onClick={() => { setActiveNav('#contact'); showMenu(false); }} 
                className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
        </div>

        <div className="nav__actions">
          <button 
            type="button" 
            className="theme__toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <i className={theme === 'dark' ? 'bx bx-sun' : 'bx bx-moon'}></i>
          </button>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}> 
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
