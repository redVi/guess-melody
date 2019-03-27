import Vue from 'vue';
import Vuex from 'vuex';
import game from './modules/game';
import stat from './modules/stat';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    game,
    stat,
  },
  strict: debug,
});
