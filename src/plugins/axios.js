import axios from 'axios';
import router from '@/router';

const isDev = process.env.NODE_ENV === 'development';
const $http = axios.create();

$http.defaults.baseURL = isDev ? 'http://localhost:3000/api/v1' : '';

$http.interceptors.request.use(
  config => config,
  error => router.push('/error', { params: error }),
);

$http.interceptors.response.use(
  res => res,
  error => router.push('/error', { params: error }),
);

export default $http;
