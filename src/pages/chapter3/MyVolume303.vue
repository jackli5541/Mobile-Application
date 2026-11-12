<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'

const value = ref(3)
onMounted(() => console.log('MyVolume303 onMounted'))
onActivated(() => console.log('MyVolume303 onActivated'))
onDeactivated(() => console.log('MyVolume303 onDeactivated'))
onUnmounted(() => console.log('MyVolume303 onUnmounted'))
</script>

<template>
  <p>Volume: {{ value }}</p>
  <q-knob
    show-value
    class="text-white q-ma-md"
    v-model="value"
    size="90px"
    :thickness="0.2"
    color="orange"
    center-color="grey-8"
    track-color="transparent"
    aria-label="Volume"
  >
    <q-icon name="volume_up" />
  </q-knob>
</template>
