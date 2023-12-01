<template>
  <ion-app>
    <ion-menu content-id="main-content" menu-id="first-menu">
      <ion-content class="ion-padding">
        <ion-item>
          <ion-avatar class="mr-5 ">
            <img alt="avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </ion-avatar>
          <ion-label>
            <ion-label>Juliot nuñez</ion-label>
            <ion-label>
              nunezjuliot@gmail.com
            </ion-label>
          </ion-label>
        </ion-item>
        <ion-item router-direction="root" :router-link="p.url" lines="none" v-for="(p, i) in appPages" :key="i" class="">
          <ion-icon #="start" :ios="p.iosIcon" :md="p.mdIcon" class="mr-2"></ion-icon>
          <ion-label>{{ p.title }}</ion-label>
        </ion-item>
        <div class="border-b-solid border-b-[1px]"></div>
        <div class=" mx-4 mt-4">
          <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input @change="changeMode" type="checkbox" name="toggle" id="toggle" v-model="modeCliente"
              class="toggle-checkbox border-red-400 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
            <label for="toggle"
              class="toggle-label block overflow-hidden h-6 rounded-full bg-red-400 cursor-pointer border-red-400 "></label>
          </div>
          <label for="toggle" class="toggle-label text-xs text-gray-700">{{ modeCliente.toString() == 'true' ? 'Cliente' :
            'Especialista' }}</label>
        </div>
        <div class="w-full mt-4"  v-if="route.path === '/tabs/tab1'" >
          <ion-button @click="() => router.push('/register-especialista')"  class="w-full font-bold" :color="`danger`"  >Registrarse</ion-button>
        </div>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonPage, IonMenu, IonContent, IonMenuButton, IonButton, IonBadge, IonChip, IonAvatar, IonLabel, IonIcon, IonItem, IonListHeader } from '@ionic/vue';
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  home,
  speedometer,
  cash,
  lockOpen,
  locate,
  car
} from 'ionicons/icons';
import { computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTopMenuStore } from '@/stores/storeTopMenu/storeTopMenu.js'
import { storeToRefs } from 'pinia';

const StoreTopMenu = useTopMenuStore()
const { mode } = storeToRefs(StoreTopMenu)
const router: any = useRouter()
const route: any = useRoute()
const appPages = [
  {
    title: 'Home',
    url: '/folder/home',
    iosIcon: home,
    mdIcon: home
  },
  {
    title: 'Mi billetera',
    url: '/folder/Outbox',
    iosIcon: cash,
    mdIcon: cash
  },
  {
    title: 'Ayuda',
    url: '/folder/Favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Mensajes',
    url: '/folder/Archived',
    iosIcon: mailOutline,
    mdIcon: mailOutline
  },
  {
    title: 'Centro de  seguridad',
    url: '/folder/Trash',
    iosIcon: lockOpen,
    mdIcon: lockOpen
  },
  {
    title: 'Configuración',
    url: '/folder/Spam',
    iosIcon: locate,
    mdIcon: locate
  }
];
const modeCliente = computed({
  get() { return mode.value },
  set(val) { mode.value = val }
})
const changeMode = () => {
  if (modeCliente.value) {
    router.push('/landing')
  } else {
    router.push('/tabs/tab1')
  }
}

</script>
<style scoped lang="less" >
ion-menu::part(container) {
  border-radius: 0 20px 20px 0;

  box-shadow: 4px 0px 16px rgba(255, 47, 0, 0.18);
}

.clip-flag {
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%);
}

.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}

.toggle-checkbox:checked+.toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}
</style>
