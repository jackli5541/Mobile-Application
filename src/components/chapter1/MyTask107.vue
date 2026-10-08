<script setup lang="ts">
import MyItem107 from 'components/chapter1/MyItem107.vue'
import avatarTom from 'assets/avatar-tom00.png'

const student = { name: '李亚鸿', studentId: '24211860108' }
</script>

<template>
  <q-page class="task-page">
    <main class="task-panel">
      <q-banner class="student-banner bg-primary text-white">{{ student.name }} {{ student.studentId }}</q-banner>
      <q-list bordered separator class="items-list">
        <MyItem107 />
        <MyItem107>
          <template #default><q-icon name="delete" color="purple" size="28px" /></template>
        </MyItem107>
        <MyItem107 letter="B">
          <template #default><q-icon name="delete_sweep" color="red" size="28px" /></template>
        </MyItem107>
        <MyItem107 letter="C">
          <template #default><q-icon name="cancel" color="negative" size="28px" /></template>
        </MyItem107>
        <MyItem107 letter="K" name="Tom5" phone="2222">
          <template #default>
            <q-badge rounded color="primary" class="replacement"><q-icon name="delete" size="24px" />Replace the default slot</q-badge>
          </template>
          <template #middle>
            <div class="slot-row"><span class="middle-label">Middle slot</span><q-avatar size="44px"><img :src="avatarTom" alt="Tom5头像" /></q-avatar></div>
          </template>
          <template #bottom>
            <div class="slot-row"><span class="bottom-label">Bottom slot</span><q-icon name="delete" color="negative" size="22px" /><q-icon name="edit" color="primary" size="22px" /><q-icon name="favorite" color="red" size="22px" /></div>
          </template>
        </MyItem107>
      </q-list>
    </main>
  </q-page>
</template>

<style scoped>
.task-page { background: #f5f7fa; }
.task-panel { width: min(100%, 720px); min-height: 670px; margin: 0 auto; background: white; }
.student-banner { min-height: 84px; padding: 24px 30px; font-size: 20px; }
.items-list { margin: 10px; }
.middle-label, .bottom-label { color: #777; font-size: 15px; }
.bottom-label { margin-right: 10px; }
.slot-row { display: flex; align-items: center; gap: 14px; }
.replacement { padding: 6px 10px; gap: 6px; font-size: 14px; }
@media (max-width: 400px) {
  .items-list :deep(.contact-item) { padding: 16px 10px; }
  .slot-row { gap: 8px; }
  .replacement { font-size: 11px; }
}
</style>
