import axios from './../Instance';
import AuthService from './../AuthService';

const client = new AuthService();

const getUserByIdRequest = async (id) => {
  try {
    const res = await axios.get(`/:${id}`);
    await client._checkStatus(res).then((response) => response.json());
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const getManyRequest = async () => {
  try {
    const res = await axios.get('/');
    await client._checkStatus(res).then((response) => response.json());
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

const addUserRequest = async (params) => {
  try {
    const { data } = await axios.post('/', params);
    //await client._checkStatus(res).then((response) => response.json());
    return data;
  } catch (err) {
    console.error(err);
  }
};

const loginRequest = async (params) => {
  try {
    console.log('maintenant 1');
    const { data } = await axios.post('/login', params);
    console.log('maintenant 2');
    console.log(data);
    // await client._checkStatus(res).then((response) => response.json());
    return data;
  } catch (err) {
    console.error(err);
  }
};

export { getManyRequest, addUserRequest, loginRequest, getUserByIdRequest };
