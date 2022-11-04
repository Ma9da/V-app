import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      // Async component

      component: import("@/views/HomeView.vue"),
    },
    {
      path: "/",
      name: "AboutView",
      // Async component

      component: import("@/views/AboutView.vue"),
    },
  ],
});

export default router;
