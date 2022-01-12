import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import HelloWorld from "../components/HelloWorld.vue";
import AsycRouterUser from "../components/AsycRouterUser.vue"
import MsgCenter from "../components/MsgCenter.vue"
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/hellow", component: HelloWorld },
    { path: "/users/:xxId/:ooId", component: AsycRouterUser},
    { path: "/MsgCenter", component: MsgCenter},
  ],
});
