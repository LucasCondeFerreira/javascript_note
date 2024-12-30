import Api from './api';

const UserService = {
  register: async (params) => {
    try {
      const response = await Api.post('/users/register', params);
      return response.data;
    } catch (error) {
      throw error.response.data; // Captura o erro detalhado do backend
    }
  },

  login: async (params) => {
    const response = await Api.post('/users/login', params);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', response.data.token);
  },
  logout: () => {
    localStorage.removeItem('user', null);
    localStorage.removeItem('token', null);
  },
  update: async (params) => {
    const response = await Api.put('/users', params, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    });
    localStorage.setItem('user', JSON.stringify(response.data));
  },
  updatePassword: async (params) => {
    await Api.put('/users/password', params, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    });
  },
  delete: async () => {
    await Api.delete('/users', {
      headers: { 'x-access-token': localStorage.getItem('token') },
    });
    localStorage.removeItem('user', null);
    localStorage.removeItem('token', null);
  },
};

export default UserService;
