import axios from 'axios';

// axios setting
const client = axios.create();
client.defaults.baseURL = 'http://localhost:4000/';
client.defaults.withCredentials = true;
client.defaults.headers.common['Authorization'] = 'Bearera1b2c3d4';
// intercepter setting
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default client;
