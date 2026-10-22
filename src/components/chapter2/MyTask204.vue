<script setup lang="ts">
import { ref } from 'vue'

const shape = ref('home')
const color = ref('black')
const selection = ref<string[]>([])
const shapeOptions = [
  { label: 'Home', value: 'home' },
  { label: 'Place', value: 'place' },
  { label: 'Menu', value: 'menu' },
  { label: 'Phone', value: 'phone' },
]
const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
  { label: 'Black', value: 'black' },
]
const checkboxOptions = [
  { label: 'Teal', value: 'teal' },
  { label: 'Orange', value: 'orange' },
  { label: 'Red', value: 'red' },
  { label: 'Cyan', value: 'cyan' },
]
</script>

<template>
  <q-page>
    <q-banner class="bg-primary text-white">李亚鸿 24211860108</q-banner>
    <div class="column q-pa-sm q-gutter-sm">
      <div class="row" role="radiogroup" aria-label="图标">
        <div v-for="option in shapeOptions" :key="option.value" class="col">
          <q-radio v-model="shape" :val="option.value" :label="option.label" />
        </div>
      </div>
      <div class="row" role="radiogroup" aria-label="图标颜色">
        <div v-for="option in colorOptions" :key="option.value" class="col">
          <q-radio v-model="color" :val="option.value" :label="option.label" />
        </div>
      </div>
      <div class="row justify-center q-py-md">
        <q-icon :name="shape" :color="color" size="3rem" role="img" :aria-label="`${color} ${shape}`" />
      </div>
      <q-separator />
      <div class="row q-gutter-sm" role="group" aria-label="多选颜色">
        <q-checkbox
          v-for="option in checkboxOptions"
          :key="option.value"
          v-model="selection"
          :val="option.value"
          :label="option.label"
          :color="option.value"
        />
      </div>
      <div class="q-px-sm" aria-live="polite">
        The checkbox data: <strong>{{ JSON.stringify(selection) }}</strong>
      </div>
    </div>
  </q-page>
</template>
