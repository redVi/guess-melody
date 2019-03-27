import gameService from '@/services/game-service';

const state = {
  list: [],
};

const mutations = {
  SET_LIST(st, items) {
    st.items = items;
  },
};

const actions = {
  async SET_LIST({ commit }) {
    const stat = await gameService.getStat();
    commit('SET_LIST', stat);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
