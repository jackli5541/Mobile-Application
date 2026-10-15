<script setup lang="ts">
import { ref } from 'vue'

const direction = ref('row')
const wrap = ref('wrap')
const directionOptions = [
  { label: 'row', value: 'row' },
  { label: 'column', value: 'column' },
  { label: 'row reverse', value: 'row reverse' },
  { label: 'column reverse', value: 'column reverse' },
]
const wrapOptions = ['wrap', 'no-wrap', 'reverse-wrap']
</script>

<template>
  <q-page class="task201-page">
    <main class="task201-panel">
      <q-banner class="student-banner bg-primary text-white">
        李亚鸿 24211860108
      </q-banner>
      <section class="q-pa-md" aria-label="Flex 行列布局演示">
        <q-select
          v-model="direction"
          :options="directionOptions"
          label="Flex direction options"
          outlined
          rounded
          emit-value
          map-options
          class="q-mb-sm"
        />
        <q-select
          v-model="wrap"
          :options="wrapOptions"
          label="Wrap options"
          outlined
          rounded
          class="q-mb-md"
        />
        <div class="layout-viewport">
          <div class="layout-demo" :class="[direction, wrap]">
            <div
              v-for="index in 14"
              :key="index"
              class="color-block text-red-4 q-pa-sm"
              :class="`bg-blue-${index}`"
            >
              blue-{{ index }}
            </div>
          </div>
        </div>
      </section>
    </main>
  </q-page>
</template>

<style scoped>
.task201-page {
  background: #f5f7fa;
}

.task201-panel {
  width: min(100%, 720px);
  margin: 0 auto;
  background: white;
}

.student-banner {
  min-height: 66px;
  padding: 20px 24px;
  font-size: 18px;
}

.layout-viewport {
  overflow: auto;
}

.layout-demo {
  height: 30rem;
  gap: 8px;
  align-content: flex-start;
}

.color-block {
  height: 3rem;
  flex-shrink: 0;
  border: 1px solid #9e9e9e;
  font-size: 16px;
}
</style>
