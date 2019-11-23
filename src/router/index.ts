import Vue from "vue";
import VueRouter from "vue-router";
import loadView from "@/helpers/lazyload/loadView.helper";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: loadView("Home")
  },
  {
    path: "*",
    name: "notFound",
    component: loadView("404")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
