const isDev = process.env.NODE_ENV === 'development';
const BASE_URL = isDev ? 'http://localhost:3000/api/v1' : '';

class GameService {
  static getQuestions = async () => {
    const artists = [];
    const genres = [];
    const res = await fetch(`${BASE_URL}/questions`);

    if (!res.ok) throw new Error(`Server error ${res.status}`);

    const body = await res.json();

    Object.values(body.data).forEach((value) => {
      if (value.type === 'artist') {
        artists.push(value.song.path);
      }

      if (value.type === 'genre') {
        value.tracks.forEach((track) => {
          genres.push(track.path);
        });
      }
    });

    const fetchMusic = await (() => Promise.all([
      ...artists.map(url => fetch(url)),
      ...genres.map(url => fetch(url)),
    ]))();

    const isSuccess = Object.entries(fetchMusic).map(item => item[1]).every(i => i.ok);

    if (isSuccess) {
      return body.data;
    }

    throw new Error('music fetch failed');
  };

  static getStat = async () => {
    const res = await fetch(`${BASE_URL}/stat`);
    const body = await res.json();

    return body.data;
  };
}

export default GameService;
