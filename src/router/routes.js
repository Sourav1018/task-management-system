const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/projects",
        component: () => import("pages/Task/TaskIndex.vue"),
      },
      {
        path: "/profile",
        component: () => import("pages/Profile/ProfileSettings.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
