<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton, IonList, IonAvatar, IonInput, toastController } from '@ionic/vue';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import { useTopRegisterEspecialista } from '@/stores/registerEspecialista/RegisterEspecialistaStore'


const router = useRouter()
const RegisterEspecialistaStore = useTopRegisterEspecialista();

const { getTipoServicios, registerEspecialista } = RegisterEspecialistaStore;
const { tiposServicios, especialista, MessageToaste, showToastM } = storeToRefs(RegisterEspecialistaStore);

// imagen de usuario
const imgUser = ref(null);
const imgUSerTemp = ref('');
const imgIdentifacaionTemp = ref(null);
const documentoCertificado = ref(null);
const documentosCertificadosAgregados = ref([]);
const identicacionPersonal = ref({
    frontal: null,
    trasera: null,
})
const currentToast = ref(null);



const changeFileImgUser = (e) => {
    imgUSerTemp.value = URL.createObjectURL(e.target.files[0])
    especialista.value.avatar = e.target.files[0]
}
const handlerDocumentoCertificado = (e) => {
    documentoCertificado.value = e.target.files[0];
}
const removeDocumentoCertificado = () => {
    documentoCertificado.value = null
}

const agregarDocumentoCertificado = () => {
    documentosCertificadosAgregados.value.push(documentoCertificado.value)
    documentoCertificado.value = null
    especialista.value.certificados = documentosCertificadosAgregados.value
}

const removeDocumentoCertificadoAgregado = (indice) => {
    documentosCertificadosAgregados.value.splice(indice, 1);
}

const handlerIdentificacion = (e) => {

    if (identicacionPersonal.value.frontal != null) {
        identicacionPersonal.value.trasera = e.target.files[0]
    } else if (identicacionPersonal.value.trasera != null) {
        identicacionPersonal.value.frontal = e.target.files[0]
    } else {
        identicacionPersonal.value.frontal = e.target.files[0]
    }
    imgIdentifacaionTemp.value = URL.createObjectURL(e.target.files[0])
    especialista.value.documento_identidad = identicacionPersonal.value
}


const checkedItems = ref([]);
const newItem = ref({ nombre: '', id: null });

// Función para seleccionar un ítem y eliminarlo de 'items'
const selectItem = (item) => {
    checkedItems.value.push(item);  // Agrega el ítem a la lista seleccionada
    tiposServicios.value = tiposServicios.value.filter((i) => i.nombre !== item.nombre);  // Lo elimina de 'items'
    especialista.value.servicios = checkedItems.value
};

// Función para deseleccionar un ítem y devolverlo a 'items'
const removeItem = (item) => {
    tiposServicios.value.push(item);  // Devuelve el ítem a la lista original
    checkedItems.value = checkedItems.value.filter((i) => i.nombre !== item.nombre);  // Lo elimina de 'checkedItems'
    especialista.value.servicios = checkedItems.value
};

const addCustomItem = () => {
    checkedItems.value.push(newItem.value);  // Agrega la nueva opción a la lista de items
    newItem.value.nombre = '';  // Limpia el input después de agregar la opción
};


const showToast = async (message = '') => {
    try {
        // Si hay un toast activo, intentamos cerrarlo
        if (currentToast.value) {
            await currentToast.value.dismiss().catch(() => {
                // En caso de que ya haya sido cerrado
                console.log("El toast ya fue cerrado.");
            });
            currentToast.value = null; // Reiniciamos la referencia
        }

        // Creamos el nuevo toast
        currentToast.value = await toastController.create({
            message: message,
            duration: 2000
        });
        await currentToast.value.present();
        showToastM.value = false
    } catch (error) {
        console.error('Error mostrando el toast:', error);
    }
};

onMounted(() => {
    getTipoServicios();

    // Observar cambios en showToastM y ejecutar el toast cuando cambie a true
    watch(showToastM, async (newVal) => {
        if (newVal) {
            await showToast(MessageToaste.value);
        }
    });
});


