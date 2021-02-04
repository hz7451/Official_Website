import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavItem from '../components/NavItem/NavItem';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/Official_Website/' className='navbar-logo' onClick={closeMobileMenu}>
            Blue Star Studio
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} style={{ 'color': '#fffff' }} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Official_Website/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Official_Website/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Official_Website/work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Official_Website/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

          </ul>
          <NavItem link='/Official_Website/' name='HOME' />
          <NavItem link='/Official_Website/about' name='ABOUT' />
          <NavItem link='/Official_Website/work' name='WORK' />
          <NavItem link='/Official_Website/contact' name='CONTACT' />
        </div>
      </nav>
    </>
  );
}

export default Navbar;