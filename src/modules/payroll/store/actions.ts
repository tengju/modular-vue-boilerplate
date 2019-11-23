import { ActionTree } from "vuex";
import { CustomState } from "./types/CustomState";
import { RootState } from "@/types/RootState";

const actions: ActionTree<CustomState, RootState> = {
  getPayrollItem({ commit }) {
    // TestData: Should be replaced with an api call
    const item = {
      id: 5,
      type: "XXXX",
      price: 8.92
    };
    commit("setPayrollItem", item);
  },
  getPayroll({ commit }) {
    // TestData: Should be replaced with an api call
    const items = [
      {
        id: 5,
        type: "XXXX",
        price: 8.92
      },
      {
        id: 98,
        type: "X--XXX",
        price: 8.22
      }
    ];
    commit("setPayrollItems", items);
  }
};

export default actions;
