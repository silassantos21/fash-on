/* eslint-disable */
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Home.vue") }],
  },
  {
    path: "/schedules",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Schedules.vue") }],
  },
  {
    path: "/favorites",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Favorites.vue") }],
  },
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Profile.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
