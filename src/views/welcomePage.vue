<template>
    <ion-page>
        <ion-content>
            <swiper>
                <swiper-slide>
                    <div class="bg-gray-300 w-full h-screen" >
                        <div class="flex flex-col items-center justify-end h-full">
                            <div class="flex flex-col items-center justify-center h-full bg-red-300 rounded-t-[80px]">
                                <ion-img :src="logoGif" class="w-60 h-60"></ion-img>
                                <h1 class="text-[80px] font-bold text-gray-800 mt-4 text-center">Bienvenido a Citiuss</h1>
                                <p class="text-gray-600 mt-2 text-center font-bold text-[20px] mx-5">
                                    Descubre herramientas y servicios para tus proyectos, desde handyman hasta clínicas veterinarias.
                                </p>
                                <ion-button @click="() => changeSlide(1)" color="dark" class="mt-8 tracking-[.3rem] text-center">comensar</ion-button>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="bg-gray-300 w-full h-screen" >
                        <div class="flex flex-col items-center justify-end h-full">
                            <div class="flex flex-col items-center justify-center h-full bg-red-300 rounded-t-[80px]">
                                <div class="flex mx-5" >
                                    <ion-img :src="servicios" class="w-45 h-45"></ion-img>
                                </div>
                                <h1 class="text-[80px] font-bold text-gray-800 mt-4 text-center">¿Para que sirve?</h1>
                                <p class="text-gray-600 mt-2 text-center font-bold text-[20px] mx-5">
                                    Con esta app, no solo podras encontrar serivicios de handyman si no una amplia gama de serivicios y comercio que se ajustan a tus necesidades.
                                </p>
                                <ion-button @click="() => changeSlide(0)" color="dark" class="mt-8 tracking-[.3rem] text-center" to="/login">Login</ion-button>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonMenu,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonRouterOutlet,
    IonSelect,
    IonSelectOption,
    menuController
} from '@ionic/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import handiman from '@/assets/img/handiman.png'
import logoGif from '@/assets/img/logo.png'
import servicios from '@/assets/img/serivicios.png'
import { ref } from 'vue';
import SwiperClass from 'swiper';

let swiperInstance = ref<SwiperClass | null>(null);

const changeSlide = (index: number) => {
    if (swiperInstance.value) {
        swiperInstance.value.slideTo(index);
    }
};
</script>