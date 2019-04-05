import $http from '@/plugins/axios';
import router from '@/router';
import loadMusicService from '@/services/load-music-service';

class GameService {
  static getQuestions = async () => {
    const res = await $http.get('/questions');
    const { data } = res.data;

    if (loadMusicService(data)) {
      return data;
    }

    router.push('/error');
    return Promise.reject();
  };

  static getStat = async () => {
    const res = await $http.get('/stat');
    return res.data.data;
  };
}

export default GameService;
