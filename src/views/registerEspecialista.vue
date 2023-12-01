<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <div class="flex justify-between">
                    <span class="text-center  w-full self-center text-[20px] font-bold font-sans">Verificación</span>
                    <ion-button class=" capitalize text-blue-400 font-bold font-sans  "
                        @click="() => router.push('/tabs/tab1')" fill="clear">Cerrar</ion-button>
                </div>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-accordion-group expand="inset">
                <ion-accordion value="first">
                    <ion-item slot="header" color="light">
                        <ion-label>Informacion básica</ion-label>
                    </ion-item>
                    <div class="ion-padding h-fit" slot="content">
                        <div class="flex flex-col justify-center">
                            <ion-avatar class="mr-5 self-center mt-1 ">
                                <img alt="avatar"
                                    :src="imgUSerTemp == '' ? 'https://ionicframework.com/docs/img/demos/avatar.svg' : imgUSerTemp" />
                            </ion-avatar>
                            <label for="btn-img"
                                class=" w-18 self-center -translate-x-3 text-center px-2 py-1 rounded-xl m-2 border-solid border-red-400 border-[2px] text-red-800">
                                <input @change="changeFileImgUser" ref="imgUser" id="btn-img" type="file" class="hidden">
                                Añadir una foto
                            </label>
                        </div>
                        <ion-list>
                            <ion-item>
                                <ion-input label="Nombre" label-placement="floating"></ion-input>
                            </ion-item>
                            <ion-item>
                                <ion-input label="Apellido" label-placement="floating"></ion-input>
                            </ion-item>
                            <ion-item>
                                <ion-input type="date" label="Fecha de nacimiento" label-placement="floating"></ion-input>
                            </ion-item>

                            <ion-item>
                                <ion-input type="email" label="Correo Electronico" label-placement="floating"></ion-input>
                            </ion-item>


                        </ion-list>
                    </div>
                </ion-accordion>
                <ion-accordion value="second">
                    <ion-item slot="header" color="light">
                        <ion-label>Carta de antecedentes no penales</ion-label>
                    </ion-item>
                    <div class="ion-padding h-fit w-full flex" slot="content">
                        <label for="btn-img" class=" w-full self-center  p-2 rounded-sm  border-solid border-red-400 border-[2px] text-red-800 flex justify-between">
                            <input @change="changeFileCartaAntecedentesUser" ref="CartaAntecedentesUser" id="btn-img" type="file" class="hidden">
                            <p class=" self-center" > 
                                Añadir documento 
                            </p>
                            <button class="w-6 h-6 "  >
                                <p class=" self-center text-center text-[16px]" >
                                    X
                                </p>
                            </button>
                        </label>
                    </div>
                </ion-accordion>
                <ion-accordion value="third">
                    <ion-item slot="header" color="light">
                        <ion-label>Documento de identificacion</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Third Content</div>
                </ion-accordion>
                <ion-accordion value="fourth">
                    <ion-item slot="header" color="light">
                        <ion-label>Confirmación de ID</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Third Content</div>
                </ion-accordion>
                <ion-accordion value="fifth">
                    <ion-item slot="header" color="light">
                        <ion-label>Catálogo de servicios</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">Third Content</div>
                </ion-accordion>
            </ion-accordion-group>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton, IonList, IonAvatar, IonInput } from '@ionic/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router: any = useRouter()

const imgUser: any = ref(null);
const imgUSerTemp: any = ref('');
const changeFileImgUser = () => {
    imgUSerTemp.value = URL.createObjectURL(imgUser.value.files[0])
}

const CartaAntecedentesUser: any = ref(null);
const cartaAntecedentesUSerTemp: any = ref(null);
const changeFileCartaAntecedentesUser = () => {
    cartaAntecedentesUSerTemp.value = CartaAntecedentesUser.value.files[0]
    console.log(CartaAntecedentesUser.value.files[0]);
    
}

</script>