<script setup lang="ts">
import { ref, watchEffect } from 'vue'

interface Contact {
  id: number
  name: string
  phone: string
}

const student = {
  studentId: '24211860108',
  name: '李亚鸿',
}

const contacts: Contact[] = [
  { id: 1, name: 'Tom00', phone: '660000' },
  { id: 2, name: 'Tom01', phone: '660001' },
  { id: 3, name: 'Tom02', phone: '660002' },
  { id: 4, name: 'Tom03', phone: '660003' },
  { id: 5, name: 'Tom04', phone: '660004' },
  { id: 6, name: 'Tom05', phone: '660005' },
  { id: 7, name: 'Tom06', phone: '660006' },
  { id: 8, name: 'Tom07', phone: '660007' },
  { id: 9, name: 'Tom08', phone: '660008' },
  { id: 10, name: 'Tom09', phone: '660009' },
]

const searchKeyword = ref('')
const filterData = ref<Contact[]>(contacts)

watchEffect(() => {
  const keyword = searchKeyword.value.trim().toLowerCase()

  filterData.value = contacts.filter((contact) =>
    [contact.id, contact.name, contact.phone].some((value) =>
      String(value).toLowerCase().includes(keyword),
    ),
  )
})
</script>

<template>
  <q-page class="task-page">
    <main class="task-panel">
      <q-banner class="student-banner bg-primary text-white">
        <div class="text-h6">{{ student.name }} {{ student.studentId }}</div>
      </q-banner>

      <section class="task-body" aria-label="联系人搜索">
        <q-input
          v-model="searchKeyword"
          color="primary"
          label="Search contacts"
          clearable
        />

        <q-list bordered separator class="contact-list">
          <q-item v-for="contact in filterData" :key="contact.id">
            <q-item-section>{{ contact.name }}</q-item-section>
            <q-item-section side>{{ contact.phone }}</q-item-section>
          </q-item>

          <q-item v-if="filterData.length === 0" class="empty-state">
            <q-item-section>没有匹配的联系人</q-item-section>
          </q-item>
        </q-list>

        <p class="filter-result" aria-live="polite">
          filterData: {{ JSON.stringify(filterData) }}
        </p>
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

.contact-list {
  margin-top: 12px;
}

.contact-list :deep(.q-item) {
  min-height: 64px;
  padding: 12px 16px;
}

.contact-list :deep(.q-item__section--side) {
  min-width: 130px;
  padding-left: 24px;
  color: #111;
}

.empty-state {
  color: #70757a;
}

.filter-result {
  margin: 12px 0 0;
  color: #111;
  font-size: 14px;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

@media (max-width: 600px) {
  .student-banner,
  .task-body {
    padding: 22px 18px;
  }
}
</style>
