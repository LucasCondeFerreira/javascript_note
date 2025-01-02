import React, { Fragment } from 'react';
import PresentationImage from '../../assets/images/presentation.png';
import Header from '../../components/header';
import '../../styles/home.scss';
import { Link } from 'react-router-dom';

const Home = () => (
  <Fragment>
    <Header />
    <section className='section home'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-5'>
            <h2 className='title is-2 has-text-white'>
              Create notes easily and access when you want on the cloud
            </h2>
            <h5 className='title is-5 has-text-light'>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic, or web designs.
              <br />
              <br />
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print.
            </h5>
            <Link
              to='/register'
              className='button is-outlined is-white is-large'
            >
              <strong>Register for free Now</strong>
            </Link>
          </div>
          <div className='column is-6 is-offset-1'>
            <img src={PresentationImage} alt='Apresentação do aplicativo' />
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);

export default Home;
