import axios from './../Instance';

const getUserByIdRequest = async (id) => {
  console.log('getUserById begin');
  try {
    const { data } = await axios.get(`/${id}`);
    console.log(`getUserById data: ${data}`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getManyRequest = async () => {
  try {
    const { data } = await axios.get('/');
    return data;
  } catch (err) {
    console.error(err);
  }
};

const addUserRequest = async (params) => {
  try {
    const { data } = await axios.post('/', params);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const loginRequest = async (params) => {
  try {
    const { data } = await axios.post('/login', params);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export { getManyRequest, addUserRequest, loginRequest, getUserByIdRequest };
