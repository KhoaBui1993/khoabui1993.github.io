import React, { useState } from 'react';
import './Qualification.css';

const experiences = [
  {
    role: "EDA Engineer",
    company: "Hughes Network Systems",
    location: "Germantown, MD",
    period: "Jul 2023 - Dec 2025",
    bullets: [
      "Spearheaded board bring-up and hardware-in-the-loop (HIL) testing for NXP Layerscape LA12xx processors, validating SDR baseband firmware, POST sequences, and BIOS/UEFI parameters.",
      "Engineered Python and Bash-driven regression test suites to validate RTL designs, integrating automated execution pipelines and streamlining defect triage workflows.",
      "Architected automated bare-metal provisioning pipelines using PXE boot, Ansible playbooks, and Bash scripts, accelerating RHEL deployments across high-density server fleets.",
      "Administered enterprise ECAD/EDA software ecosystems, troubleshooting workflows, resolving system bugs, and conducting technical training for engineering teams.",
      "Diagnosed and resolved complex component-level hardware faults across Dell PowerEdge and HPE ProLiant platforms; leveraged iDRAC, iLO, and IPMI for out-of-band management.",
      "Developed and maintained internal web portals and telemetry dashboards that improved hardware Bill of Materials (BOM) tracking and lab resource allocation.",
      "Administered OpenLDAP directory services (centralized user authentication & RBAC) and executed enterprise rack-and-stack deployments in hardware labs."
    ],
    tags: ["Python", "Bash", "NXP Layerscape", "HIL Testing", "Ansible", "PXE Boot", "RHEL", "iDRAC/iLO", "OpenLDAP"]
  },
  {
    role: "Lab IT Support Specialist",
    company: "Vibrant America",
    location: "Santa Clara, CA",
    period: "Apr 2023 - Jul 2023",
    bullets: [
      "Troubleshot full-stack laboratory diagnostic applications using Java, Python, and SQL, resolving service-logic issues to improve application reliability and performance.",
      "Designed relational database schemas and automated data verification scripts, improving data accuracy and strengthening clinical application reliability.",
      "Partnered with the Lab Test Development team to define test automation requirements and maintain system runbooks, improving testing efficiency."
    ],
    tags: ["Java", "Python", "SQL", "Schema Design", "Automated Verification", "Test Runbooks"]
  },
  {
    role: "Software Quality Assurance Intern",
    company: "Netgear Inc.",
    location: "San Jose, CA",
    period: "Dec 2021 - May 2022",
    bullets: [
      "Built a Python test automation tool utilizing PyQt and REST APIs, cutting regression execution cycles by 30%.",
      "Authored 100+ test cases and documented 40+ verified defects for Android networking applications using Jira.",
      "Validated production router firmware builds through manual and automated testing, using Firebase runtime telemetry to identify issues and ensure stable releases."
    ],
    tags: ["Python", "PyQt", "REST APIs", "Test Automation", "Firmware QA", "Jira", "Firebase Telemetry"]
  },
  {
    role: "IT / Systems Support Engineer",
    company: "Ezvps",
    location: "Ho Chi Minh City, Vietnam",
    period: "Jan 2021 - Dec 2021",
    bullets: [
      "Deployed and maintained multi-tenant virtualization clusters using Proxmox VE, KVM, and Linux containers, enabling reliable, scalable infrastructure.",
      "Configured and optimized RAID 0, 1, 5, and 10 arrays on PERC and LSI controllers for enterprise SAS, SATA, and NVMe workloads.",
      "Validated server stability and performance through stress testing with MemTest86, Prime95, and vendor diagnostics, identifying hardware issues before commissioning.",
      "Delivered data center infrastructure by installing racks, deploying structured cabling, balancing PDU loads, and configuring switch uplinks."
    ],
    tags: ["Proxmox VE", "KVM", "Linux Containers", "RAID (PERC/LSI)", "MemTest86", "PDU Balancing", "Data Center"]
  }
];

const education = [
  {
    degree: "Bachelor of Science, Computer Science",
    institution: "San Jose State University",
    location: "San Jose, CA",
    period: "2020 - 2022",
    coursework: "Computer Architecture, Operating Systems, Data Structures & Algorithms, NoSQL Systems, Relational Database"
  },
  {
    degree: "Associate of Science, Computer Science",
    institution: "De Anza College",
    location: "Cupertino, CA",
    period: "2018 - 2020",
    coursework: "Core Computer Science Fundamentals, Calculus, Physics, Object-Oriented Programming"
  }
];

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Experience & Education</h2>
      <span className="section__subtitle">{"//"} SYSTEM LOGS & OPERATIONAL TRACK RECORD</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button ${toggleState === 1 ? "qualification__button-active" : ""}`}
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>

          <div
            className={`qualification__button ${toggleState === 2 ? "qualification__button-active" : ""}`}
            onClick={() => setToggleState(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i> Education
          </div>
        </div>

        <div className="qualification__sections">
          {/* Experience Tab */}
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {experiences.map((exp, idx) => (
              <div className="qualification__card tech-corner-card" key={idx}>
                <div className="qualification__card-header">
                  <div>
                    <h3 className="qualification__title">{exp.role}</h3>
                    <div className="qualification__subtitle">{exp.company}</div>
                  </div>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> {exp.period}
                  </div>
                </div>

                <div className="qualification__location">
                  <i className="uil uil-map-marker"></i> {exp.location}
                </div>

                <ul className="qualification__bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li className="qualification__bullet" key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="qualification__tags">
                  {exp.tags.map((tag, tIdx) => (
                    <span className="qualification__tag" key={tIdx}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Tab */}
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            {education.map((edu, idx) => (
              <div className="qualification__card tech-corner-card" key={idx}>
                <div className="qualification__card-header">
                  <div>
                    <h3 className="qualification__title">{edu.degree}</h3>
                    <div className="qualification__subtitle">{edu.institution}</div>
                  </div>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i> {edu.period}
                  </div>
                </div>

                <div className="qualification__location">
                  <i className="uil uil-map-marker"></i> {edu.location}
                </div>

                <p style={{ fontSize: 'var(--small-font-size)', color: 'var(--text-color)', marginTop: '0.5rem' }}>
                  <strong>Key Coursework:</strong> {edu.coursework}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
