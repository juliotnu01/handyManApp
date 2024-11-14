<template>
    <ion-page>
        <ion-content>
            <div
                class=" bg-red-100  h-full flex flex-col  gap-5 p-5 justify-end pb-10 bg-[url('../assets/img/fondoLogin.png')] ">
                <div class="mx-auto  flex  ">
                    <img class="  mx-auto self-center  w-60 h-60" src="../assets/img/logo.png" />
                </div>

                <p class=" text-[24px] self-center font-bold text-center ">
                    Su registro para especialista esta en revisión ...
                </p>
                <ion-button @click="goBackHome" class="w-full font-bold " :color="`danger`">
                    Regresar
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>
<script setup>
import {
    IonInput,
    toastController,
    IonImg, IonButtons, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonMenu, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet, menuController
} from '@ionic/vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useTopRegisterEspecialista } from '@/stores/registerEspecialista/RegisterEspecialistaStore';
const especialistaStore = useTopRegisterEspecialista()
const { mode } = storeToRefs(especialistaStore)
import { Preferences } from "@capacitor/preferences";

const router = useRouter()

const goBackHome = async () => {
    router.push({ name: 'home.map' })
    mode.value = true

    await Preferences.set({
        key: 'modo',
        value: mode.value,
    });

}

</script>