import React, { Fragment, useState, useEffect } from 'react';
import UserService from '../../../services/users';

function UsersEditForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    setName(user['name']);
    setEmail(user['email']);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.update({ email: email, name: name });
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label has-text-grey'>Full Name</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
              required
              name='name'
            />
          </div>
        </div>

        <div className='field'>
          <label className='label has-text-grey'>Email</label>
          <div className='control'>
            <input
              className='input'
              type='email'
              value={email || ''}
              onChange={(e) => setEmail(e.target.value)}
              required
              name='email'
            />
          </div>
        </div>

        <div className='field'>
          <div className='control'>
            <div className='columns is-mobile is-right'>
              <div className='column is-narrow'>
                <button className='button is-outlined is-custom-purple'>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>

        {status === 'error' && (
          <p className='help is-danger'>Problem in update</p>
        )}
        {status === 'success' && (
          <p className='help is-primary'>Updated with success</p>
        )}
      </form>
    </Fragment>
  );
}

export default UsersEditForm;
