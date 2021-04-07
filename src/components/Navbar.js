import React, { useState, useEffect } from 'react';
import { Button } from './ButtonLogin';
import { Link } from 'react-router-dom';
import auth from '../services/firebase-auth'
import './Navbar.css';

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
          <Link to='/vr' className='navbar-logo' onClick={closeMobileMenu}>
            ARTX
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li className='nav-item'>
              <Link to='/event-form' className='nav-links' onClick={closeMobileMenu}>
              Create
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/join' className='nav-links' onClick={closeMobileMenu}>
              JoinUP
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/voting'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Voting
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/show'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ShowUP
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={() => auth.signOut()}>Logout</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
