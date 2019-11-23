import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  async beforeCreate() {
    await this.$store.dispatch("getUser");
    this.$store.dispatch("setLoading", false);
  },
  render: h => h(App)
}).$mount("#app");
