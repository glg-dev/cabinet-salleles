import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className='error'>
      <div className="container">
        <h1>Désolé</h1>
        <h2>Cette page n'existe pas...</h2>
        <NavLink to='/'>Retourner à l'accueil</NavLink>
      </div>
    </div>
  );
};

export default Error;