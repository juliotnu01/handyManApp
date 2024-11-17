import axios from "axios";
import { defineStore } from "pinia";

export const useConfigEspecialista = defineStore('configEspecialista', {
    state() {
        return {
            seccion: {
                oferta: {
                    titulo: '',
                    portada: null,
                    portadaTemp: null,
                    descripcion: 'Ingrese una descripción',
                    categoria: [],
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
    actions: {
        async storeOferta() {
            try {
                let formData = new FormData();
                formData.append('titulo', this.seccion.oferta.titulo);
                formData.append('descripcion', this.seccion.oferta.descripcion);
                formData.append('valorHora', this.seccion.oferta.valorHora);
                if (this.seccion.oferta.portada) {
                    formData.append('portada', this.seccion.oferta.portada);
                }
                if (this.seccion.oferta.portafolio.length > 0) {
                    this.seccion.oferta.portafolio.forEach((file, index) => {
                        formData.append(`portafolio[${index}]`, file);
                    });
                }
                if (this.seccion.oferta.categoria.length > 0) {
                    formData.append('categoria', JSON.stringify(this.seccion.oferta.categoria));
                }
                await axios.post('/config-especialistas/oferta', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                this.modals.openOfertas = false
            } catch (error) {
                console.log(error);
            }
        }
    },

})