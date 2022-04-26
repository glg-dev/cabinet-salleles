import React from 'react';
import { NavLink } from 'react-router-dom';

{
  window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar")
    const scroll = this.document.documentElement.scrollTop

    if (scroll > 220) {
      navbar.classList.add("fixed-nav")
    } else {
      navbar.classList.remove("fixed-nav")
    }
  })
}

const Navigation = () => {
  return (
    <div className='navbar'>
      <div className="nav-container">
      <NavLink to='/' className={(nav) => (nav.isActive ? "navActive" : "")}>
        <i className="fas fa-2x fa-user"></i>
        Accueil
      </NavLink>
      <NavLink to='/blog' className={(nav) => (nav.isActive ? "navActive" : "")}>
        <i className="fas fa-2x fa-newspaper"></i>
        Articles
      </NavLink>
      <NavLink to='/profiles' className={(nav) => (nav.isActive ? "navActive" : "")}>
        <i className="fas fa-2x fa-address-card"></i>
        Qui sommes-nous
      </NavLink>
      <NavLink to='/contact' className={(nav) => (nav.isActive ? "navActive" : "")}>
        <i className="fas fa-2x fa-phone"></i>
        Contact
      </NavLink>
      </div>
    </div>
  );
};

export default Navigation;