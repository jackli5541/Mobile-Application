<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'

const text = ref('')
onMounted(() => console.log('MyFlight303 onMounted'))
onActivated(() => console.log('MyFlight303 onActivated'))
onDeactivated(() => console.log('MyFlight303 onDeactivated'))
onUnmounted(() => console.log('MyFlight303 onUnmounted'))
</script>

<template>
  <q-input bottom-slots v-model="text" label="Flight" counter maxlength="12">
    <template #before>
      <q-icon name="flight_takeoff" />
    </template>
    <template #append>
      <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
      <q-icon name="search" />
    </template>
    <template #hint>Search</template>
  </q-input>
</template>
