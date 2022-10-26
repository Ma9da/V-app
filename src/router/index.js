import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from "vue";
import Home from ""

// Async component
const lazyRoute = (path) => import(path);


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/Home",
      component: lazyRoute("@/views/HomeView"),
    },
  ],
});

export default router
