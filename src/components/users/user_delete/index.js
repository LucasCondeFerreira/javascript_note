import React, { useState } from 'react';
import UserService from '../../../services/users';
import { Navigate } from 'react-router-dom';

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const deleteUser = async () => {
    if (window.confirm('Are you sure you wish to delete this account?')) {
      UserService.delete();
      setRedirectToHome(true);
    }
  };

  if (redirectToHome === true) return <Navigate to={{ pathname: '/' }} />;

  return (
    <button className='button is-danger' onClick={() => deleteUser()}>
      Excluir conta
    </button>
  );
}

export default UsersDelete;
