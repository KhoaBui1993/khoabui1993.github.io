import React from 'react';
import Social from './Social';
import Data from './Data';
import './Home.css';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content'>
          <Social />
          <Data />
          <div className="home__profile-wrapper">
            <div className="home__chassis-frame">
              <div className='home__img'></div>
              <div className="home__img-caption">
                <span className="caption-dot"></span>
                <span>SAN JOSE, CA • B.S. CS</span>
              </div>
            </div>
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
