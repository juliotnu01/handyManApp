<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonButton, IonList, IonAvatar, IonInput, toastController } from '@ionic/vue';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';

import { useTopRegisterEspecialista } from '@/stores/registerEspecialista/RegisterEspecialistaStore'


const router = useRouter()
const RegisterEspecialistaStore = useTopRegisterEspecialista();

const { getTipoServicios, registerEspecialista } = RegisterEspecialistaStore;
const { tiposServicios, especialista, MessageToaste, showToastM, error } = storeToRefs(RegisterEspecialistaStore);

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
const newItem = ref({ nombre: '', id: null });
const selectItem = (item) => {
    tiposServicios.value = tiposServicios.value.filter((i) => i.nombre !== item.nombre);  // Lo elimina de 'items'
    especialista.value.servicios = selectedItems.value
};
const removeItem = (item) => {
    selectedItems.value = selectedItems.value.filter((i) => i.nombre !== item.nombre);  // Lo elimina de 'selectedItems'
    especialista.value.servicios = selectedItems.value
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

const searchContainer = ref(null)
const searchInput = ref(null)
const searchTerm = ref('')
const isOpen = ref(false)
const highlightedIndex = ref(-1)
const selectedItems = ref([])

const filteredItems = computed(() => {
    return tiposServicios.value.filter(item => {
        const matchesSearch = !searchTerm.value ||
            item.nombre.toLowerCase().includes(searchTerm.value.toLowerCase())
        return matchesSearch
    })
})


// Métodos
const selectItem2 = (item) => {
    if (!isItemSelected(item)) {
        selectedItems.value.push(item)
    }
    searchTerm.value = ''
    isOpen.value = true // Reabrir dropdown después de seleccionar
    searchInput.value.focus() // Volver a enfocar el campo de búsqueda
    especialista.value.servicios = selectedItems.value
}

const removeItem2 = (index) => {
    selectedItems.value.splice(index, 1)
}

const isItemSelected = (item) => {
    return selectedItems.value.some(selected => selected.id === item.id)
}

const openDropdown = () => {
    isOpen.value = true
    highlightedIndex.value = -1
}

const handleBlur = () => {
    // Usar setTimeout para permitir que el click en una opción se procese
    setTimeout(() => {
        if (!searchContainer.value.contains(document.activeElement)) {
            isOpen.value = false
            highlightedIndex.value = -1
            searchTerm.value = ''
        }
    }, 100)
}

// Click fuera para cerrar
const handleClickOutside = (event) => {
    if (searchContainer.value && !searchContainer.value.contains(event.target)) {
        isOpen.value = false
        searchTerm.value = ''
    }
}

const registerEspe = async () => {
    await registerEspecialista()
    await router.push({ name: 'revision.especialista' });


}


onMounted(() => {
    getTipoServicios();

    // Observar cambios en showToastM y ejecutar el toast cuando cambie a true
    watch(showToastM, async (newVal) => {
        if (newVal) {
            await showToast(MessageToaste.value);
        }
    });
    watch(error, async (err) => {
        if (err) {
            await showToast(err);
            error.value = null
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
                    <div slot="content" class="ion-padding ">
                        <h3 class="my-2 font-bold">Opciones disponibles:</h3>
                        <div class="relative w-full h-[400px] overflow-y-scroll">
                            <div class="relative" ref="searchContainer">
                                <input type="text"
                                    class="w-full px-4 py-2 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    v-model="searchTerm" @focus="openDropdown" @blur="handleBlur"
                                    placeholder="Buscar servicios..." ref="searchInput">

                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <svg class="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>

                                <ul v-show="isOpen"
                                    class="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
                                    <li v-for="(item, index) in filteredItems" :key="item.id"
                                        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        @mousedown.prevent="selectItem2(item)" :class="{
                                            'bg-gray-100': highlightedIndex === index,
                                            'bg-blue-50': isItemSelected(item)
                                        }" @mouseover="highlightedIndex = index">
                                        {{ item.nombre }}
                                    </li>
                                    <li v-if="filteredItems.length === 0" class="px-4 py-2 text-gray-500">
                                        No se encontraron resultados
                                    </li>
                                </ul>
                            </div>
                            <div class="mb-2 flex flex-wrap gap-2 my-2">
                                <div v-for="(selected, index) in selectedItems" :key="index"
                                    @click="removeItem(selected)"
                                    class="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
                                    <span>{{ selected.nombre }}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </ion-accordion>
            </ion-accordion-group>
            <div class="mx-4 ">
                <button @click="registerEspe"
                    class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                    Registrar
                </button>
            </div>
        </ion-content>
    </ion-page>
</template>
