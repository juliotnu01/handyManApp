<template>
    <ion-item>
        <div class="flex items-center space-x-2 p-2">
            <!-- Hours Input -->
            <ion-input type="number" :value="hours" @ion-input="handleHourChange" min="1" max="12" class="time-input"
                placeholder="12">
            </ion-input>

            <span class="text-xl font-bold">:</span>

            <!-- Minutes Input -->
            <ion-input type="number" :value="minutes" @ion-input="handleMinuteChange" min="0" max="59"
                class="time-input" placeholder="00">
            </ion-input>

            <!-- AM/PM Toggle -->
            <ion-button fill="outline" size="small" @click="togglePeriod"
                :color="period === 'AM' ? 'primary' : 'secondary'">
                {{ period }}
            </ion-button>
        </div>
    </ion-item>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';

// Props para recibir un valor inicial si es necesario
const props = defineProps({
    modelValue: {
        type: String,
        default: '12:00 AM'
    }
});

// Emits para enviar el valor actualizado
const emit = defineEmits(['update:modelValue', 'timeChange']);

// Referencias reactivas
const hours = ref('12');
const minutes = ref('00');
const period = ref('AM');

// Manejo de cambios en las horas
const handleHourChange = (event: CustomEvent) => {
    let value = event.detail.value;

    // Validación de rango
    if (value === '') value = '12';
    value = Math.max(1, Math.min(12, parseInt(value) || 12)).toString();

    hours.value = value;
    emitTimeChange();
};

// Manejo de cambios en los minutos
const handleMinuteChange = (event: CustomEvent) => {
    let value = event.detail.value;

    // Validación de rango
    if (value === '') value = '00';
    value = Math.max(0, Math.min(59, parseInt(value) || 0))
        .toString()
        .padStart(2, '0');

    minutes.value = value;
    emitTimeChange();
};

// Toggle AM/PM
const togglePeriod = () => {
    period.value = period.value === 'AM' ? 'PM' : 'AM';
    emitTimeChange();
};

// Función para emitir el cambio de tiempo
const emitTimeChange = () => {
    const timeString = `${hours.value}:${minutes.value} ${period.value}`;
    emit('update:modelValue', timeString);
    emit('timeChange', timeString);
};

// Watch para el valor del prop
watch(() => props.modelValue, (newValue) => {
    if (newValue) {
        const [time, newPeriod] = newValue.split(' ');
        const [newHours, newMinutes] = time.split(':');

        hours.value = newHours;
        minutes.value = newMinutes;
        period.value = newPeriod;
    }
}, { immediate: true });
</script>

<style scoped>
.time-input {
    max-width: 80px;
    text-align: center;
}

/* Estilos adicionales para mejorar la apariencia en iOS */
:deep(.native-input) {
    text-align: center !important;
}
</style>