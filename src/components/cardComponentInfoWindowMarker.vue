<template>
    <div>
        <div class="bg-cover bg-center h-56 -mb-16 ">
            <img class="w-full h-45"
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
        </div>
        <div class="p-4">
            <p class="uppercase tracking-wide text-sm font-bold text-gray-700">Detached house • 5y old</p>
            <p class="text-3xl text-gray-900">$750,000</p>
            <p class="text-gray-700">742 Evergreen Terrace</p>
        </div>
        <div class="flex p-4 border-t border-gray-300 text-gray-700">
            <div class="flex-1 inline-flex items-center">
                <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z">
                    </path>
                </svg>
                <p><span class="text-gray-900 font-bold">3</span> Bedrooms</p>
            </div>
            <div class="flex-1 inline-flex items-center">
                <svg class="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                        d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z">
                    </path>
                </svg>
                <p><span class="text-gray-900 font-bold">2</span> Bathrooms</p>
            </div>
        </div>
        <div class="flex justify-between gap-4">
            <ion-menu-toggle @click="storeServicio()" menu="first-menu"
                class="p-4 py-2 bg-purple-400 text-center text-white font-bold rounded-md w-full">
                <button>
                    Ver detalle
                </button>
            </ion-menu-toggle>
            <button class="p-4 py-2 bg-blue-400 text-center text-white font-bold rounded-md w-full ">
                Contactar
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import {
    IonMenuToggle,
} from '@ionic/vue';
import { useSideRightMenuStore } from '@/stores/storeSiderightMenu/sideRight.js'

import { computed } from 'vue';
import { storeToRefs } from "pinia";
import axios from 'axios';



const storeSideRightMeny: any = useSideRightMenuStore()

const { menuID }: any = storeToRefs(storeSideRightMeny);


const computedMenuID: any = computed({
    get() { return menuID.value },
    set(val) { menuID.value = val }
})

const openMenu = async () => {
    computedMenuID.value = 'first-menu'
    await storeSideRightMeny.openRightMenu;
};

const storeServicio = async () => {
    try {
        await axios.post('http://localhost:8000/api/servicios/store', {
            codigo: '5346f9e0-7ee0-11ee-b962-0242ac120002',
            servicio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            tipo_servicio: 'Lorem ipsum dolor',
            ubicacion: '5402 Margaretta Stravenue, Deonberg, IA 05039-8529',
            coordenadas: '26.65195, 56.36255',
            status: 1,
            precio: parseFloat('999.999,99'),
            usr_creador: 1,
            usr_solicitante: 1,
        })
    } catch (error) {
        console.log(error)
    }
}
</script>