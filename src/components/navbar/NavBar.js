import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { debounce } from '../../utilities/helpers';
import navLogo from '../../assets/AdaptiveLogo.png';
import '../../styling/navbar.css';

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisibile] = useState(0);

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
          Showcase
        </NavLink>
        <NavLink className="nav-news" to="/">
          News
        </NavLink>
      </div>
    </div>
  )

}

export default NavBar;
