import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CamisetasView from "@/views/CamisetasView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/camisetas",
      name: "camisetas",
      component: CamisetasView,
    },
  ],
});

export default router;