</script>
<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <div class="flex justify-between">
                    <span class="text-start ml-2  w-full self-center text-[20px] font-bold font-sans">Registro
                        Especialista</span>
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
                                <input @change="changeFileImgUser" ref="imgUser" id="btn-img" type="file"
                                    class="hidden">
                                Añadir una foto
                            </label>
                        </div>
                        <ion-list>
                            <ion-item>
                                <ion-input v-model="especialista.nombre" label="Nombre"
                                    label-placement="floating"></ion-input>
                            </ion-item>
                            <ion-item>
                                <ion-input v-model="especialista.apellido" label="Apellido"
                                    label-placement="floating"></ion-input>
                            </ion-item>
                            <ion-item>
                                <ion-input v-model="especialista.fecha_nacimiento" type="date"
                                    label="Fecha de nacimiento" label-placement="floating"></ion-input>
                            </ion-item>

                            <ion-item>
                                <ion-input v-model="especialista.correo" type="email" label="Correo Electronico"
                                    label-placement="floating"></ion-input>
                            </ion-item>
                        </ion-list>
                    </div>
                </ion-accordion>
                <ion-accordion value="second">
                    <ion-item slot="header" color="light">
                        <ion-label>Añadir documentos / certificados </ion-label>
                    </ion-item>
                    <div class="ion-padding h-fit w-full  " slot="content">
                        <div class="flex gap-10">
                            <label for="btn-documento-certificado"
                                class=" w-full self-center  p-2 rounded-lg  border-solid border-red-400 border-[2px] text-red-800 flex justify-between">
                                <input id="btn-documento-certificado" @change="handlerDocumentoCertificado" type="file"
                                    class="hidden">
                                <p class=" self-center line-clamp-1">
                                    {{ documentoCertificado ? documentoCertificado.name : 'Seleccionar documento' }}
                                </p>
                                <button class="w-6 h-6 " @click="removeDocumentoCertificado">
                                    <p class=" self-center text-center text-[16px]"> X </p>
                                </button>
                            </label>
                            <button @click="agregarDocumentoCertificado" class="w-fit h-fit text-blue-600 self-center">
                                <svg fill="currentColor" width="30px" height="30px" viewBox="0 0 32 32" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM22.386 10.146l-9.388 9.446-4.228-4.227c-0.39-0.39-1.024-0.39-1.415 0s-0.391 1.023 0 1.414l4.95 4.95c0.39 0.39 1.024 0.39 1.415 0 0.045-0.045 0.084-0.094 0.119-0.145l9.962-10.024c0.39-0.39 0.39-1.024 0-1.415s-1.024-0.39-1.415 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div class=" border-solid w-full border-[1px] h-[1px] border-[#cecece] my-4 " />
                        <div class="w-full">
                            <ul class="divide-y divide-gray-200">
                                <li class="p-3 flex justify-between items-center user-card"
                                    v-for="(documento, d) in documentosCertificadosAgregados " :key="d">
                                    <div class="flex items-center">
                                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none"
                                            class="h-12 w-12 text-sky-500 ">
                                            <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor"
                                                stroke-width="2" />
                                            <path d="M9 9H15" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" />
                                            <path d="M9 13H15" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" />
                                            <path d="M9 17H13" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" />
                                        </svg>
                                        <span class="ml-3 font-medium mx-4 "> {{ documento.name }} </span>
                                    </div>
                                    <div class="flex gap-4">
                                        <button @click="removeDocumentoCertificadoAgregado(d)"
                                            class="text-gray-500 hover:text-gray-700">
                                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                                                <path d="M10 12V17" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 12V17" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4 7H20" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ion-accordion>
                <ion-accordion value="third">
                    <ion-item slot="header" color="light">
                        <ion-label>Documento de identificacion</ion-label>
                    </ion-item>
                    <div class="ion-padding h-fit" slot="content">
                        <ion-list>
                            <ion-item>
                                <ion-input v-model="especialista.numero_identificacion" label="Numero identificacion"
                                    label-placement="floating"></ion-input>
                            </ion-item>
                        </ion-list>
                        <div class="flex gap-4">
                            <div class="flex flex-col justify-center  ">
                                <img src="src/assets/img/INE.jpg"
                                    class="'w-full ml-12 h-[250px] bg-contain  rounded-lg bg-center bg-no-repeat  self-center  items-center" />
                                <label
                                    v-if="identicacionPersonal.frontal == null || identicacionPersonal.trasera == null"
                                    for="img-identifacion"
                                    class=" w-18 self-center  text-center px-2 py-1 rounded-xl m-2 border-solid border-red-400 border-[2px] text-red-800">
                                    <input @change="handlerIdentificacion" id="img-identifacion" type="file"
                                        class="hidden">
                                    {{
                                        identicacionPersonal.frontal == null
                                            ? 'Seleccionar parte frontal de la identificación'
                                            : identicacionPersonal.trasera == null
                                                ? ' Seleccione el reverso de su identifacacion'
                                                : identicacionPersonal.frontal == null && identicacionPersonal.trasera == null
                                                    ? 'Seleccionar parte frontal de la identificación'
                                                    : ''
                                    }}
                                </label>
                            </div>
                        </div>
                        <div class=" border-solid w-full border-[1px] h-[1px] border-[#cecece] my-4 " />
                        <div class="w-full">
                            <ul class="divide-y divide-gray-200">
                                <li class="p-3 flex justify-between items-center user-card"
                                    v-if="identicacionPersonal.frontal != null">
                                    <div class="flex items-center">
                                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none"
                                            class="h-12 w-12 text-sky-500 ">
                                            <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor"
                                                stroke-width="2" />
                                            <path d="M9 9H15" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" />
                                            <path d="M9 13H15" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" />
                                            <path d="M9 17H13" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" />
                                        </svg>
                                        <span class="ml-3 font-medium mx-4 "> {{ identicacionPersonal.frontal.name }}
                                        </span>
                                    </div>
                                    <div class="flex gap-4">
                                        <button @click="identicacionPersonal.frontal = null"
                                            class="text-gray-500 hover:text-gray-700">
                                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                                                <path d="M10 12V17" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 12V17" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4 7H20" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                                <li class="p-3 flex justify-between items-center user-card"
                                    v-if="identicacionPersonal.trasera != null">
                                    <div class="flex items-center">
                                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none"
                                            class="h-12 w-12 text-sky-500 ">
                                            <rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor"
                                                stroke-width="2" />
                                            <path d="M9 9H15" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" />
                                            <path d="M9 13H15" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" />
                                            <path d="M9 17H13" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" />
                                        </svg>
                                        <span class="ml-3 font-medium mx-4 "> {{ identicacionPersonal.trasera.name }}
                                        </span>
                                    </div>
                                    <div class="flex gap-4">
                                        <button @click="identicacionPersonal.trasera = null"
                                            class="text-gray-500 hover:text-gray-700">
                                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                                                <path d="M10 12V17" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M14 12V17" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M4 7H20" stroke="currentColor" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                                <path
                                                    d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                                <path
                                                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ion-accordion>
                <ion-accordion value="fifth">
                    <ion-item slot="header" color="light">
                        <ion-label>Catálogo de servicios</ion-label>
                    </ion-item>
                    <div class="ion-padding max-w-2xl  " slot="content">
                        <div class="ion-padding max-w-2xl" slot="content">
                            <h3 class="my-2 font-bold">Opciones disponibles:</h3>
                            <div v-if="tiposServicios.length > 0">
                                <label v-for="(item, index) in tiposServicios" :key="index" class="m-2">
                                    <input type="checkbox" :value="item" @change="selectItem(item)" class="hidden" />
                                    <span
                                        class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-200">
                                        {{ item.nombre }}
                                    </span>
                                </label>
                                <!-- <div class="mb-4">
                                    <input v-model="newItem.nombre" placeholder="Agregar opción personalizada"
                                        class="px-4 py-2 border border-gray-300 rounded" />
                                    <button @click="addCustomItem"
                                        class="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                        Agregar
                                    </button>
                                </div> -->
                            </div>
                            <p v-else>No hay más opciones disponibles.</p>
                            <div>
                                <h3 class="my-2 font-bold">Opciones seleccionadas:</h3>
                                <ul>
                                    <li v-for="(item, index) in checkedItems" :key="index" class="m-2 ">
                                        <button @click="removeItem(item)"
                                            class="ml-2  flex w-fit h-fit gap-2 border-solid border-[1px] rounded-full p-2 border-gray-200  ">
                                            <p> {{ item.nombre }} </p>
                                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                                                class=" self-center ">
                                                <path
                                                    d="M10.0303 8.96967C9.73741 8.67678 9.26253 8.67678 8.96964 8.96967C8.67675 9.26256 8.67675 9.73744 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2626 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9697L13.0606 12L15.0303 10.0303C15.3232 9.73746 15.3232 9.26258 15.0303 8.96969C14.7374 8.6768 14.2625 8.6768 13.9696 8.96969L12 10.9394L10.0303 8.96967Z"
                                                    fill="#1C274C" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                                                    fill="#1C274C" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </ion-accordion>
            </ion-accordion-group>
            <div class="mx-4 ">
                <button @click="registerEspecialista"
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    Registrar
                </button>
            </div>
        </ion-content>
    </ion-page>
</template>
