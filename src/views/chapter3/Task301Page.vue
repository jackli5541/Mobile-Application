<script setup lang="ts">
import { useAppTheme } from 'src/composables/useAppTheme'

const { darkMode } = useAppTheme()
</script>

<template>
  <q-page>
    <q-banner inline-actions class="bg-primary text-white">
      24211860108 李亚鸿
      <template #action>
        <q-toggle v-model="darkMode" color="white" checked-icon="dark_mode" unchecked-icon="light_mode" :label="darkMode ? 'Dark' : 'Light'" />
      </template>
    </q-banner>
    <q-list bordered separator>
      <q-item dense>
        <q-item-section>To modify src/components/EssentialLink.vue</q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section>To modify src/layouts/MainLayout.vue</q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section>To modify src/router/routes.js</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
