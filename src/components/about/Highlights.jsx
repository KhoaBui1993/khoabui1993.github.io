import React from 'react';
import './Highlights.css';

const highlights = [
  {
    icon: "bx bx-server",
    metric: "100%",
    title: "Bare-Metal Automation",
    desc: "Engineered automated PXE boot & Ansible pipelines across high-density enterprise RHEL server fleets, reducing provisioning cycles."
  },
  {
    icon: "bx bx-chip",
    metric: "HIL Validated",
    title: "Firmware & SDR Bring-Up",
    desc: "Spearheaded NXP Layerscape LA12xx board bring-up, validating SDR baseband firmware, POST sequences, and BIOS/UEFI parameters."
  },
  {
    icon: "bx bx-line-chart",
    metric: "30% Faster",
    title: "Test Cycle Reduction",
    desc: "Built Python & Bash regression frameworks and GUI automation tools cutting regression cycles by 30% with automated defect triage."
  },
  {
    icon: "bx bx-shield-quarter",
    metric: "24/7",
    title: "Compute Fleet Reliability",
    desc: "Administered Dell PowerEdge & HPE ProLiant enterprise servers via iDRAC/iLO/IPMI, Proxmox VE virtualization, and RAID storage."
  }
];

const Highlights = () => {
  return (
    <div className="highlights__container">
      <div className="highlights__grid">
        {highlights.map((item, idx) => (
          <div className="highlight__card" key={idx}>
            <div className="highlight__top">
              <div className="highlight__icon-box">
                <i className={`${item.icon} highlight__icon`}></i>
              </div>
              <span className="highlight__metric">{item.metric}</span>
            </div>
            <h4 className="highlight__title">{item.title}</h4>
            <p className="highlight__desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
