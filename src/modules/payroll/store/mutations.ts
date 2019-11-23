import { MutationTree } from "vuex";
import { CustomState } from "./types/CustomState";

const mutations: MutationTree<CustomState> = {
  setPayrollItem(state, payrollItem) {
    state.payrollItem = payrollItem;
  },
  setPayrollItems(state, payroll) {
    state.payroll = payroll;
  }
};

export default mutations;
