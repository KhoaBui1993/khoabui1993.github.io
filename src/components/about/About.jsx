import React from 'react';
import './About.css';
import AboutImg from '../../Upload/Me.jpg';
import CV from '../../Upload/Khoa_Resume_1.pdf';
import Info from './Info';
import Highlights from './Highlights';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className='section__title'>About Me</h2>
      <span className="section__subtitle">{"//"} SYSTEM OVERVIEW & ARCHITECTURE</span>

      <div className='about__container container grid'>
        <div style={{ position: 'relative', justifySelf: 'center' }}>
          <img src={AboutImg} alt="Khoa Bui" className='about__img' />
          <div className="about__img-badge">
            <span className="hud__status-dot"></span>
            <span>SYSTEMS & EDA</span>
          </div>
        </div>

        <div className="about__data">
          <Info />
          <p className="about__description">
            I am an engineer with hands-on experience in enterprise ECAD/EDA environments, simulation compute infrastructure, and Linux systems administration. At Hughes Network Systems, I administered enterprise EDA ecosystems, configured and monitored high-throughput compute infrastructure for continuous RTL simulations, and engineered Python and Bash automation scripts for defect triage and execution tracking.
          </p>
          <p className="about__description">
            From architecting automated bare-metal provisioning pipelines using PXE boot and Ansible across high-density server fleets to diagnosing component-level faults across Dell PowerEdge/HPE ProLiant hardware, I ensure reliable, high-performance compute and lab infrastructure for engineering teams.
          </p>
          <a download="Khoa_Bui_Resume.pdf" href={CV} className="button button--cyber button--flex">
            Download Resume <i className="bx bx-download button__icon"></i>
          </a>
        </div>
      </div>

      {/* Engineering Impact & Architecture Highlights */}
      <div className="container">
        <Highlights />
      </div>
    </section>
  );
};

export default About;
