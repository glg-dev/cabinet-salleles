import React from 'react';
import DarkmodeButton from './DarkmodeButton';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className='header'>
      <div className="header-bg"></div>
      <div className='title'>
        <h1>Floriane Girollet</h1>
        <h2>Ostéopathe D.O à Sallèles d'Aude</h2>
      </div>
      <DarkmodeButton />
      <Navigation />
    </div>
  );
};

export default Header;