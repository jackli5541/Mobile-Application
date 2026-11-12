<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="bg-positive text-white route-details">
    <p>This is AboutMe page</p>
    <p>route.query: {{ route.query }}</p>
    <p>route.params: {{ route.params }}</p>
    <p>route.path: {{ route.path }}</p>
    <p>route: {{ route }}</p>
  </div>
</template>
