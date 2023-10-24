import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue'
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    {
      path: "/apartment/:id",
      name: "apartment",
      component: ApartmentPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: ErrorPage,
    },
  ],
});

export default router;