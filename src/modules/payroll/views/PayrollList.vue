<template>
  <div class="home">
    THIS IS PAYROLLLIST
    <br />
    <ul>
      <li
        v-for="p in payroll"
        :key="p.id"
        class="link"
        @click="goToPayroll(p.id)"
      >
        {{ p.type }}
      </li>
    </ul>
    {{ JSON.stringify(payroll) }}
  </div>
</template>

<script>
import Settings from "../settings";
import { mapActions } from "vuex";
export default {
  async mounted() {
    return this.getPayroll();
  },
  computed: {
    payroll() {
      return this.$store.state[Settings.name].payroll;
    }
  },
  methods: {
    ...mapActions({ getPayroll: Settings.name + "/getPayroll" }),
    goToPayroll(id) {
      this.$router.push({ name: "PayrollSingle", params: { id } });
    }
  }
};
</script>
