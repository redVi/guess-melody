import $http from '@/plugins/axios';
import router from '@/router';

class GameService {
  static getQuestions = async () => {
    const res = await $http.get('/v1/questions');

    if (res.data) return res.data;

    router.push('/error');
    return Promise.reject();
  };

  static getStat = async () => {
    const res = await $http.get('/v1/stat');
    return res.data.data;
  };
}

export default GameService;
