import jwt_decode from 'jwt-decode';
import { loginRequest } from './../Requests';

export default class AuthService {
  constructor(domain) {
    this.domaine = domain || 'http://localhost:2454';
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  async login(params) {
    //Get a token from the api using fetch
    const data = await loginRequest(params);
    //console.log(data);
    if (data !== undefined && data.token) {
      this.setToken(data.token); //setting token in localStorage
      return true;
    } else {
      return false;
    }
  }

  loggedIn() {
    //Checking if a token exist and if it's still valid
    const token = this.getToken(); //Getting token from localStorage
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = jwt_decode(token);
      if (decoded.exp * 1000 < Date.now()) {
        //Checking if token is expired
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    //save user token to localStorage
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    //Getting token from localStorage
    return localStorage.getItem('id_token');
  }

  logout() {
    //Clear user token from localStorage
    localStorage.removeItem('id_token');
  }

  getProfile() {
    // using jwt-decode to decode the token
    return jwt_decode(this.getToken());
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 and 300
      return response;
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
