import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateView from "../views/CreateView.vue";
import UpdateView from "../views/UpdateView.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomeView,
  },
  {
    path: "/create",
    name: "Create",
    component: CreateView,
  },
  {
    path: "/update/:id",
    name: "Update",
    component: UpdateView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
