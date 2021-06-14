import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../../assets/AdaptiveLogo.png';

const NavBar = () => {

  return (
    <div className='nav-bar'>
      <div className='nav-logo'>
        <NavLink className='nav-adaptive-logo' to='/'>
          <img id='nav-logo' alt='Adaptive Financial Consulting' src={navLogo} />
        </NavLink>
      </div>
      <div className='nav-routes'>
        <NavLink className="nav-about-us" to="/">
          About Us
        </NavLink>
        <NavLink className="nav-hydra-platform" to="/">
          Hydra Platform
        </NavLink>
        <NavLink className="nav-client-stories" to="/">
          Client Stories
        </NavLink>
        <NavLink className="nav-showcase" to="/">
          Client Stories
        </NavLink>
        <NavLink className="nav-news" to="/">
          News
        </NavLink>
      </div>
    </div>
  )

}

export default NavBar;
