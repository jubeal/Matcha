import axios from './../Instance';

const getManyRequest = async () => {
  try {
    const res = await axios.get('/');
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

const postRequest = async (params) => {
  try {
    const res = await axios.post('/', params);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

export { getManyRequest, postRequest };
