import gameService from '@/services/game-service';

const initialState = () => ({
  lives: 3,
  totalPointsEarned: 0,
  guessedTracks: 0,
  questions: [],
});

const state = initialState();

const getters = {
  GET_GAME: st => st,
};

const mutations = {
  RESET_STATE(st) {
    Object.assign(st, initialState());
  },
  FILL_QUESTIONS(st, payload) {
    st.questions = payload;
  },
  REMOVE_QUESTION(st) {
    st.questions.splice(0, 1);
  },
  UPDATE_GAME(st, payload) {
    const { answer, guessedTracks } = payload;

    if (answer) {
      st.totalPointsEarned += 1;
      st.guessedTracks += guessedTracks || 1;

      return;
    }

    st.lives -= 1;
  },
};

const actions = {
  async FILL_QUESTIONS({ commit }) {
    commit('FILL_QUESTIONS', await gameService.getQuestions());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
