import axios from 'axios';
import router from '@/router';

const $http = axios.create();
const errorResolver = error => router.push('/error', { params: error });

$http.defaults.baseURL = 'https://glacial-dusk-78330.herokuapp.com';

$http.interceptors.request.use(
  config => config,
  error => errorResolver(error),
);

$http.interceptors.response.use(
  res => res,
  error => errorResolver(error),
);

export default $http;
