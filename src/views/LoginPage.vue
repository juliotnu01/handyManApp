<template>
    <ion-page>
        <ion-content>
            <div class=" bg-red-100  h-full flex flex-col gap-5 p-5 justify-end pb-10 ">
                <div class="mb-40">
                    <img class="animate-bounce  mx-auto  w-60 h-60" src="../assets/Icons/logo.png" />
                </div>
                <div>
                    <input type="text" placeholder="Ingrese correo electronico " v-model="model.email"
                        class="w-full h-12 px-5 rounded-xl text-black border-solid border-[1px] ">
                </div>
                <div>
                    <input type="password" placeholder="Ingrese contraseña" v-model="model.password"
                        class="w-full h-12 px-5 rounded-xl text-black border-solid border-[1px]">
                </div>
                <div class="flex justify-between text-[12px]">
                    <div class="flex gap-2">
                        <input type="checkbox" id="checkboxLogin">
                        <label for="checkboxLogin" class="self-center "> Mantener sesion</label>
                    </div>
                    <div>
                        <a href="#" class="text-blue-300">¿Olvido su contraseña?</a>
                    </div>
                </div>
                <div class="flex gap-2">
                    <div class="border w-full border-t-0 border-l-0 border-r-0 self-center "></div>
                    <p class="text-[#cecece]">o</p>
                    <div class="border w-full border-t-0 border-l-0 border-r-0 self-center "></div>
                </div>
                <div class="flex justify-around gap-2">
                    <button>
                        <svg width="35px" height="35px" viewBox="0 0 32 32" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30 16C30 23.728 23.735 30 16 30C8.265 30 2 23.728 2 16C2 8.265 8.265 2 16 2C23.735 2 30 8.265 30 16Z"
                                fill="#283544" />
                            <path
                                d="M22.5621 12.4574C22.4857 12.502 20.6671 13.4425 20.6671 15.5279C20.7528 17.9061 22.9621 18.7401 23 18.7401C22.9621 18.7847 22.6665 19.8763 21.7907 21.0205C21.0956 22.0062 20.3242 23 19.1528 23C18.0385 23 17.6385 22.3431 16.3528 22.3431C14.972 22.3431 14.5813 23 13.5242 23C12.3528 23 11.5242 21.953 10.7913 20.9766C9.8391 19.6986 9.02978 17.6931 9.00121 15.7675C8.98195 14.7471 9.19189 13.744 9.72481 12.8921C10.477 11.7026 11.8198 10.8952 13.2863 10.8686C14.4099 10.8333 15.4099 11.5875 16.0956 11.5875C16.7528 11.5875 17.9814 10.8686 19.3714 10.8686C19.9714 10.8692 21.5714 11.0376 22.5621 12.4574ZM16.0006 10.6649C15.8006 9.73303 16.3528 8.80119 16.8671 8.20677C17.5242 7.48792 18.5621 7 19.4571 7C19.5143 7.93185 19.1522 8.84575 18.505 9.51136C17.9242 10.2302 16.9242 10.7714 16.0006 10.6649Z"
                                fill="white" />
                        </svg>
                    </button>
                    <button>
                        <svg width="35px" height="35px" viewBox="0 0 48 48" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="20" fill="#3B5998" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z"
                                fill="white" />
                        </svg>
                    </button>
                    <button>
                        <svg width="35px" height="35px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                            fill="none">
                            <path fill="#4285F4"
                                d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z" />
                            <path fill="#34A853"
                                d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z" />
                            <path fill="#FBBC04"
                                d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z" />
                            <path fill="#EA4335"
                                d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z" />
                        </svg>
                    </button>
                    <button>
                        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M5.73268 2.043C6.95002 0.832583 8.95439 1.04804 9.9737 2.40962L11.2347 4.09402C12.0641 5.20191 11.9909 6.75032 11.0064 7.72923L10.7676 7.96665C10.7572 7.99694 10.7319 8.09215 10.76 8.2731C10.8232 8.6806 11.1635 9.545 12.592 10.9654C14.02 12.3853 14.8905 12.7253 15.3038 12.7887C15.4911 12.8174 15.5891 12.7906 15.6194 12.78L16.0274 12.3743C16.9026 11.5041 18.2475 11.3414 19.3311 11.9305L21.2416 12.9691C22.8775 13.8584 23.2909 16.0821 21.9505 17.4148L20.53 18.8273C20.0824 19.2723 19.4805 19.6434 18.7459 19.7119C16.9369 19.8806 12.7187 19.6654 8.28659 15.2584C4.14868 11.144 3.35462 7.556 3.25415 5.78817L4.00294 5.74562L3.25415 5.78817C3.20335 4.89426 3.62576 4.13796 4.16308 3.60369L5.73268 2.043ZM8.77291 3.30856C8.26628 2.63182 7.322 2.57801 6.79032 3.10668L5.22072 4.66737C4.8908 4.99542 4.73206 5.35695 4.75173 5.70307C4.83156 7.10766 5.47286 10.3453 9.34423 14.1947C13.4057 18.2331 17.1569 18.3536 18.6067 18.2184C18.9029 18.1908 19.1975 18.0369 19.4724 17.7636L20.8929 16.3511C21.4704 15.777 21.343 14.7315 20.5252 14.2869L18.6147 13.2484C18.0871 12.9616 17.469 13.0562 17.085 13.438L16.6296 13.8909L16.1008 13.359C16.6296 13.8909 16.6289 13.8916 16.6282 13.8923L16.6267 13.8937L16.6236 13.8967L16.6171 13.903L16.6025 13.9166C16.592 13.9262 16.5799 13.9367 16.5664 13.948C16.5392 13.9705 16.5058 13.9959 16.4659 14.0227C16.3858 14.0763 16.2801 14.1347 16.1472 14.1841C15.8764 14.285 15.5192 14.3392 15.0764 14.2713C14.2096 14.1384 13.0614 13.5474 11.5344 12.0291C10.0079 10.5113 9.41194 9.36834 9.2777 8.50306C9.20906 8.06061 9.26381 7.70331 9.36594 7.43225C9.41599 7.29941 9.47497 7.19378 9.5291 7.11389C9.5561 7.07405 9.58179 7.04074 9.60446 7.01368C9.6158 7.00015 9.6264 6.98817 9.63604 6.9777L9.64977 6.96312L9.65606 6.95666L9.65905 6.95363L9.66051 6.95217C9.66122 6.95146 9.66194 6.95075 10.1908 7.48258L9.66194 6.95075L9.94875 6.66556C10.3774 6.23939 10.4374 5.53194 10.0339 4.99297L8.77291 3.30856Z"
                                fill="#1C274C" />
                        </svg>
                    </button>
                </div>
                <div class="w-full flex justify-center">
                    <ion-button class="w-4/5" @click.prevent="login">
                        <div class="w-full h-full flex gap-4 justify-center">
                            <p class=" self-center ">
                                Entrar
                            </p>
                            <svg v-show="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none"
                                viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                    stroke-width="4">
                                </circle>
                                <path class="opacity-75" fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                </path>
                            </svg>
                        </div>
                    </ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonInput,
    toastController,
    IonImg, IonButtons, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonMenu, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet, menuController
} from '@ionic/vue';
import axios from 'axios';
import { ref, Ref } from 'vue';
import { useRouter, RouteComponent } from 'vue-router';
import { Preferences } from '@capacitor/preferences';
import { useTopRegisterEspecialista } from '@/stores/registerEspecialista/RegisterEspecialistaStore';


