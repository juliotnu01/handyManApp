import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
// import { computed } from "vue";
// import { storeToRefs } from "pinia";
// import { useTopMenuStore } from "@/stores/storeTopMenu/storeTopMenu.js";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/welcome",
    component: () => import("@/views/welcomePage.vue"),
    name:'welcome.page'
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
    name: "loging.page",
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

// router.beforeEach((to, from) => {
//   const StoreTopMenu = useTopMenuStore();
//   const { mode } = storeToRefs(StoreTopMenu);

//   const modeCliente = computed({
//     get() {
//       return mode.value;
//     },
//     set(val) {
//       mode.value = val;
//     },
//   });

//   if (to.path === "landing") {
//     modeCliente.value = true;
//   } else if (to.path === "/tabs/tab1") {
//     modeCliente.value = false;
//   }
//   return true;
// });
export default router;
