import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  watch: {
    async "$route.fullPath"(newVal, oldVal) {
      const modulePath = newVal.split("/")[1];
      if (modulePath) {
        const { currentModule } = this.$store.state;
        if (
          (currentModule && modulePath !== currentModule.name) ||
          !currentModule
        ) {
          await this.$store.dispatch("openModule", modulePath);
        }
      }
    }
  },
  async beforeCreate() {
    await this.$store.dispatch("getUser");
    const modulePath = this.$route.fullPath.split("/")[1];
    if (modulePath) {
      await this.$store.dispatch("openModule", modulePath);
    } else {
      this.$store.dispatch("setLoading", false);
    }
  },
  render: h => h(App)
}).$mount("#app");
