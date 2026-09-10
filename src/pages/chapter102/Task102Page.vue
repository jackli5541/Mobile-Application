<script setup lang="ts">
import { reactive } from 'vue'

const buttonColors = [
  'info',
  'primary',
  'secondary',
  'positive',
  'negative',
  'purple',
  'teal',
] as const

type ButtonColor = (typeof buttonColors)[number]
type ButtonShape = 'round' | 'square'

const student = {
  studentId: '24211860108',
  name: '李亚鸿',
}

const styleReactive = reactive<{
  color: ButtonColor
  shape: ButtonShape
}>({
  color: 'info',
  shape: 'square',
})

function changeStyle() {
  const currentColorIndex = buttonColors.indexOf(styleReactive.color)
  const nextColorIndex = (currentColorIndex + 1) % buttonColors.length

  styleReactive.color = buttonColors[nextColorIndex]
  changeShape()
}

function changeShape() {
  styleReactive.shape = styleReactive.shape === 'square' ? 'round' : 'square'
}
</script>

<template>
  <q-page class="task-page">
    <main class="task-panel">
      <q-banner class="student-banner bg-primary text-white">
        <div class="text-h6">{{ student.name }} {{ student.studentId }}</div>
      </q-banner>

      <section class="task-body">
        <q-btn
          :color="styleReactive.color"
          label="Change Style"
          size="lg"
          @click="changeStyle"
        />

        <q-btn
          :color="styleReactive.color"
          :round="styleReactive.shape === 'round'"
          :square="styleReactive.shape === 'square'"
          icon="percent"
          size="lg"
          aria-label="切换按钮形状"
          @click="changeShape"
        />

        <pre class="value-box" aria-live="polite">styleReactive:{{ JSON.stringify(styleReactive, null, 2) }}</pre>
      </section>
    </main>
  </q-page>
</template>

<style scoped>
.task-panel {
  width: min(100%, 720px);
  min-height: 670px;
  margin: 0 auto;
  background: #fff;
}

.student-banner {
  min-height: 100px;
  padding: 28px 30px;
}

.task-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 30px;
}

.task-body .q-btn {
  min-height: 56px;
  letter-spacing: 0;
}

.value-box {
  min-width: 230px;
  min-height: 158px;
  margin: 0;
  padding: 14px 10px;
  border: 1px solid #cfd5dc;
  background: #fff;
  font-family: Roboto, "Noto Sans SC", Arial, sans-serif;
  font-size: 20px;
  line-height: 1.5;
  white-space: pre-wrap;
}

@media (max-width: 600px) {
  .student-banner,
  .task-body {
    padding: 22px 18px;
  }

  .value-box {
    min-width: 0;
    width: 100%;
    font-size: 17px;
  }
}
</style>
