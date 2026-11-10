import React from 'react';
import './About.css';
import AboutImg from '../../Upload/Me.jpg';
import CV from '../../Upload/Khoa_Resume_1.pdf';
import Info from './Info';
import Highlights from './Highlights';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className='section__title'>About &amp; Technical Background</h2>
        <span className="section__subtitle">SYSTEM ARCHITECTURE &amp; OPERATIONS</span>

        <div className='about__container grid'>
          <div className="about__image-column">
            <div className="about__frame">
              <img src={AboutImg} alt="Khoa Bui" className='about__img' />
              <div className="about__img-badge">
                <span className="caption-dot"></span>
                <span>EDA &amp; LINUX INFRASTRUCTURE</span>
              </div>
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
            <div className="about__actions">
              <a download="Khoa_Bui_Resume.pdf" href={CV} className="button button--flex">
                Download Resume <i className="bx bx-download button__icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Engineering Impact Data Sheet */}
        <Highlights />
      </div>
    </section>
  );
};

export default About;
