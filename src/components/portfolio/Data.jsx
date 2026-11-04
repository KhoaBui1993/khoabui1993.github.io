import Portfolio1 from "../../Upload/wanderlust_preview.png";
import ProjectRTL from "../../Upload/project_rtl.png";
import ProjectBaremetal from "../../Upload/project_baremetal.png";
import ProjectQA from "../../Upload/project_qa.png";
import ProjectVirt from "../../Upload/project_virtualization.png";

export const projectsData = [
  {
    id: 1,
    image: ProjectRTL,
    title: 'Automated RTL Regression & Triage Pipeline',
    category: 'automation',
    categoryLabel: 'Automation & Validation',
    badge: '100% Tests Pass',
    description: 'Python and Bash regression test suites validating RTL designs, integrating automated log parsing, waveform checking, and defect triage workflows.',
    highlights: [
      { label: 'Pipeline', val: 'Automated defect triage & regression harness' },
      { label: 'OS', val: 'RHEL high-density simulation clusters' }
    ],
    tags: ['Python', 'Bash', 'RTL Verification', 'CI Pipelines', 'Linux'],
    github: 'https://github.com/KhoaBui1993'
  },
  {
    id: 2,
    image: ProjectBaremetal,
    title: 'Bare-Metal Fleet Provisioner & Telemetry',
    category: 'systems',
    categoryLabel: 'Systems & Infrastructure',
    badge: 'Enterprise Fleets',
    description: 'Automated server deployment pipeline using PXE boot, Kickstart, and Ansible playbooks across RHEL fleets, integrated with telemetry dashboards for hardware BOM tracking.',
    highlights: [
      { label: 'Deployment', val: 'Zero-touch PXE boot & Ansible playbooks' },
      { label: 'Management', val: 'iDRAC/iLO & IPMI out-of-band monitoring' }
    ],
    tags: ['PXE Boot', 'Ansible', 'RHEL', 'iDRAC/iLO', 'OpenLDAP', 'REST APIs'],
    github: 'https://github.com/KhoaBui1993'
  },
  {
    id: 3,
    image: ProjectQA,
    title: 'PyQt Network QA & Telemetry Tool',
    category: 'automation',
    categoryLabel: 'Automation & QA',
    badge: '30% Faster Regression',
    description: 'GUI test automation tool leveraging PyQt and REST APIs, cutting regression cycles by 30% for router firmware testing and automating Jira defect submission.',
    highlights: [
      { label: 'Efficiency', val: '30% reduction in regression test cycles' },
      { label: 'Integration', val: 'Automated Jira defect ticket generation' }
    ],
    tags: ['Python', 'PyQt', 'REST APIs', 'Firmware QA', 'Jira API', 'Firebase'],
    github: 'https://github.com/KhoaBui1993'
  },
  {
    id: 4,
    image: ProjectVirt,
    title: 'Virtualization & Fault-Tolerant Storage',
    category: 'systems',
    categoryLabel: 'Systems & Virtualization',
    badge: 'RAID-10 Verified',
    description: 'Multi-node virtualization cluster deployed on Proxmox VE & KVM, featuring optimized RAID 0/1/5/10 arrays on PERC/LSI controllers and stress testing via MemTest86 & Prime95.',
    highlights: [
      { label: 'Storage', val: 'PERC/LSI hardware RAID 0/1/5/10' },
      { label: 'Hypervisor', val: 'Proxmox VE & Linux Containers (LXC)' }
    ],
    tags: ['Proxmox VE', 'KVM', 'Linux Containers', 'RAID (PERC/LSI)', 'NVMe/SAS'],
    github: 'https://github.com/KhoaBui1993'
  },
  {
    id: 5,
    image: Portfolio1,
    title: 'Wanderlust — Travel Community & Review Platform',
    category: 'web',
    categoryLabel: 'Full-Stack Flagship',
    badge: '100% Tests Passing',
    description: 'A production-grade travel platform for discovering hidden gems, candid pros & cons, and community itineraries. Engineered with zero-config in-memory MongoDB fallback, tamper-proof JWT authentication in HTTP-only cookies, rate-limited DDoS protection, full-text search, and automated CI/CD pipeline.',
    highlights: [
      { label: 'Security', val: 'Helmet CSP, bcrypt (10 rounds), rate limiting' },
      { label: 'Database', val: 'Resilient auto-fallback to in-memory Mongo + seeder' },
      { label: 'Search Engine', val: 'Full-text queries across cities, activities & tips' },
      { label: 'DevOps', val: 'Multi-stage Docker, compose & GitHub Actions CI' }
    ],
    tags: ['Node.js', 'Express', 'MongoDB', 'Bootstrap 5.3', 'Jest', 'Docker'],
    github: 'https://github.com/khoabui1993/TravelWebsite',
    docs: 'https://github.com/khoabui1993/TravelWebsite#readme'
  }
];

export const projectsNav = [
  { name: 'all', label: 'All Projects' },
  { name: 'automation', label: 'Automation & QA' },
  { name: 'systems', label: 'Systems & Infra' },
  { name: 'web', label: 'Web & Apps' }
];
