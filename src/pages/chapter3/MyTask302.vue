<script setup lang="ts">
import { Screen } from 'quasar'
import MyNavigation from './MyNavigation302.vue'
</script>

<template>
  <q-page>
    <q-banner class="bg-primary text-white">李亚鸿 24211860108</q-banner>
    <div class="q-pa-sm">
      <q-banner v-if="Screen.lt.sm" class="bg-secondary text-white" inline-actions>
        Choose router
        <template #action>
          <q-btn flat icon="list" aria-label="Choose router">
            <q-menu><MyNavigation /></q-menu>
          </q-btn>
        </template>
      </q-banner>
      <MyNavigation v-else />
      <div class="q-pt-sm"><router-view /></div>
    </div>
  </q-page>
</template>

<style>
.route-details {
  overflow-wrap: anywhere;
}
</style>
