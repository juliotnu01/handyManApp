<template>
    <ion-page>
        <ion-content>
            <swiper class="bg-[url('/src/assets/img/fondoLogin.png')] bg-content bg-center h-full py-5  ">
                <swiper-slide class="h-full align-middle">
                    <div class=" bg-red-400 bg-opacity-5  h-full flex flex-col gap-5 p-5 justify-end pb-10 ">
                        <div>
                            <ion-img src="/src/assets/img/cajaDeHerramientas.png"> </ion-img>
                        </div>
                        <div>
                            <input type="text" placeholder="Ingrese nombre completo"
                                class="w-full h-12 px-5 rounded-xl text-black shadow-xl border-solid border-[1px] ">
                        </div>
                        <div>
                            <input type="text" placeholder="Ingrese correo electronico "
                                class="w-full h-12 px-5 rounded-xl text-black border-solid border-[1px]">
                        </div>
                        <div>
                            <input type="password" placeholder="Ingrese contraseña"
                                class="w-full h-12 px-5 rounded-xl text-black border-solid border-[1px]">
                        </div>
                        <div>
                            <input type="password" placeholder="Confirme la contraseña "
                                class="w-full h-12 px-5 rounded-xl text-black border-solid border-[1px]">
                        </div>
                        <div>
                            <ion-item class="rounded-xl "  >
                                <ion-select aria-label="Fruit"   interface="popover"
                                    placeholder="Selecciona tipo de cuenta">
                                    <ion-select-option value="especialista">Especialista</ion-select-option>
                                    <ion-select-option value="Cliente">Cliente</ion-select-option>
                                </ion-select>
                            </ion-item>
                        </div>
                        <div class="w-full flex justify-center">
                            <ion-button class="w-3/5 ">register</ion-button>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    Slide 2
                </swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
            </swiper>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonImg,
    IonItem,
    IonInput,
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
</script>