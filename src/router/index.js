import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/Home",
      // Async component

      component: import("@/views/HomeView"),
    },
  ],
});

export default router
