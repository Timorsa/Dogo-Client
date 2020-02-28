import axios from 'axios';

const setAuthToken = token => {
  console.log('token in set auth ', token);
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
    console.log(axios.defaults.headers);
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
