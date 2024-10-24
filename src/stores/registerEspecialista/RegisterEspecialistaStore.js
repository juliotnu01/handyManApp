import axios from "axios";
import { defineStore } from "pinia";
import { Preferences } from '@capacitor/preferences';
axios.defaults.baseURL = 'http://localhost:8000/api'
export const useTopRegisterEspecialista = defineStore("RegisterEspecialista", {
    state() {
        return {
            toogleView: 1,
            toggleBuscar: false,
            mode: true,
            tiposServicios: [],
            showToastM: false,
            MessageToaste: '',
            especialista: {
                nombre: '',
                apellido: '',
                fecha_nacimiento: '',
                correo: '',
                certificados: null,
                documento_identidad: null,
                numero_identificacion: '',
                servicios: [],
                avatar: null,
            },
            error: null,
            loading: false,
        };
    },

    actions: {
        getterToggleView(val) {
            this.toogleView = val
        },
        setMode(data) {
            this.mode = data
        },
        async getTipoServicios() {
            try {

                let { data } = await axios('/tipos-servicios');
                this.tiposServicios = data
            } catch (error) {
                console.log(error);
            }
        },
        validateEspecialista() {
            const { nombre, apellido, fecha_nacimiento, correo, numero_identificacion, certificados, documento_identidad, servicios, avatar } = this.especialista;

            if (!nombre || !apellido || !fecha_nacimiento || !correo || !numero_identificacion) {
                return false;
            }

            if (!Array.isArray(certificados) || certificados.length === 0) {
                return false;
            }

            if (!documento_identidad || !documento_identidad.frontal || !documento_identidad.trasera) {
                return false;
            }

            if (!Array.isArray(servicios) || servicios.length === 0) {
                return false;
            }

            if (!avatar) {
                return false;
            }

            return true;
        },
        async registerEspecialista() {
            try {

                if (!this.validateEspecialista()) {
                    console.log("Todos los campos requeridos deben estar completos.");
                    this.MessageToaste = 'Todos los campos requeridos deben estar completos.';
                    this.showToastM = true;
                    return;
                }

                const formData = new FormData();
                const { value } = await Preferences.get({ key: 'user' });
                let user = JSON.parse(value)

                // Agregamos los campos no relacionados con archivos
                formData.append('user_id', user.id);
                formData.append('nombre', this.especialista.nombre);
                formData.append('apellido', this.especialista.apellido);
                formData.append('fecha_nacimiento', this.especialista.fecha_nacimiento);
                formData.append('correo', this.especialista.correo);
                formData.append('numero_identificacion', this.especialista.numero_identificacion);

                // Agregamos el array de servicios
                this.especialista.servicios.forEach((servicio, index) => {
                    formData.append(`servicios[${index}]`, JSON.stringify(servicio));
                });

                // Agregamos el archivo de avatar
                if (this.especialista.avatar) {
                    formData.append('avatar', this.especialista.avatar);
                }

                // Agregamos los archivos de certificados (array dinámico)
                this.especialista.certificados.forEach((certificado, index) => {
                    formData.append(`certificados[${index}]`, certificado);
                });

                // Agregamos los archivos de documento_identidad (frontal y trasera)
                if (this.especialista.documento_identidad.frontal) {
                    formData.append('documento_identidad[frontal]', this.especialista.documento_identidad.frontal);
                }
                if (this.especialista.documento_identidad.trasera) {
                    formData.append('documento_identidad[trasera]', this.especialista.documento_identidad.trasera);
                }
                this.loading = true
                let { data } = await axios.post('/register-especialista', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
                this.loading = false

            } catch (error) {
                let { response } = error
                let { data } = response
                let { message } = data
                this.error = message


            }
        }
    }
});
