import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CamisetasView from "@/views/CamisetasView.vue";
import EstampaView from "@/views/EstampaView.vue";
import MoletomView from "@/views/MoletomView.vue";

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
    {
      path: "/estampas",
      name: "estampas",
      component: EstampaView,
    },
    {
      path: "/moletons",
      name: "moletons",
      component: MoletomView,
    },
  ],
});

export default router;
