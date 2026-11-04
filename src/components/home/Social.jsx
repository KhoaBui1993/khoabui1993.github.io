import React from 'react';

const Social = () => {
  return (
    <div className='home__social'>
      <a 
        href="https://www.linkedin.com/in/khoa-bui" 
        className="home__social-icon" 
        target="_blank" 
        rel="noreferrer"
        title="LinkedIn Profile"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
      
      <a 
        href="https://github.com/KhoaBui1993" 
        className="home__social-icon" 
        target="_blank" 
        rel="noreferrer"
        title="GitHub Profile"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a 
        href="mailto:khoathanhbui@gmail.com" 
        className="home__social-icon" 
        target="_blank" 
        rel="noreferrer"
        title="Email Me"
      >
        <i className="uil uil-envelope"></i>
      </a>
    </div>
  );
};

export default Social;
