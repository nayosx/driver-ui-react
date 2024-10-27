import axios from 'axios';

export const login = (email, password) => {
  return axios.post('/api/users/login', { email, password });
};

export const register = () => {
    return axios.post('/api/users/register');
};