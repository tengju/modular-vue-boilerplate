<template>
  <div class="home">
    <nav>
      <ul>
        <li
          v-for="right in user.rights"
          :key="right"
          style="list-style: none;"
          class="link"
        >
          <a @click.prevent="$router.push('/' + right)">
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
import { mapActions, mapState } from "vuex";
export default {
  name: "home",
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    ...mapActions(["openModule"])
  }
};
</script>

<style lang="scss">
.link {
  list-style: none;
  cursor: pointer;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
}
</style>
