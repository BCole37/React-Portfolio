import React from 'react';
import '../components/styles/NavTabs.css';


function NavTabs({ currentPage, handlePageChange }) {
  const linkStyle = { border: '1px black', padding: '5px', paddingRight: '71%' };
  const linkStyleTwo = { border: '1px black', padding: '5px' };


  return (
    <div> 
    <header className="header">

    <ul className="nav nav-tabs">
      <li className="nav-item" style={linkStyle}>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          Bryson Cole
        </a>
      </li>
      <li className="nav-item" style={linkStyleTwo}>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item" style={linkStyleTwo}>
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" style={linkStyleTwo}>
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact 
        </a>
      </li>
      <li className="nav-item" style={linkStyleTwo}>
        <a
          href="#resume"

          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume 
        </a>
      </li>
    </ul>
    </header>

        </div>
  );
}

export default NavTabs;
