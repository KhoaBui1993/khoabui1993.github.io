import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box tech-corner-card">
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3+ Years Industry</span>
      </div>
      <div className="about__box tech-corner-card">
        <i className='bx bx-chip about__icon'></i>
        <h3 className="about__title">Specialization</h3>
        <span className="about__subtitle">EDA & Systems</span>
      </div>
      <div className="about__box tech-corner-card">
        <i className='bx bxs-graduation about__icon'></i>
        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">B.S. CS (SJSU)</span>
      </div>
    </div>
  );
};

export default Info;
