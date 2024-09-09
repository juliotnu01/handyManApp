import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw, useRoute } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
// import { computed } from "vue";
// import { storeToRefs } from "pinia";
// import { useTopMenuStore } from "@/stores/storeTopMenu/storeTopMenu.js";
import { Preferences } from "@capacitor/preferences";
const route: any = useRoute();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
    name: "root.page",
  },
  {
    path: "/welcome",
    component: () => import("@/views/welcomePage.vue"),
    name: "welcome.page",
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
    name: "login.page",
  },
  {
    path: "/landing",
    component: () => import("@/views/LandingPage.vue"),
    name: "landing",
  },
  {
    path: "/register-especialista",
    component: () => import("@/views/registerEspecialista.vue"),
    name: "register.espescialista",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1Page.vue"),
        name: "home.map",
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2Page.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from) => {
  // const { value: validUser } = await Preferences.get({ key: "valid_user" });
  // if (!validUser) {
  //   return router.push({ name: "login.page" });
  // } else if (
  //   (validUser && to.name == "login.page") ||
  //   from.name == "login.page"
  // ) {
  //   return router.push({ name: "home.map" });
  // } else {
    return true;
  // }
});
export default router;
