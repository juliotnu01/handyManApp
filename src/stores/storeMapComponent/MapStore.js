import { defineStore } from 'pinia'
import { Loader } from "@googlemaps/js-api-loader"

export const useMapStore = defineStore('googleMaps', {
    state() {
        return {
            google: {},
            loader: new Loader({
                apiKey: "AIzaSyCnT6JLRBXZfkZKRLhxvdNPyiz0lbUsx5I",
                version: "weekly",
                libraries: ['places']
            }),
            marketInit: null,
            map: null,
            optionMap: {},
        }
    },
})