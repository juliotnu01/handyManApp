<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar #="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <img :src="iconMap" class=" w-6 h-6" alt="">
          <ion-label>Cliente</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <img :src="IconRepair" class=" w-6 h-6"  />
          <ion-label>Vendedor</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import iconMap from '@/assets/Icons/customer-info-svgrepo-com.svg'
import IconRepair from '@/assets/Icons/repair-hammer-svgrepo-com.svg'
</script>
