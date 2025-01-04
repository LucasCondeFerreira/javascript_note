import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import LogoImage from '../../assets/images/logo-white.png';
import UserService from '../../services/users';
import '../../styles/header.scss';

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem('user')));
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const logOut = async () => {
    await UserService.logout();
    setRedirectToHome(true);
  };

  if (redirectToHome) {
    return <Navigate to='/' />;
  }

  return (
    <nav
      className='navbar is-custom-purple navbar-logged'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='container'>
        {/* Logo e Menu Burger */}
        <div className='navbar-brand'>
          <Link to='/notes' className='navbar-item'>
            <img src={LogoImage} alt='Logo' />
          </Link>
          <button
            className={`navbar-burger burger ${
              isMenuActive ? 'is-active' : ''
            }`}
            aria-label='menu'
            aria-expanded={isMenuActive}
            onClick={() => setIsMenuActive(!isMenuActive)}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>

        {/* Menu */}
        <div className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
          <div className='navbar-start'>
            <div className='navbar-item'>
              <button
                className='button is-white is-outlined open-button'
                onClick={() => props.setIsOpen(true)}
              >
                <FontAwesomeIcon icon={faList} />
              </button>
            </div>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div
                className={`dropdown ${isDropdownActive ? 'is-active' : ''}`}
              >
                <div className='dropdown-trigger'>
                  <button
                    className='button is-white is-outlined'
                    onClick={() => setIsDropdownActive(!isDropdownActive)}
                  >
                    <span>{user.name} ▼</span>
                  </button>
                </div>
                <div className='dropdown-menu'>
                  <div className='dropdown-content'>
                    <Link to='/users/edit' className='dropdown-item'>
                      User Edit
                    </Link>
                    <hr className='dropdown-divider' />
                    <button onClick={logOut} className='dropdown-item'>
                      LogOut
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderLogged;
