import React, { Fragment, useState } from 'react';
import UserService from '../../../services/users';

function UsersEditFormPassword() {
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password === password_confirmation) {
      try {
        await UserService.updatePassword({ password: password });
        setStatus('success');
      } catch (err) {
        setStatus('error');
      }
    } else {
      setStatus('error_confirmation_password');
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <label className='label has-text-grey'>Password</label>
          <div className='control'>
            <input
              className='input'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name='password'
            />
          </div>
        </div>

        <div className='field'>
          <label className='label has-text-grey'>Password Confirmation</label>
          <div className='control'>
            <input
              className='input'
              type='password'
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              name='password_confirmation'
            />
          </div>
        </div>

        <div className='field'>
          <div className='control'>
            <div className='columns is-mobile is-right'>
              <div className='column is-narrow'>
                <button className='button is-outlined is-custom-purple'>
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>

        {status === 'error_update' && (
          <p className='help is-danger'>Problem in password update</p>
        )}
        {status === 'error_confirmation_password' && (
          <p className='help is-danger'>Passwords don't match</p>
        )}
        {status === 'success' && (
          <p className='help is-primary'>Updated with success</p>
        )}
      </form>
    </Fragment>
  );
}

export default UsersEditFormPassword;
