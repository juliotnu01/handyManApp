<template>
  <ion-page >
    <ion-content >
      <mapComponet v-if="toogleView == 1" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonMenu, IonTabButton, IonTabs, IonLabel, IonIcon, IonRouterOutlet, menuController } from '@ionic/vue';
import mapComponet from '@/components/mapsComponent.vue'
import { useTopMenuStore } from '@/stores/storeTopMenu/storeTopMenu.js'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const StoreTopMenu = useTopMenuStore()
const { toogleView } = storeToRefs(StoreTopMenu)

</script>
