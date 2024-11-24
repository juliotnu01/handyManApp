<template>
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="w-16 h-16 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin"></div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped>
/* Puedes personalizar los colores o el tamaño del spinner aquí si es necesario */
</style>