import $http from '@/plugins/axios';
import router from '@/router';

const gameService = {
  getQuestions: async () => {
    const res = await $http.get('/v1/questions');
    const { data } = res;

    if (data) return data.data;

    router.push('/error');
    return Promise.reject();
  },
  getStat: async () => {
    const res = await $http.get('/v1/stat');
    return res.data.data;
  },
};

export default gameService;
