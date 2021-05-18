import AuthService from './../AuthService';
import axios from 'axios';

const client = new AuthService();
const instance = axios.create({
  baseURL: 'http://localhost:2454/',
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use((request) => {
  request.headers.authorization = client.loggedIn()
    ? `Bearer ${client.getToken}`
    : '';

  return request;
});

export default instance;
