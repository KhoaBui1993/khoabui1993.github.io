import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import CyberBackground from './components/cyber/CyberBackground';
import './components/cyber/Cyber.css';
import './App.css';

function App() {
  return (
    <>
      <CyberBackground />
      <Header />
      <main className='main' style={{ position: 'relative', zIndex: 1 }}>
        <Home />   
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
