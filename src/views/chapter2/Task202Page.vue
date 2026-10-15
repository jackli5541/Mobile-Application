<script setup lang="ts">
import { ref } from 'vue'

const justify = ref('justify-start')
const items = ref('items-start')
const content = ref('content-start')
const justifyOptions = [
  'justify-start', 'justify-end', 'justify-center',
  'justify-around', 'justify-between', 'justify-evenly',
]
const itemsOptions = [
  'items-start', 'items-end', 'items-center', 'items-stretch', 'items-baseline',
]
const contentOptions = [
  'content-start', 'content-end', 'content-center', 'content-stretch', 'content-between',
]
</script>

<template>
  <q-page class="task202-page">
    <main class="task202-panel">
      <q-banner class="student-banner bg-primary text-white">
        李亚鸿 24211860108
      </q-banner>
      <section aria-label="行布局对齐方式">
        <q-select v-model="justify" :options="justifyOptions" label="justify attribute" class="alignment-select" />
        <q-select v-model="items" :options="itemsOptions" label="items attribute" class="alignment-select" />
        <q-select v-model="content" :options="contentOptions" label="content attribute" class="alignment-select" />
        <div class="alignment-viewport">
          <div class="alignment-demo row wrap" :class="[justify, items, content]">
            <div
              v-for="index in 12"
              :key="`fixed-${index}`"
              class="fixed-block bg-amber-5 text-black"
              :style="{ height: `${3 + (index % 3)}rem` }"
            >
              Item {{ index }}
            </div>
            <div
              v-for="index in 3"
              :key="`auto-${index}`"
              class="auto-block bg-primary text-white"
            >
              Item {{ index }}
            </div>
          </div>
        </div>
      </section>
    </main>
  </q-page>
</template>

<style scoped>
.task202-page {
  background: #f5f7fa;
}

.task202-panel {
  width: min(100%, 720px);
  margin: 0 auto;
  background: white;
}

.student-banner {
  min-height: 66px;
  padding: 20px 24px;
  font-size: 18px;
}

.alignment-select {
  padding: 8px 12px;
}

.alignment-viewport {
  overflow: auto;
  padding: 8px;
}

.alignment-demo {
  height: 30rem;
  gap: 8px;
  background: #fafafa;
}

.fixed-block,
.auto-block {
  flex-shrink: 0;
  padding: 0 3px;
  border: 1px solid #9e9e9e;
}

.fixed-block {
  font-size: 16px;
}

.auto-block {
  font-size: 26px;
}
</style>
