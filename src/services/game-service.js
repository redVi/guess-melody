const isDev = process.env.NODE_ENV === 'development';
const BASE_URL = isDev ? 'http://localhost:3000' : '';

class GameService {
  getQuestions = async () => {
    const artists = [];
    const genres = [];
    const res = await fetch(`${BASE_URL}/api/v1/questions`);

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

    const result = await (() => Promise.all([
      ...artists.map(url => fetch(url)),
      ...genres.map(url => fetch(url)),
    ]))();

    if (result) {
      return body.data;
    }

    return [];
  };

  getStat = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/stat`);
    const body = await res.json();

    return body.data;
  };
}

export default new GameService();
