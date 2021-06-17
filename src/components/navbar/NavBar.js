import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { debounce } from '../../utilities/helpers';
import navLogo from '../../assets/AdaptiveLogo.png';
import '../../styling/navbar.css';

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisibile] = useState(0);

  const navbarStyles = {
    transition: 'top 0.6s'
  }

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisibile((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos< 10);
    setPrevScrollPos(currentScrollPos);
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className='nav-bar' style={{ ...navbarStyles, top: visible ? '0' : '-100px' }}>
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
