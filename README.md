# 🚀 Khoa Bui — Personal Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-khoabui1993.github.io-0284c7?style=for-the-badge&logo=googlechrome&logoColor=white)](https://khoabui1993.github.io/)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-22c55e?style=for-the-badge&logo=githubpages&logoColor=white)](https://khoabui1993.github.io/)
[![React](https://img.shields.io/badge/React-18.2-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Professional engineering portfolio for **Khoa Bui**, highlighting experience in **EDA Systems & Simulation Infrastructure**, **Bare-Metal Linux Server Provisioning**, **Firmware & Hardware-in-the-Loop (HIL) Validation**, and **Full-Stack Software Engineering**.

---

## 🌐 Live Demo

Visit the production site: **[https://khoabui1993.github.io](https://khoabui1993.github.io)**

---

## ✨ Key Features & Architecture

* **Executive Dark & Light Mode System**:
  * **Default Dark Mode**: Deep Slate (`#0b0f19`) & Electric Cobalt (`#38bdf8`) palette tailored for systems and EDA engineers.
  * **Clean Light Mode**: Silicon Valley executive clean style with high-contrast text tokens.
  * **Automatic OS Detection**: Detects user system preference (`prefers-color-scheme`) with a persistent manual toggle stored in `localStorage`.
* **Widescreen & Responsive Layout**:
  * Fluid container scaling up to `1320px` for 16:9 desktop monitors and high-resolution displays.
  * Auto-fitting grids for project cards and technical skill matrices.
* **Interactive Cyber Particle Background**:
  * Real-time canvas particle network with dynamic node bridging, circuit grid blueprint overlay, and animated diagnostic scanlines.
* **Featured Engineering Projects Showcase**:
  * **Automated RTL Regression & Triage Pipeline**: Python/Bash test harness with digital logic waveform telemetry.
  * **Bare-Metal Fleet Provisioner & Telemetry**: Zero-touch PXE boot, Kickstart, Ansible playbooks, and iDRAC/iLO monitoring across Dell/HPE server racks.
  * **PyQt Network QA & Telemetry Tool**: Desktop test automation app cutting regression cycles by 30% with Jira REST API integration.
  * **Virtualization & Fault-Tolerant Storage**: Proxmox VE 3-node cluster with PERC H730P hardware RAID-10 NVMe array.
  * **Wanderlust (Full-Stack Flagship)**: Production-grade travel community platform with in-memory Mongo fallback, JWT auth, and Docker CI/CD.
* **Direct Contact & Fast Messaging**:
  * Direct contact cards (Email, LinkedIn, WhatsApp) and client-side message submission via EmailJS.

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React 18](https://react.dev/)
* **Typography**: [Inter](https://fonts.google.com/specimen/Inter) (Body) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Code / Badges)
* **Icons**: [Boxicons](https://boxicons.com/) & [Unicons](https://iconscout.com/unicons)
* **Effects**: HTML5 Canvas Particle Engine, `react-simple-typewriter`
* **Styling**: Pure CSS Modules & CSS Custom Properties (Theme tokens)
* **Forms & Communication**: [EmailJS](https://www.emailjs.com/)
* **Hosting & Deployment**: [GitHub Pages](https://pages.github.com/) via `gh-pages`

---

## 📁 Project Structure

```text
khoabui1993.github.io/
├── public/                 # Static assets & HTML template
├── src/
│   ├── components/
│   │   ├── header/         # Sticky glassmorphic navbar & theme toggle
│   │   ├── home/           # Hero section, typewriter title, profile & social links
│   │   ├── about/          # Introduction, resume download, and Highlights grid
│   │   ├── skills/         # 4-category technical skill matrix
│   │   ├── qualification/  # Tabbed experience & education history
│   │   ├── portfolio/      # Project filtering, cards, highlights & demo links
│   │   ├── contact/        # Direct contact cards & EmailJS contact form
│   │   ├── cyber/          # Canvas cyber background & animations
│   │   ├── footer/         # Footer navigation, socials, and copyright
│   │   └── scrollUp/       # Floating back-to-top button
│   ├── Upload/             # High-res screenshots, SVGs, and resume PDF
│   ├── App.css             # Theme tokens (light/dark), typography scale & global layout
│   ├── App.js              # Root application component
│   └── index.js            # Entry point
├── package.json            # Scripts & dependencies
└── README.md               # Project documentation
```

---

## 💻 Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/KhoaBui1993/khoabui1993.github.io.git
cd khoabui1993.github.io
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser with hot reloading.

### 4. Build for production
```bash
npm run build
```
Creates an optimized, minified bundle in the `build/` directory.

---

## 🚀 Deployment to GitHub Pages

This project is pre-configured to automatically build and deploy directly to GitHub Pages:

```bash
npm run deploy
```

This script runs `npm run build` and uses `gh-pages` to publish the production bundle to the `gh-pages` branch on GitHub.

---

## 📬 Contact & Connect

* **Portfolio**: [https://khoabui1993.github.io](https://khoabui1993.github.io)
* **LinkedIn**: [linkedin.com/in/khoa-bui](https://www.linkedin.com/in/khoa-bui)
* **Email**: [khoathanhbui@gmail.com](mailto:khoathanhbui@gmail.com)
* **GitHub**: [@KhoaBui1993](https://github.com/KhoaBui1993)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
