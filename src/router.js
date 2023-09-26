import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomePage.vue'
import ApartmentPage from "./pages/ApartmentPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/apartment", component: ApartmentPage },
  ],
});

export default router;