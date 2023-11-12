<template>
  <ion-page>
    <menuSideBarRight />
    <ion-router-outlet id="main-content" />
    <!-- top menu -->
    <div class="bg-sky-400 w-full z-[1] h-28 absolute top-0 rounded-bl-3xl rounded-br-3xl">
      <div class="bg-white bg-transparent h-[95%] w-[99%] mx-auto rounded-bl-3xl rounded-br-3xl border-white border-x-[3px]">
        <div class="w-full p-4 pt-2 ">
          <svg width="35px" height="35px" viewBox="0 0 32 32" class="">
            <path d="M3.205 6.937v4.265h25.59v-4.265h-25.59zM27.729 10.136h-23.457v-2.133h23.457v2.133z" fill="#fff" />
            <path d="M3.205 18.133h25.59v-4.265h-25.59v4.265zM4.271 14.934h23.457v2.133h-23.457v-2.133z" fill="#fff" />
            <path d="M3.205 25.063h25.59v-4.265h-25.59v4.265zM4.271 21.864h23.457v2.133h-23.457v-2.133z" fill="#fff" />
          </svg>
        </div>
        <div class="px-5 flex justify-between  ">
          <svg width="25px" height="25px" viewBox="0 0 15 15" fill="none" @click="toggleBuscar = !toggleBuscar" >
            <path d="M0 2.5H15M3 7.5H12M5 12.5H10" stroke="#fff" />
          </svg>
          <div class="flex justify-end w-full gap-5 ">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" class=" self-center">
              <path
                d="M3 8.70938C3 7.23584 3 6.49907 3.39264 6.06935C3.53204 5.91678 3.70147 5.79466 3.89029 5.71066C4.42213 5.47406 5.12109 5.70705 6.51901 6.17302C7.58626 6.52877 8.11989 6.70665 8.6591 6.68823C8.85714 6.68147 9.05401 6.65511 9.24685 6.60952C9.77191 6.48541 10.2399 6.1734 11.176 5.54937L12.5583 4.62778C13.7574 3.82843 14.3569 3.42876 15.0451 3.3366C15.7333 3.24444 16.4168 3.47229 17.7839 3.92799L18.9487 4.31624C19.9387 4.64625 20.4337 4.81126 20.7169 5.20409C21 5.59692 21 6.11871 21 7.16229V15.2907C21 16.7642 21 17.501 20.6074 17.9307C20.468 18.0833 20.2985 18.2054 20.1097 18.2894C19.5779 18.526 18.8789 18.293 17.481 17.827C16.4137 17.4713 15.8801 17.2934 15.3409 17.3118C15.1429 17.3186 14.946 17.3449 14.7532 17.3905C14.2281 17.5146 13.7601 17.8266 12.824 18.4507L11.4417 19.3722C10.2426 20.1716 9.64311 20.5713 8.95493 20.6634C8.26674 20.7556 7.58319 20.5277 6.21609 20.072L5.05132 19.6838C4.06129 19.3538 3.56627 19.1888 3.28314 18.7959C3 18.4031 3 17.8813 3 16.8377V8.70938Z"
                stroke="#fff" stroke-width="1.5" />
              <path d="M9 6.63867V20.5" stroke="#fff" stroke-width="1.5" />
              <path d="M15 3V17" stroke="#fff" stroke-width="1.5" />
            </svg>
            <div class=" w-[1px] bg-white h-[2rem] self-center " ></div>
            <svg fill="#fff" width="20px" height="20px" viewBox="0 0 16 16" class=" self-center">
              <path  data-name="Path 79"
                d="M-7.5,16h-10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h10a.5.5,0,0,1,.5.5A.5.5,0,0,1-7.5,16Zm.5-5.5a.5.5,0,0,0-.5-.5h-10a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h10A.5.5,0,0,0-7,10.5Zm0-5A.5.5,0,0,0-7.5,5h-10a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h10A.5.5,0,0,0-7,5.5Zm0-5A.5.5,0,0,0-7.5,0h-10a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h10A.5.5,0,0,0-7,.5Zm-13,0a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2A.5.5,0,0,0-20,.5Zm0,5a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2A.5.5,0,0,0-20,5.5Zm0,5a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2A.5.5,0,0,0-20,10.5Zm0,5a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2A.5.5,0,0,0-20,15.5Z"
                transform="translate(23)" />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full  px-5 py-3 z-[2]" v-if="toggleBuscar">
        <label for="filter">
          <input type="text" id="filter" class="h-8 w-full pl-5 border-sky-400 shadow-2xl rounded-xl border-[2px]" placeholder="Filtrar..." >
        </label>
      </div>
    </div>
    <!-- botom menu -->
    <div class="bg-sky-400 w-full z-[1] h-16 absolute bottom-0  rounded-tl-full rounded-tr-full  ">
      <div
        class="flex justify-around w-[99%]  rounded-tl-full rounded-tr-full  bg-transparent border-white border-x-[3px] h-[95%]  my-auto mx-auto mt-[3px]">
        <button @click="() => router.push('/tabs/tab1')"
          class="mt-2 bg-white rounded-full w-12 h-12 flex justify-center  shadow-2xl">
          <img :src="iconMap" class=" w-8 h-8 self-center" alt="">
        </button>
        <button @click="() => router.push('/tabs/tab2')"
          class="mt-2 bg-white rounded-full w-12 h-12 flex justify-center  shadow-2xl">
          <img :src="IconRepair" class=" w-8 h-8 self-center" />
        </button>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonMenu,
  IonImg,
  IonMenuToggle,
  IonContent,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonButton,
  IonRouterOutlet,
  menuController
} from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import iconMap from '@/assets/Icons/customer-info-svgrepo-com.svg'
import IconRepair from '@/assets/Icons/repair-hammer-svgrepo-com.svg'
import menuSideBarRight from '@/components/menuSideRightBarComponent.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()
const toggleBuscar = ref(false)

</script>
