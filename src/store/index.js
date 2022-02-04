import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    charters: [],
  },
  mutations: {
    saveCharters(state, char){
      state.charters = char
    }
  },
  actions: {
    async fetchCharters(context){
      const request = await fetch('https://swapi.dev/api/people')
      const data = await request.json()
      context.commit('saveCharters', data.results)
    }
  },
  modules: {},
});
