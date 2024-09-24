import { defineStore } from "pinia";

export const useTopMenuStore = defineStore("TopMenu", {
    state() {
        return {
            toogleView: 1,
            toggleBuscar: false,
            mode: true
        };
    },
    
    actions:{
        getterToggleView(val){
            this.toogleView = val
        },
        setMode(data){
            this.mode = data
        }
    }
});
