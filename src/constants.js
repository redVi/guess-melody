const SECOND = 1000;
const MINUTE = 60000;
const TIME_OF_GAME = MINUTE * 5;

const INITIAL_STATE = () => ({
  lives: 3,
  totalPointsEarned: 0,
  guessedTracks: 0,
  questions: [],
  time: 0,
});

export {
  SECOND,
  MINUTE,
  TIME_OF_GAME,
  INITIAL_STATE,
};
