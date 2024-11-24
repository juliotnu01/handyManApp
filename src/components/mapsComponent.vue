<template>
    <div id="container" class="w-full h-full z-[1] relative">
        <div id="map" class="w-full h-full z-[1] shadow-md  "></div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { Geolocation } from '@capacitor/geolocation';
import { useMapStore } from "@/stores/storeMapComponent/MapStore";
import { storeToRefs } from "pinia";
import RealStateIcon from '@/assets/Icons/real-estate.png'
// import standingManIcon from '@/assets/Icons/standing-man.png'
import { createApp } from 'vue';
import InfoWindowComponent from '@/components/cardComponentInfoWindowMarker.vue'

const store = useMapStore();
const { loader,
    google,
    marketInit,
    optionMap,
    map }: any = storeToRefs(store);

const initMap = async () => {
    try {
        let app = createApp(InfoWindowComponent);
        let component = app.mount(document.createElement('div'));
        google.value = await loader.value.load();
        const coordinates = await Geolocation.getCurrentPosition();
        const { Map } = await google.value.maps.importLibrary("maps");
        const { Marker } = await google.value.maps.importLibrary("marker");
        const { LatLng } = await google.value.maps.importLibrary("core");
        const { InfoWindow } = await google.value.maps.importLibrary("streetView");
        const origin: any = new LatLng(coordinates.coords.latitude, coordinates.coords.longitude);
        optionMap.value = {
            center: origin,
            zoom: 15,
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
        }
        map.value = new Map(document.getElementById("map") as HTMLElement, optionMap.value);
        marketInit.value = new Marker({ position: origin, icon: RealStateIcon , animation: google.value.maps.Animation.DROP, map: map.value });

        const infowindow = new InfoWindow({ content: component.$el });
        marketInit.value.addListener("click", () => {
            infowindow.open({
                anchor: marketInit.value,
                map: map.value,
                
            });
        });
    } catch (error) {
        console.log({ error });
    }
};



onMounted(() => {
    initMap();
});
</script>