import axios from 'axios';
import router from '@/router';

const $http = axios.create();
const isDev = process.env.NODE_ENV === 'development';
const resolveError = error => router.push('/error', { params: error });

$http.defaults.baseURL = isDev ? 'http://localhost:3000/api/v1' : '';

$http.interceptors.request.use(
  config => config,
  error => resolveError(error),
);

$http.interceptors.response.use(
  res => res,
  error => resolveError(error),
);

export default $http;
