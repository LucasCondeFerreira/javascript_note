import React, { Fragment } from 'react';
import Header from '../../../components/header';
import LogoImage from '../../../assets/images/logo.png';
import '../../../styles/auth.scss';
import RegisterForm from '../../../components/auth/register_form';

const Register = () => (
  <Fragment>
    <Header />
    <section className='section auth'>
      <div className='container'>
        <div className='columns is-centered'>
          <div className='column is-3'>
            <div className='card'>
              <div className='card-content'>
                <section className='section'>
                  <div className='columns is-centered'>
                    <div className='column is-12'>
                      <img src={LogoImage} alt='Logo' />
                    </div>
                  </div>

                  <div className='columns'>
                    <div className='column is-12'>
                      <h6 className='title is-6 has-text-grey has-text-centered'>
                        Your notes on the cloud
                      </h6>
                    </div>
                  </div>
                  <RegisterForm />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Register;
