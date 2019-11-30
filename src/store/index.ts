import Vue from "vue";
import MainRouter from "../router";
import Vuex from "vuex";
import { RootState } from "@/types/RootState";
import { fetchModule } from "@/helpers/lazyload/fetchModule.helper";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    loading: true,
    user: null,
    currentModule: null
  },
  mutations: {
    setLoading(state, loadingState) {
      state.loading = loadingState;
    },
    setCurrentModule(state, activeModule) {
      state.currentModule = activeModule;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setLoading({ commit }, loadingState) {
      commit("setLoading", loadingState);
    },
    async openModule({ commit, state }, moduleName) {
      if (!state.user) {
        throw new Error("USER_NOT_FOUND");
      }

      if (!state.user.rights.includes(moduleName)) {
        MainRouter.replace("/403");
        return;
      }

      commit("setLoading", true);
      setTimeout(async () => {
        try {
          const fetchedModule = await fetchModule(moduleName.toLowerCase());
          commit("setCurrentModule", fetchedModule);

          const { name, router, store } = fetchedModule;
          MainRouter.addRoutes(router);
          this.registerModule(name, store);
          MainRouter.replace(fetchedModule.path);
        } catch (error) {
          // Handle all errors related to module loading
          MainRouter.replace("/404");
        } finally {
          commit("setLoading", false);
        }
      }, 1000);
    },
    async getUser({ commit }) {
      // Fake user for the test scenario
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            const user = {
              name: "Tomiko nadazuke",
              age: 23,
              rights: ["Base", "Upload", "Download", "payroll"]
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
