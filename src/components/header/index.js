import React, { useState } from 'react';
import LogoImage from '../../assets/images/logo.png';
import '../../styles/header.scss';
import { Link } from 'react-router-dom';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className='navbar is-light'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/'>
            <img className='logo' src={LogoImage} alt='Logo' />
          </Link>
          <button
            className={`navbar-burger burger ${openMenu ? 'is-active' : ''}`}
            aria-label='menu'
            aria-expanded={openMenu ? 'true' : 'false'}
            onClick={() => setOpenMenu(!openMenu)}
            data-target='navbar-menu'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>

        <div
          id='navbar-menu'
          className={`navbar-menu ${openMenu ? 'is-active' : ''}`}
        >
          <div className='navbar-end'>
            <div className='buttons'>
              <Link
                to='/register'
                className='button is-white has-text-custom-purple'
              >
                Register
              </Link>
              <Link
                to='/login'
                className='button is-outlined has-text-custom-purple'
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
