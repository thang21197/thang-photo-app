const axios = require('axios');
const queryString = require('query-string');
// import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'},
    paramsSerializer: params => queryString.stringify(params),
  });

 export default axiosClient;