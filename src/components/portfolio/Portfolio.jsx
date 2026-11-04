import React from 'react';
import './Portfilio.css';
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section className="work section" id='portfolio'>
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Featured Engineering & Systems Work</span>
      <Projects />
    </section>
  );
};

export default Portfolio;
