import $http from '@/plugins/axios';
import router from '@/router';
import loadMusicService from '@/services/load-music-service';

class GameService {
  static getQuestions = async () => {
    const res = await $http.get('/api/v1/questions');
    const { data } = res.data;

    const isLoadComplete = await loadMusicService(data);

    if (isLoadComplete) return data;

    router.push('/error');
    return Promise.reject();
  };

  static getStat = async () => {
    const res = await $http.get('/api/v1/stat');
    return res.data.data;
  };
}

export default GameService;
