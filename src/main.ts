import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import loadModule from "@/helpers/lazyload/loadModule.helper";

Vue.config.productionTip = false;

const init = async () => {
  await store.dispatch("getUser");
  store.dispatch("setLoading", true);
  await loadModule("base");
  store.dispatch("setLoading", false);
};

new Vue({
  router,
  store,
  async beforeCreate() {
    await init();
  },
  render: h => h(App)
}).$mount("#app");
