import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "@/types/RootState";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    loading: true,
    user: null
  },
  mutations: {
    setLoading(state, loadingState) {
      state.loading = loadingState;
    },

    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setLoading({ commit }, loadingState) {
      commit("setLoading", loadingState);
    },
    async getUser({ commit }) {
      // Fake user for the test scenario
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            const user = {
              name: "Tomiko nadazuke",
              age: 23,
              rights: ["Base", "Upload", "Download"]
            };
            commit("setUser", user);
            resolve();
          } catch (error) {
            reject();
          }
        }, 1000);
      });
    }
  }
});
