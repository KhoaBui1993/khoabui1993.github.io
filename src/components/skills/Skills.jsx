import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "Systems & Virtualization",
    icon: "bx bx-server",
    skills: [
      { name: "Linux (RHEL, Ubuntu)", level: "Advanced" },
      { name: "Proxmox VE & KVM", level: "Intermediate" },
      { name: "PXE Boot Provisioning", level: "Advanced" },
      { name: "Ansible Automation", level: "Intermediate" },
      { name: "OpenLDAP & RBAC", level: "Intermediate" },
      { name: "Linux Containers", level: "Intermediate" }
    ]
  },
  {
    title: "Hardware & Infrastructure",
    icon: "bx bx-chip",
    skills: [
      { name: "Dell PowerEdge", level: "Advanced" },
      { name: "HPE ProLiant", level: "Advanced" },
      { name: "iDRAC, iLO & IPMI", level: "Advanced" },
      { name: "RAID (PERC & LSI)", level: "Intermediate" },
      { name: "NVMe, SAS & SATA", level: "Intermediate" },
      { name: "Rack-and-Stack & PDU", level: "Advanced" }
    ]
  },
  {
    title: "Firmware & Test Validation",
    icon: "bx bx-test-tube",
    skills: [
      { name: "Hardware-in-the-Loop", level: "Advanced" },
      { name: "POST & BIOS/UEFI", level: "Advanced" },
      { name: "NXP Layerscape LA12xx", level: "Intermediate" },
      { name: "Firmware Flashing", level: "Advanced" },
      { name: "CodeWarrior", level: "Intermediate" },
      { name: "MemTest86 & Prime95", level: "Advanced" }
    ]
  },
  {
    title: "Scripting, DB & Tools",
    icon: "bx bx-code-alt",
    skills: [
      { name: "Python Automation", level: "Advanced" },
      { name: "Bash Scripting", level: "Advanced" },
      { name: "C / C++ & Java", level: "Intermediate" },
      { name: "SQL (MySQL, SQLite3)", level: "Intermediate" },
      { name: "Git & Jira Workflow", level: "Advanced" },
      { name: "REST APIs & PyQt", level: "Intermediate" }
    ]
  }
];

const Skill = () => {
  return (
    <section className="skills section" id='skills'>
      <h2 className="section__title">Skills & Capabilities</h2>
      <span className="section__subtitle">{"//"} TECHNICAL STACK MATRIX</span>
      <div className="skills__container container grid">
        {skillCategories.map((cat, idx) => (
          <div className="skills__content tech-corner-card" key={idx}>
            <h3 className="skills__title">
              <i className={`${cat.icon} skills__title-icon`}></i>
              {cat.title}
            </h3>
            <div className="skills__box">
              {cat.skills.map((skill, sIdx) => (
                <div className="skills__data" key={sIdx}>
                  <i className="bx bx-badge-check"></i>
                  <div>
                    <h3 className="skills__name">{skill.name}</h3>
                    <span className="skills__level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
