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
        <ion-item router-direction="root" :router-link="p.url" lines="none" v-for="(p, i) in appPages" :key="i"
          class="">
          <ion-icon #="start" :ios="p.iosIcon" :md="p.mdIcon" class="mr-2"></ion-icon>
          <ion-label>{{ p.title }}</ion-label>
        </ion-item>
        <div class="border-b-solid border-b-[1px]"></div>
        <div class=" mx-4 mt-4 flex justify-center ">
          <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input @change="changeMode" type="checkbox" name="toggle" id="toggle" v-model="modeCliente"
              class="toggle-checkbox border-red-400 absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
            <label for="toggle"
              class="toggle-label block overflow-hidden h-6 rounded-full bg-red-400 cursor-pointer border-red-400 "></label>
          </div>
          <label for="toggle" class="toggle-label text-xs text-gray-700 self-center ">{{ modeCliente.toString() ==
            'true' ? 'Cliente' : 'Especialista' }}</label>
        </div>
        <div class="w-full mt-4" v-if="route.path === '/tabs/tab1'">
          <ion-button @click="() => router.push('/register-especialista')" class="w-full font-bold bg-black rounded-md "
            color="black">
            Registrarse
          </ion-button>
        </div>
        <div class="w-fit absolute bottom-0 m-4 right-0  ">
          <ion-button @click.prevent="logout" class="w-full font-bold " :color="`danger`">
            <div class="w-full h-full flex justify-between">
              <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 471.851 471.851"
                xml:space="preserve">
                <g>
                  <g>
                    <path d="M340.109,355.875c-5.707,0-11.023,2.153-14.578,5.926c-3.438,3.646-5.094,8.516-4.764,14.062
			c1.087,18.758,1.366,37.374,1.438,54.903c-24.923,0.365-53.802,0.558-83.906,0.558c-56.414,0.006-107.818-0.665-145.585-1.878
			c-0.317-75.389-2.133-151.893-3.89-225.927c-1.246-52.654-2.541-107.049-3.285-160.649c29.66-1.623,68.789-2.381,122.435-2.381
			c26.509,0,52.722,0.183,76.279,0.348c9.282,0.068,18.159,0.124,26.481,0.178c0.544,11.656,1.468,23.237,2.519,35.878
			c0.036,0.421,0.102,0.815,0.193,1.3c-0.137,0.937-0.208,1.871-0.208,2.798v12.022c0,11.154,9.074,20.225,20.23,20.225
			s20.23-9.071,20.23-20.225V80.989c0-0.317-0.021-0.63-0.061-0.932c0.137-1.34,0.152-2.656,0.04-4.009
			c-1.411-16.955-2.874-34.489-2.985-52.206c-0.03-4.522-1.407-8.653-3.977-11.989c-3.184-7.021-9.76-11.192-17.742-11.212
			c-15.335-0.031-32.275-0.15-50.16-0.287C255.363,0.183,230.286,0,205.056,0C143.074,0,98.469,1.166,64.68,3.662
			c-6.807,0.505-12.454,3.89-15.942,9.551c-2.61,3.385-3.963,7.607-3.905,12.226c0.686,59.694,2.143,120.355,3.552,179.026
			c1.902,79.232,3.867,161.16,3.966,241.737c0.013,8.196,4.296,14.817,11.535,17.936c3.468,3.271,7.939,5.093,13.004,5.281
			c41.172,1.569,97.814,2.432,159.484,2.432c37.234,0,74.959-0.319,106.219-0.919c8.709-0.162,15.757-5.312,18.474-13.456
			c1.102-2.514,1.655-5.302,1.655-8.277c-0.005-26.329-0.116-50.069-1.508-73.945C360.462,362.527,350.032,355.875,340.109,355.875z
			" />
                    <path d="M406.383,142.679h-117.84c-0.152-16.618-0.645-33.215-2.356-49.777c-0.091-0.942-0.33-1.78-0.533-2.643
			c-0.797-14.117-18.54-26.015-30.554-12.659c-41.36,45.956-82.726,91.911-124.083,137.867c-7,3.146-12.299,10.836-11.832,18.943
			c-0.467,8.104,4.832,15.797,11.832,18.94c41.357,45.956,82.723,91.911,124.083,137.872c12.014,13.351,29.757,1.447,30.554-12.659
			c0.203-0.863,0.442-1.706,0.533-2.646c1.712-16.56,2.204-33.159,2.356-49.779h117.84c8.805,0,14.31-5.113,16.508-11.518
			c2.504-2.858,4.129-6.672,4.129-11.552v-62.048v-13.23v-62.045c0-4.888-1.625-8.694-4.124-11.547
			C420.692,147.797,415.188,142.679,406.383,142.679z M390.6,227.796v13.226v48.697H275.264c-1.721,0-3.265,0.244-4.737,0.6
			c-9.146-0.051-18.332,5.814-18.337,17.61c0,8.49-0.056,16.98-0.198,25.477c-29.693-33.002-59.389-65.999-89.09-98.995
			c29.696-33,59.392-65.996,89.09-98.995c0.138,8.487,0.198,16.978,0.198,25.479c0,11.793,9.191,17.661,18.337,17.608
			c1.468,0.358,3.017,0.602,4.737,0.602H390.6V227.796z" />
                  </g>
                </g>
              </svg>
              <p class="w-fit h-fit font-bold self-center">
                Salir
              </p>
            </div>
          </ion-button>
        </div>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="main-content" />
    <!-- Loading Overlay -->
    <LoadingOverlay :isVisible="loadingO" />
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
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTopMenuStore } from '@/stores/storeTopMenu/storeTopMenu.js'
import { storeToRefs } from 'pinia';
import LoadingOverlay from './components/LoadingOverlayComponent.vue'
import { useTopRegisterEspecialista } from '@/stores/registerEspecialista/RegisterEspecialistaStore'

const RegisterEspecialistaStore = useTopRegisterEspecialista();
const { loading } = storeToRefs(RegisterEspecialistaStore);

const loadingO = ref(false); // Cambia esto a 'false' para ocultar el spinner

onMounted(() => {
  watch(loading, (newVal) => {
    loadingO.value = newVal
  })
})


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
  // if (modeCliente.value) {
  //   router.push('/landing')
  // } else {
  //   router.push('/tabs/tab1')
  // }
}

const logout: any = async () => {
  try {
    router.push({ name: 'loging.page' })
  } catch (error) {
    console.log(error);

  }
}

</script>
<style scoped lang="less">
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
