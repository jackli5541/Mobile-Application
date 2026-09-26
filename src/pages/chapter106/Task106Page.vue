<script setup lang="ts">
import { computed, ref } from 'vue'
import MySearch105 from 'components/chapter1/MySearch105.vue'
import MyContacts106 from 'components/chapter1/MyContacts106.vue'
import avatarTom00 from 'assets/avatar-tom00.png'
import avatarTom01 from 'assets/avatar-tom01.png'
import avatarTom02 from 'assets/avatar-tom02.png'
import avatarTom03 from 'assets/avatar-tom03.png'

const student = {
  studentId: '24211860108',
  name: '李亚鸿',
}

const contacts = [
  { id: 1, name: 'Tom00', phone: '550000', avatar: avatarTom00, letter: 'A' },
  { id: 2, name: 'Tom01', phone: '550001', avatar: avatarTom01, letter: 'B' },
  { id: 3, name: 'Tom02', phone: '550002', avatar: avatarTom02, letter: 'C' },
  { id: 4, name: 'Tom03', phone: '550003', avatar: avatarTom03, letter: 'D' },
  { id: 5, name: 'Tom04', phone: '550004', avatar: avatarTom00, letter: 'E' },
]

const searchValue = ref('')
const searchKeyword = ref('')
const clickedId = ref<number | null>(null)

function filterContacts(value: string) {
  const keyword = value.trim().toLowerCase()
  if (!keyword) return contacts

  return contacts.filter((contact) =>
    [contact.id, contact.name, contact.phone, contact.letter].some((value) =>
      String(value).toLowerCase().includes(keyword),
    ),
  )
}

const filteredContacts = computed(() => filterContacts(searchKeyword.value))

function handleSearch(value: string) {
  searchKeyword.value = value
  clickedId.value = filterContacts(value)[0]?.id ?? null
}

function handleClick(id: number) {
  clickedId.value = id
  console.log('Clicked id:', id)
}
</script>

<template>
  <q-page class="task-page">
    <main class="task-panel">
      <q-banner class="student-banner bg-primary text-white">
        {{ student.name }} {{ student.studentId }}
      </q-banner>

      <section class="task-body" aria-label="联系人搜索">
        <MySearch105 v-model="searchValue" @on-search="handleSearch" />
        <div class="contacts-scroll">
          <MyContacts106 :contacts="filteredContacts" @on-click="handleClick" />
        </div>
        <p class="clicked-result" role="status">Clicked id:{{ clickedId ?? '' }}</p>
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
  min-height: 84px;
  padding: 24px 30px;
  font-size: 20px;
}

.task-body {
  padding: 24px 16px;
}

.contacts-scroll {
  max-height: max(200px, calc(100dvh - 310px));
  overflow-y: auto;
}

.clicked-result {
  margin: 8px 0 0;
  color: #111;
  font-size: 20px;
}

@media (max-width: 600px) {
  .student-banner {
    padding: 20px 18px;
    font-size: 17px;
  }

  .task-body {
    padding: 16px 10px;
  }
}
</style>
