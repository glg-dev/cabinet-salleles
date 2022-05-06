import React from 'react';
// import DarkmodeButton from './DarkmodeButton';
import Navigation from './Navigation';
import logo from '../assets/osteo_logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-bg"></div>
      <div className='title'>
        <div className="title-content">
          <h1>Floriane Girollet</h1>
          <h2>Ostéopathe D.O à Sallèles d'Aude</h2>
        </div>
        <div className="title-img">
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/* <DarkmodeButton /> */}
      <Navigation />
    </div>
  );
};

export default Header;