const BaseServer = ref('http://18.218.213.31')
// const route: RouteComponent = useRoute();

const registerEspcialistaStore = useTopRegisterEspecialista()
const router: RouteComponent = useRouter();
const model: any = ref({
    email: '',
    password: ''
})
const loading: Ref<Boolean> = ref(false);
// const BaseServer = ref('http://localhost:8000')

const showToast = async (message = '') => {
    const toast = await toastController.create({
        message: message,
        duration: 2000
    });
    toast.present();
};


const login: any = async () => {
    try {

        loading.value = true
        registerEspcialistaStore.loading = true
        let { data } = await axios.post(`${BaseServer.value}/api/verify-login`, model.value)

        await Preferences.set({
            key: 'name',
            value: data.user.email,
        });
        await Preferences.set({
            key: 'user',
            value: JSON.stringify(data.user),
        });
        await Preferences.set({
            key: 'valid_user',
            value: data.valid,
        });

        let { value } = await Preferences.get({ key: 'modo' })

        if (value) {
            await router.push({ name: 'home.map' });
        } else {
            await Preferences.set({ key: 'modo', value: 'true' })
        }



        showToast("Session iniciada con exito...")
        loading.value = false
        registerEspcialistaStore.loading = false


    } catch (error: any) {
        showToast('Usuario o contraseña incorrectos.');
        loading.value = false
        registerEspcialistaStore.loading = false
    }
}

</script>