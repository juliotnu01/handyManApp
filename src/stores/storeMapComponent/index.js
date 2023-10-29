import { defineStore } from 'pinia'
import { Loader } from "@googlemaps/js-api-loader"
export const useMapStore = defineStore('googleMaps', {
    state() {
        return {
            google: {},
            loader: new Loader({
                apiKey: "AIzaSyDjc7g2sDf0u4tc_JiUzA1brt0V3PcDSrk",
                version: "weekly",
                libraries: ['places']
            }),
            marketInit: null,
            map: null
        }
    }
})