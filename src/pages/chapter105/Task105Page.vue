<script setup lang="ts">
import { ref } from 'vue'
import MySearch105 from 'components/chapter1/MySearch105.vue'

const student = {
  studentId: '24211860108',
  name: '李亚鸿',
}

const searchRef1 = ref('s')
const searchRef2 = ref('t')
const searchRef3 = ref('u')
const searchRef4 = ref('')

function handleSearch(value: string) {
  console.log('Task105 search:', value)
}
</script>

<template>
  <q-page class="task-page">
    <main class="task-panel">
      <q-banner class="student-banner bg-primary text-white">
        <div class="text-h6">{{ student.name }} {{ student.studentId }}</div>
      </q-banner>

      <section class="task-body" aria-label="自定义搜索组件示例">
        <MySearch105 v-model="searchRef1" @on-search="handleSearch" />
        <MySearch105
          v-model="searchRef2"
          label="account"
          before-icon="face"
          @on-search="handleSearch"
        />
        <MySearch105
          v-model="searchRef3"
          before-icon="info"
          :max-length="8"
          @on-search="handleSearch"
        />
        <MySearch105
          v-model="searchRef4"
          before-icon="contact_phone"
          :max-length="5"
          label="Search"
          @on-search="handleSearch"
        />

        <div class="result-list" aria-live="polite">
          <p>searchRef1:{{ searchRef1 }}</p>
          <p>searchRef2:{{ searchRef2 }}</p>
          <p>searchRef3:{{ searchRef3 }}</p>
          <p>searchRef4:{{ searchRef4 }}</p>
        </div>
      </section>
    </main>
  </q-page>
</template>

<style scoped>
.task-page {
  background: #f5f7fa;
}

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

.result-list {
  color: #111;
  font-size: 18px;
  line-height: 1.7;
}

.result-list p {
  margin: 10px 0;
}

@media (max-width: 600px) {
  .student-banner,
  .task-body {
    padding: 22px 18px;
  }
}
</style>
