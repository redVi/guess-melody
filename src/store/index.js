import Vue from 'vue';
import Vuex from 'vuex';
import questions from './modules/questions';
import stat from './modules/stat';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    lives: 3,
    totalPointsEarned: 0,
    guessedTracks: 0,
    questionsLeft: 10,
  },
  modules: {
    questions,
    stat,
  },
  strict: debug,
});
