import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Todo from "../components/Todo";
import FileNotFound from "../views/FileNotFound";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/:catchAll(.*)",
    component: FileNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
