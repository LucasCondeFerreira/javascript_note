import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register_form.scss';
import UserService from '../../../services/users';
import { Redirect } from 'react-router-dom';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.register({
        name: name,
        email: email,
        password: password,
      });
      navigate('/login');
      //      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div className='form-field'>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className='form-field'>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className='form-field'>
        <label htmlFor='password'>Password:</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className='form-actions'>
        <div className='action-row'>
          <a
            href='#'
            onClick={() => navigate('/login')}
            className='btn btn-link'
            role='button'
          >
            Login or
          </a>
          <button type='submit' className='btn btn-primary'>
            Register
          </button>
        </div>
      </div>

      {error && <p className='error-message'>Email or Password invalid</p>}
    </form>
  );
}

export default RegisterForm;
