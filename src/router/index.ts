import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import { useTopRegisterEspecialista } from "@/stores/registerEspecialista/RegisterEspecialistaStore";
import { Preferences } from "@capacitor/preferences";
import pinia from "@/stores/store";
const especialistaStore = useTopRegisterEspecialista(pinia);
const { getstatusRevision } = especialistaStore;
// Función auxiliar para verificar la revisión
const checkCondition = async (): Promise<boolean> => {
  try {
    const { value } = await Preferences.get({ key: "revision" });
    if (!value) return false;
    const { register } = JSON.parse(value);
    if (register) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};
const checkConditionRevision = async (): Promise<boolean> => {
  try {
    const { value } = await Preferences.get({ key: "revision" });
    if (!value) return false;
    const { revision } = JSON.parse(value);
    if (revision) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};

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
    path: "/revision-especialista",
    component: () => import("@/views/revisionEspecialista.vue"),
    name: "revision.especialista",
    beforeEnter: async (to, from, next) => {
      const condition = await checkConditionRevision();
      if (condition) {
        next();
      } else {
        next({ name: "especialista" });
      }
    },
  },
  {
    path: "/landing",
    component: () => import("@/views/LandingPage.vue"),
    name: "landing",
  },
  {
    path: "/especialista",
    component: () => import("@/views/especialistaView.vue"),
    name: "especialista",
    beforeEnter: async (to, from, next) => {
      const condition = await checkCondition();
      const condition2 = await checkConditionRevision();
      if (condition && condition2) {
        next({ name: "revision.especialista" });
      } else {
        next();
      }
    },
  },
  {
    path: "/register-especialista",
    component: () => import("@/views/registerEspecialista.vue"),
    name: "register.especialista",
    beforeEnter: async (to, from, next) => {
      const condition = await checkCondition();
      if (condition) {
        next({ name: "revision.especialista" });
      } else {
        next();
      }
    },
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

// Navigation guard global
router.beforeEach(async (to, from, next) => {
  try {
    await getstatusRevision();
    const validUserPref = await Preferences.get({ key: "valid_user" });
    const modoPref = await Preferences.get({ key: "modo" });

    const valid_user = validUserPref.value === "true";
    const modo = modoPref.value === "true";

    if (to.name === "login.page" && valid_user) {
      // Si el usuario está validado y trata de ir al login, redirigir según el modo
      if (modo) {
        next({ name: "home.map" });
      } else {
        next({ name: "revision.especialista" });
      }
    } else if (!valid_user && to.name !== "login.page") {
      // Si el usuario no está validado y trata de ir a cualquier ruta que no sea login
      next({ name: "login.page" });
    } else {
      // En cualquier otro caso, permitir la navegación
      next();
    }
  } catch (error) {
    console.error("Error en navigation guard:", error);
    next({ name: "login.page" });
  }
});

export default router;
