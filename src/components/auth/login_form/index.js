import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../services/users';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.login({ email: email, password: password });
      navigate('/notes');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
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
          <button
            className='btn btn-link'
            onClick={() => navigate('/register')}
          >
            Register or
          </button>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </div>
      </div>

      {error && <p className='error-message'>Email or Password invalid</p>}
    </form>
  );
}

export default LoginForm;
