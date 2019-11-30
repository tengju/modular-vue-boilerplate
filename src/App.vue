<template>
  <div id="app">
    <LoadingScreen v-if="loading" />
    <router-view v-else />
  </div>
</template>

<script>
import LoadingScreen from "@/components/LoadingScreen";
import { mapState } from "vuex";
export default {
  components: { LoadingScreen },
  computed: mapState({
    loading: state => state.loading
  })
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
