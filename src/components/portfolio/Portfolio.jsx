import React from 'react';
import './Portfilio.css';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section className="work section" id='portfolio'>
      <div className="container">
        <h2 className="section__title">Featured Projects</h2>
        <span className="section__subtitle">SYSTEM IMPLEMENTATIONS &amp; CASE STUDIES</span>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
