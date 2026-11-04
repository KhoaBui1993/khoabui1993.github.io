import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">Khoa Bui</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#qualification" className="footer__link">Experience</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/khoa-bui" className="footer__social-link" target="_blank" rel="noreferrer" title="LinkedIn">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/KhoaBui1993" className="footer__social-link" target="_blank" rel="noreferrer" title="GitHub">
            <i className="bx bxl-github"></i>
          </a>
          <a href="mailto:khoathanhbui@gmail.com" className="footer__social-link" target="_blank" rel="noreferrer" title="Email">
            <i className="bx bx-envelope"></i>
          </a>
        </div>
        <span className="footer__copy">
          &#169; Khoa Bui. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
