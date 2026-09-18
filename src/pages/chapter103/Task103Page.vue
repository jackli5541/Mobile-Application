<script setup lang="ts">
import { computed, ref, watch } from 'vue'

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

const searchRef = ref('')

const filterData = computed(() => {
  const keyword = searchRef.value.trim().toLowerCase()

  if (!keyword) {
    return contacts
  }

  return contacts.filter((contact) =>
    [contact.id, contact.name, contact.phone].some((value) =>
      String(value).toLowerCase().includes(keyword),
    ),
  )
})

watch(searchRef, (value) => {
  console.log('searchRef changes:', value)
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
          v-model="searchRef"
          color="primary"
          label="Search contacts"
        />

        <pre class="value-box" aria-live="polite">filterData:{{ JSON.stringify(filterData, null, 2) }}</pre>
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

.value-box {
  max-height: 460px;
  margin: 10px 0 0;
  padding: 8px;
  overflow: auto;
  border: 1px solid #cfd5dc;
  background: #fff;
  color: #000;
  font-family: Roboto, "Noto Sans SC", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-wrap;
}

@media (max-width: 600px) {
  .student-banner,
  .task-body {
    padding: 22px 18px;
  }

}
</style>
