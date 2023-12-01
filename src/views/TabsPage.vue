<template>
  <ion-page>
    <menuSideBarRight />
    <ion-router-outlet id="main-content" />
    <!-- top menu -->
    <div class="bg-[#c6495e] w-full z-[1] h-28 absolute top-0 rounded-bl-3xl rounded-br-3xl " v-show="route.path !== '/tabs/tab2' " >
      <div class="white bg-transparent h-[95%] w-[99%] mx-auto rounded-bl-3xl rounded-br-3xl border-black border-x-[3px]">
        <div class="w-full p-4 pt-2 ">
          <button @click="openFirstMenu">
            <svg width="35px" height="35px" viewBox="0 0 32 32" class="">
              <path d="M3.205 6.937v4.265h25.59v-4.265h-25.59zM27.729 10.136h-23.457v-2.133h23.457v2.133z" fill="#fff" />
              <path d="M3.205 18.133h25.59v-4.265h-25.59v4.265zM4.271 14.934h23.457v2.133h-23.457v-2.133z" fill="#fff" />
              <path d="M3.205 25.063h25.59v-4.265h-25.59v4.265zM4.271 21.864h23.457v2.133h-23.457v-2.133z" fill="#fff" />
            </svg>
          </button>
        </div>
        <div class="px-5 flex justify-between  ">
          <svg width="25px" height="25px" viewBox="0 0 15 15" fill="none" @click="toggleFilter = !toggleFilter">
            <path d="M0 2.5H15M3 7.5H12M5 12.5H10" stroke="#fff" />
          </svg>
          <div class="flex justify-end w-full gap-5 ">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" class=" self-center"
              @click="getterToggleView(1)">
              <path
                d="M3 8.70938C3 7.23584 3 6.49907 3.39264 6.06935C3.53204 5.91678 3.70147 5.79466 3.89029 5.71066C4.42213 5.47406 5.12109 5.70705 6.51901 6.17302C7.58626 6.52877 8.11989 6.70665 8.6591 6.68823C8.85714 6.68147 9.05401 6.65511 9.24685 6.60952C9.77191 6.48541 10.2399 6.1734 11.176 5.54937L12.5583 4.62778C13.7574 3.82843 14.3569 3.42876 15.0451 3.3366C15.7333 3.24444 16.4168 3.47229 17.7839 3.92799L18.9487 4.31624C19.9387 4.64625 20.4337 4.81126 20.7169 5.20409C21 5.59692 21 6.11871 21 7.16229V15.2907C21 16.7642 21 17.501 20.6074 17.9307C20.468 18.0833 20.2985 18.2054 20.1097 18.2894C19.5779 18.526 18.8789 18.293 17.481 17.827C16.4137 17.4713 15.8801 17.2934 15.3409 17.3118C15.1429 17.3186 14.946 17.3449 14.7532 17.3905C14.2281 17.5146 13.7601 17.8266 12.824 18.4507L11.4417 19.3722C10.2426 20.1716 9.64311 20.5713 8.95493 20.6634C8.26674 20.7556 7.58319 20.5277 6.21609 20.072L5.05132 19.6838C4.06129 19.3538 3.56627 19.1888 3.28314 18.7959C3 18.4031 3 17.8813 3 16.8377V8.70938Z"
                stroke="#fff" stroke-width="1.5" />
              <path d="M9 6.63867V20.5" stroke="#fff" stroke-width="1.5" />
              <path d="M15 3V17" stroke="#fff" stroke-width="1.5" />
            </svg>
            <div class=" w-[1px] bg-white h-[2rem] self-center "></div>
            <svg fill="#fff" width="20px" height="20px" viewBox="0 0 16 16" class=" self-center"
              @click="getterToggleView(2)">
              <path data-name="Path 79"
                d="M-7.5,16h-10a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h10a.5.5,0,0,1,.5.5A.5.5,0,0,1-7.5,16Zm.5-5.5a.5.5,0,0,0-.5-.5h-10a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h10A.5.5,0,0,0-7,10.5Zm0-5A.5.5,0,0,0-7.5,5h-10a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h10A.5.5,0,0,0-7,5.5Zm0-5A.5.5,0,0,0-7.5,0h-10a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h10A.5.5,0,0,0-7,.5Zm-13,0a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2A.5.5,0,0,0-20,.5Zm0,5a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2A.5.5,0,0,0-20,5.5Zm0,5a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2A.5.5,0,0,0-20,10.5Zm0,5a.5.5,0,0,0-.5-.5h-2a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h2A.5.5,0,0,0-20,15.5Z"
                transform="translate(23)" />
            </svg>
          </div>
        </div>
      </div>
      <div
        :class="{ 'w-full  px-5 py-3 z-[2] transition ease-in-out delay-150 block ': toggleFilter, 'w-full  px-5 py-3 z-[2] hidden ': !toggleFilter }">
        <label for="filter"
          class="flex relative h-8 w-full px-2   border-[#c6495e] shadow-lg rounded-xl border-[2px] bg-white">
          <svg width="15px" height="15px" viewBox="0 0 15 15" fill="none" @click="toggleFilter = !toggleFilter"
            class="self-center mr-2">
            <path d="M0 2.5H15M3 7.5H12M5 12.5H10" stroke="#cecece" />
          </svg>
          <input type="text" id="filter"
            class="focus:outline-none focus:border-transparent w-full rounded-tr-xl rounded-br-xl"
            placeholder="Filtrar...">
        </label>
      </div>
    </div>

    <!-- cards filters -->
    <div class=" z-[1] h-[42rem] relative top-40 w-11/12 mx-auto overflow-y-scroll p-2 grid grid-col-1 gap-2 " v-if="toggleFilter">
      <div class="bg-white w-full h-auto py-1 rounded-lg shadow-xl flex " v-for="n in 10" :key="n">
        <div class="w-2/5 h-full p-2">
          <div
            class="bg-cover rounded-xl bg-center h-full w-full bg-[url('https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')] ">
          </div>
        </div>
        <div class=" h-full w-full">
          <div class="flex justify-between ">
            <ion-chip class="-ml-1" style="background: none !important;">
              <ion-avatar>
                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
              </ion-avatar>
              <ion-label>Chip Avatar</ion-label>
            </ion-chip>
            <ion-label class=" self-center text-[12px] text-[#a5a4a4] mr-2">$999.999.99</ion-label>
          </div>
          <div class="px-3 pl-0 font-bold text-[12px] line-clamp-1 text-justify -mt-1">
            Lorem ipsum dolor sit amet consectetur
          </div>
          <div class="px-3 pl-0 font-bold text-[#cecece] text-[10px] line-clamp-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum exercitationem libero possimus ipsa id,
            laudantium vel? Fuga facere culpa enim, itaque asperiores molestias fugiat, error voluptatem nulla nihil
            autem.
          </div>
          <div class="flex gap-3">
            <ion-chip class="-ml-1 w-14 h-2 -p-2 text-white font-bold">
              <ion-avatar class="w-4 h-4">
                <svg width="20px" height="20px" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </ion-avatar>
              <ion-label>99</ion-label>
            </ion-chip>
            <ion-chip class="-ml-1 w-14 h-2 -p-2 text-white font-bold">
              <ion-avatar class="w-4 h-4">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="currentcolor" class="text-red-400">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                    fill="#000" />
                </svg>
              </ion-avatar>
              <ion-label>99</ion-label>
            </ion-chip>
            <ion-chip class="-ml-1 w-14 h-2 -p-2 text-white font-bold">
              <ion-avatar class="w-4 h-4">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
                    fill="#1C274C" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z"
                    fill="#1C274C" />
                </svg>
              </ion-avatar>
              <ion-label>99</ion-label>
            </ion-chip>
            <ion-chip class="-ml-1 w-14 h-2 -p-2 text-white font-bold">
              <ion-avatar class="w-4 h-4">
                <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.11413 8.35688C4.75894 8.56999 4.64377 9.03069 4.85688 9.38587C5.06999 9.74106 5.53069 9.85623 5.88587 9.64312L5.11413 8.35688ZM10.5 6L10.95 5.4C10.7061 5.21704 10.3756 5.19999 10.1141 5.35688L10.5 6ZM14.5 9L14.05 9.6C14.3236 9.80522 14.7014 9.79932 14.9685 9.58565L14.5 9ZM19.9685 5.58565C20.292 5.32689 20.3444 4.85493 20.0857 4.53148C19.8269 4.20803 19.3549 4.15559 19.0315 4.41435L19.9685 5.58565ZM17.75 19C17.75 19.4142 18.0858 19.75 18.5 19.75C18.9142 19.75 19.25 19.4142 19.25 19H17.75ZM19.25 11C19.25 10.5858 18.9142 10.25 18.5 10.25C18.0858 10.25 17.75 10.5858 17.75 11H19.25ZM9.75 19C9.75 19.4142 10.0858 19.75 10.5 19.75C10.9142 19.75 11.25 19.4142 11.25 19H9.75ZM11.25 11C11.25 10.5858 10.9142 10.25 10.5 10.25C10.0858 10.25 9.75 10.5858 9.75 11H11.25ZM13.75 19C13.75 19.4142 14.0858 19.75 14.5 19.75C14.9142 19.75 15.25 19.4142 15.25 19H13.75ZM15.25 14C15.25 13.5858 14.9142 13.25 14.5 13.25C14.0858 13.25 13.75 13.5858 13.75 14H15.25ZM5.75 19C5.75 19.4142 6.08579 19.75 6.5 19.75C6.91421 19.75 7.25 19.4142 7.25 19H5.75ZM7.25 14C7.25 13.5858 6.91421 13.25 6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14H7.25ZM5.88587 9.64312L10.8859 6.64312L10.1141 5.35688L5.11413 8.35688L5.88587 9.64312ZM10.05 6.6L14.05 9.6L14.95 8.4L10.95 5.4L10.05 6.6ZM14.9685 9.58565L19.9685 5.58565L19.0315 4.41435L14.0315 8.41435L14.9685 9.58565ZM19.25 19V11H17.75V19H19.25ZM11.25 19V11H9.75V19H11.25ZM15.25 19V14H13.75V19H15.25ZM7.25 19V14H5.75V19H7.25Z"
                    fill="#000000" />
                </svg>
              </ion-avatar>
              <ion-label>99</ion-label>
            </ion-chip>
          </div>
          <div class="flex  h-[2rem] w-full  justify-end gap-2 px-2">
            <button class="bg-[#cecece] w-8 h-8 flex justify-center rounded-full">
              <svg width="15px" height="15px" viewBox="0 0 32 32" fill="none" class=" self-center ">
                <path
                  d="M23.875 25C23.875 25 27.937 29 28.937 30C30.547 31.609 31 31 31 30V8C31 7.447 30.553 7 30 7H8C7.447 7 7 7.447 7 8V26C7 26.553 7.447 27 8 27H22M13 15H25M13 19H18M25 4V2C25 1.437 24.604 1 24 1H2C1.447 1 1 1.447 1 2V20C1 20.553 1.447 21 2 21H7"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button class="bg-[#cecece] w-8 h-8 flex justify-center rounded-full">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" class=" self-center ">
                <g clip-path="url(#clip0_15_529)">
                  <rect width="24" height="24" fill="none" />
                  <path
                    d="M2.01394 6.87134C1.34749 10.0618 3.85967 13.8597 7.01471 17.0147C10.1698 20.1698 13.9676 22.682 17.1581 22.0155C19.782 21.4674 21.1215 20.0697 21.8754 18.8788C22.1355 18.4678 22.0042 17.9344 21.6143 17.6436L17.9224 14.8897C17.5243 14.5928 16.9685 14.633 16.6174 14.9842L14.6577 16.9438C14.6577 16.9438 12.7529 16.3246 10.2288 13.8006C7.70482 11.2766 7.08564 9.37175 7.08564 9.37175L9.04529 7.4121C9.39648 7.06091 9.43671 6.5052 9.13975 6.10709L6.38585 2.4151C6.09505 2.02525 5.56163 1.89395 5.15068 2.15407C3.9597 2.90794 2.56203 4.24747 2.01394 6.87134Z"
                    stroke="#000000" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_15_529">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- botom menu -->
    <div class="bg-[#c6495e] w-full z-[1] h-16 absolute bottom-0  rounded-tl-full rounded-tr-full  ">
      <div
        class="flex justify-around w-[99%]  rounded-tl-full rounded-tr-full  bg-transparent border-black border-x-[3px] h-[95%]  my-auto mx-auto mt-[3px]">
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
  IonPage,
  IonRouterOutlet,
  IonAvatar,
  IonChip,
  IonLabel,
  IonMenuButton,
  menuController
} from '@ionic/vue';

import iconMap from '@/assets/Icons/customer-info-svgrepo-com.svg'
import IconRepair from '@/assets/Icons/repair-hammer-svgrepo-com.svg'
import menuSideBarRight from '@/components/menuSideRightBarComponent.vue'
import { useTopMenuStore } from '@/stores/storeTopMenu/storeTopMenu.js'
import { useRouter, useRoute } from 'vue-router';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

const router = useRouter()
const route = useRoute()
const StoreTopMenu = useTopMenuStore()
const { toggleBuscar, mode } = storeToRefs(StoreTopMenu)
const { getterToggleView } = useTopMenuStore()

const toggleFilter = computed({
  get() { return toggleBuscar.value },
  set(val) { toggleBuscar.value = val }
})
const modeCliente = computed({
  get() { return mode.value },
  set(val) { mode.value = val }
})
const openFirstMenu = async () => {
  await menuController.open('first-menu');
};



</script>


