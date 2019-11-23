<template>
  <div class="home">
    THIS IS PAYROLLLIST
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
      return this.$store.state[Settings.moduleName].payroll;
    }
  },
  methods: {
    ...mapActions({ getPayroll: Settings.moduleName + "/getPayroll" })
  }
};
</script>
