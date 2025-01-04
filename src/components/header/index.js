import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/logo.png';
import '../../styles/header.scss';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <nav
      className='navbar is-light'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='container'>
        <div className='navbar-brand'>
          {/* Logo */}
          <Link to='/' className='navbar-item'>
            <img src={LogoImage} alt='Logo' style={{ maxHeight: '40px' }} />
          </Link>

          {/* Menu Burger */}
          <button
            className={`navbar-burger burger ${
              isMenuActive ? 'is-active' : ''
            }`}
            aria-label='menu'
            aria-expanded={isMenuActive ? 'true' : 'false'}
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>

        {/* Menu Links */}
        <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
          <div className='navbar-end'>
            <Link to='/register' className='navbar-item'>
              Register
            </Link>
            <Link
              to='/login'
              className='navbar-item button is-outlined is-primary'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
