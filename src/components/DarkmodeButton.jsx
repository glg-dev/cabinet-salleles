import React from 'react';

const DarkmodeButton = () => {
  return (
    <div className='darkmodeButton'>
      <input type="checkbox" className='checkbox' id="dark-mode" onChange={() => document.body.classList.toggle('dark')} />
      <label htmlFor="dark-mode" className='label'>
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </div>
  );
};

export default DarkmodeButton;