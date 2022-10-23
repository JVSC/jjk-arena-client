import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeRoute from "./home/route";

const routes: Array<RouteRecordRaw> = [HomeRoute];

export default createRouter({
  routes,
  history: createWebHistory(),
});
