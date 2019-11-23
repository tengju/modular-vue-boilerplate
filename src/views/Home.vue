<template>
  <div class="home">
    <nav>
      <ul>
        <li v-for="right in user.rights" :key="right" style="list-style: none;">
          <a @click.prevent="openModule(right)">
            {{ right }}
          </a>
        </li>
      </ul>
    </nav>
    Welcome {{ user.name }}
    <br />
  </div>
</template>

<script>
import loadModule from "@/helpers/lazyload/loadModule.helper";
export default {
  name: "home",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    async openModule(right) {
      await this.$store.dispatch("getUser");
      this.$store.dispatch("setLoading", true);
      await loadModule(right.toLowerCase());
      this.$router.push("/" + right);
      this.$store.dispatch("setLoading", false);
    }
  }
};
</script>
