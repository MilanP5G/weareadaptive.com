import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import navLogo from '../../assets/AdaptiveLogo.png';

const NavBar = () => {

  return (
    <div className='nav-bar'>
      <div className='nav-logo'>
        <NavLink className='nav-adaptive-logo' to='/'>
          <img id='nav-logo' alt='Adaptive Financial Consulting' src={navLogo}>
      </div>
    </div>

  )

}

export default NavBar;
