import axios from 'axios';

// axios setting
const client = axios.create();
client.defaults.baseURL = 'http://localhost:3001/';
client.defaults.withCredentials = true;
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
