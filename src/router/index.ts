import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import loadView from "@/helpers/lazyload/loadView.helper";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "home",
    component: loadView("Home")
  },
  {
    path: "/404",
    name: "notFound",
    component: loadView("404")
  },
  {
    path: "/403",
    name: "Forbidden",
    component: loadView("403")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
