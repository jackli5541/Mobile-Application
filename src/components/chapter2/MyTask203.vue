<script setup lang="ts">
import MyCard203 from 'components/chapter2/MyCard203.vue'
</script>

<template>
  <q-page>
    <q-banner class="bg-primary text-white">李亚鸿 24211860108</q-banner>
    <div class="row q-pa-sm q-col-gutter-sm">
      <div v-for="n in 36" :key="n" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <MyCard203 />
      </div>
    </div>
  </q-page>
</template>
