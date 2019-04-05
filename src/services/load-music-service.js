const loadMusicService = async (data) => {
  const artists = [];
  const genres = [];

  // extract ulr's
  Object.values(data).forEach((value) => {
    if (value.type === 'artist') {
      artists.push(value.song.path);
    }

    if (value.type === 'genre') {
      value.tracks.forEach((track) => {
        genres.push(track.path);
      });
    }
  });

  // fetch all songs
  const fetchMusic = await (() => Promise.all([
    ...artists.map(url => fetch(url)),
    ...genres.map(url => fetch(url)),
  ]))();

  // all songs downloaded?
  const musicDownloaded = Object.entries(fetchMusic)
    .map(song => song[1])
    .every(response => response.ok);

  return musicDownloaded;
};

export default loadMusicService;
