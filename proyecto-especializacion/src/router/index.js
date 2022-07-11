import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/SesionesView.vue"),
  // },
  {
    path: "/sesionesCompletadas",
    name: "sesionesCompletas",
    component: () =>
      import(/* webpackChunkName: "sesiones" */ "../views/SesionesView.vue"),
  },
  {
    path: "/registrar",
    name: "registrar",
    component: () =>
      import(/* webpackChunkName: "registrar" */ "../views/RegistrarView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
