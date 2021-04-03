//import React from 'react';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:2454/',
});

export default instance;
