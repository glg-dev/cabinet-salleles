import React from 'react';

const Iframe = ({ source }) => {
  const src = source
  return (
    <div className='iframe'>
      <iframe
        title={src} 
        src={src} 
        frameBorder="0" 
        allowFullScreen="" 
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
};

export default Iframe;