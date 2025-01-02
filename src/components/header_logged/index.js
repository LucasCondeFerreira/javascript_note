import React, { useState } from 'react';
import LogoImage from '../../assets/images/logo-white.png';
import '../../styles/header.scss';
import UserService from '../../services/users';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [user] = useState(localStorage.getItem('user'));

  const logOut = async () => {
    await UserService.logout();
    setRedirectToHome(true);
  };

  if (redirectToHome === true) return <Navigate to={{ pathname: '/' }} />;

  return (
    <nav className='navbar is-custom-purple navbar-logged'>
      <div className='container'>
        <div className='navbar-brand'>
          <div className='columns'>
            <div className='column is-11 is-offset-1'>
              <Link to='/notes'>
                <img className='logo' src={LogoImage} alt='Logo' />
              </Link>
            </div>
          </div>
          <button
            className='navbar-burger burger is-white'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbar-menu'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>

        <div id='navbar-menu' className='navbar-menu'>
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
              <div className='dropdown'>
                <div className='dropdown-trigger'>
                  <button className='button is-white is-outlined'>
                    <span>{JSON.parse(user)['name']} ▼</span>
                  </button>
                </div>
                <div className='dropdown-menu'>
                  <div className='dropdown-content'>
                    <Link to='/users/edit' className='dropdown-item'>
                      User Edit
                    </Link>
                    <hr className='dropdown-divider' />
                    <button onClick={(e) => logOut()} className='dropdown-item'>
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
