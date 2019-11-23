import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
  {
    path: "/Payroll",
    name: "PayrollList",
    component: () =>
      import(/* webpackChunkName: "payroll" */ "../views/PayrollList.vue"),
    children: [
      {
        path: "/:id",
        name: "PayrollSingle",
        component: () =>
          import(/* webpackChunkName: "payroll" */ "../views/PayrollSingle.vue")
      }
    ]
  }
];

export default routes;
