import { defineStore } from "pinia";

export const useConfigEspecialista = defineStore('configEspecialista', {
    state(){
        return {
            seccion:{
                oferta:{
                    titulo: '',
                    portada: null,
                    portadaTemp: null,
                    descripcion: 'Ingrese una descripción',
                    categria: [],
                    portafolio: [],
                    tempPortafolio: [],
                    valorHora: 0
                }
            },
            modals: {
                openOfertas: false,
            }
        }
    },
    actions:{},

})