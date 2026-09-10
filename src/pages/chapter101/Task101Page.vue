<script setup lang="ts">
import { ref } from 'vue'

const student = {
  studentId: '24211860108',
  name: '李亚鸿',
}

const countRef = ref(0)
const countRefObject = ref({ count: 4 })

function countUp() {
  countRef.value++
  countRefObject.value.count++
}
</script>

<template>
  <q-page class="task-page">
    <main class="task-panel">
      <q-banner class="student-banner bg-primary text-white">
        <div class="text-h6">{{ student.name }} {{ student.studentId }}</div>
      </q-banner>

      <section class="task-body">
        <div class="button-row">
          <q-btn
            color="primary"
            icon="trending_up"
            label="CountUp"
            size="lg"
            @click="countUp"
          />
          <q-btn
            color="cyan-5"
            text-color="white"
            icon="trending_down"
            label="CountRef--"
            size="lg"
            @click="countRef--"
          />
        </div>
        <div class="object-button-row">
          <q-btn
            flat
            color="purple"
            icon="trending_down"
            label="CountRefObject.count--"
            size="lg"
            @click="countRefObject.count--"
          />
        </div>

        <div class="value-box" aria-live="polite">
          countRef:{{ countRef }}
        </div>

        <pre class="value-box object-value" aria-live="polite">countRefObject:{{ JSON.stringify(countRefObject, null, 2) }}</pre>
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
  padding: 30px;
}

.button-row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.object-button-row {
  margin-top: 14px;
  margin-bottom: 16px;
}

.button-row .q-btn {
  min-height: 56px;
  letter-spacing: 0;
}

.object-button-row .q-btn {
  min-height: 52px;
  letter-spacing: 0;
}

.value-box {
  min-height: 62px;
  padding: 14px 10px;
  border: 1px solid #cfd5dc;
  background: #fff;
  font-size: 20px;
  line-height: 1.5;
}

.object-value {
  min-height: 140px;
  margin-top: 30px;
  white-space: pre-wrap;
}

@media (max-width: 600px) {
  .student-banner,
  .task-body {
    padding: 22px 18px;
  }

  .value-box {
    font-size: 17px;
  }
}
</style>
