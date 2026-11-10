import React from 'react';
import './Home.css';

const Data = () => {
  return (
    <div className='home__data'>
      <div className="home__eyebrow">
        <span className="home__dot"></span>
        <span>Systems &amp; EDA Infrastructure Engineer</span>
      </div>

      <h1 className='home__title'>
        Khoa Bui
      </h1>

      <p className='home__tagline'>
        Building and operating reliable simulation compute fleets, bare-metal server pipelines, and automated hardware test regression frameworks.
      </p>

      <p className='home__description'>
        Specialized in enterprise ECAD/EDA environments, high-throughput RTL verification workflows, bare-metal PXE/Ansible fleet orchestration, and component-level server diagnostics across Dell PowerEdge and HPE ProLiant hardware.
      </p>

      <div className="home__actions">
        <a href="#contact" className="button button--flex">
          Get In Touch <i className="uil uil-arrow-right button__icon"></i>
        </a>
        <a href="#portfolio" className="button button--secondary button--flex">
          View Engineering Work
        </a>
      </div>

      <div className="home__meta-specs">
        <div className="spec-tag">
          <span className="spec-label">SPECIALIZATION</span>
          <span className="spec-value">EDA Infrastructure</span>
        </div>
        <div className="spec-tag">
          <span className="spec-label">PLATFORMS</span>
          <span className="spec-value">RHEL • Proxmox • Dell/HPE</span>
        </div>
        <div className="spec-tag">
          <span className="spec-label">AUTOMATION</span>
          <span className="spec-value">Python • Bash • Ansible</span>
        </div>
      </div>
    </div>
  );
};

export default Data;
