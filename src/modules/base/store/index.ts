import Vue from "vue";
import Vuex, { Module } from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import { CustomState } from "./types/CustomState";
import { RootState } from "@/types/RootState";
Vue.use(Vuex);

const namespaced: boolean = true;

const storeModule: Module<CustomState, RootState> = {
  namespaced,
  state,
  mutations,
  actions
};

export default storeModule;
