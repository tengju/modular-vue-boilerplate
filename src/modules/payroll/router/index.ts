import { RouteConfig } from "vue-router";
import Settings from "../settings";
const routes: RouteConfig[] = [
  {
    path: Settings.path,
    component: () => import(/* webpackChunkName: "payroll" */ "../App.vue"),
    children: [
      {
        path: "/",
        name: "PayrollList",
        component: () =>
          import(/* webpackChunkName: "payroll" */ "../views/PayrollList.vue")
      },
      {
        path: ":id",
        name: "PayrollSingle",
        component: () =>
          import(/* webpackChunkName: "payroll" */ "../views/PayrollSingle.vue")
      }
    ]
  }
];

export default routes;
