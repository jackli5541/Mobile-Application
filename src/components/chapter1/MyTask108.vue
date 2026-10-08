<script setup lang="ts">
import { ref } from 'vue'
import MyList108 from 'components/chapter1/MyList108.vue'
import avatarTom00 from 'assets/avatar-tom00.png'
import avatarTom01 from 'assets/avatar-tom01.png'

interface Contact {
  id: number
  name: string
  phone: string
  avatar?: string
}

const contacts: Contact[] = [
  { id: 1, name: 'a00', phone: '550000', avatar: avatarTom00 },
  { id: 2, name: 'b01', phone: '550001', avatar: avatarTom01 },
]
const lastEvent = ref('')

function handleEvent(event: string, item: Contact) {
  lastEvent.value = `${event}: ${item.name}（id: ${item.id}）`
  console.log(event, item)
}
</script>

<template>
  <q-page class="task-page">
    <main class="task-panel">
      <q-banner class="student-banner bg-primary text-white">李亚鸿 24211860108</q-banner>
      <section class="task-body" aria-label="作用域插槽联系人列表">
        <MyList108
          :data="contacts"
          @on-click="handleEvent('onClick', $event)"
          @on-delete="handleEvent('onDelete', $event)"
          @on-edit="handleEvent('onEdit', $event)"
        />
        <q-banner class="slot-banner bg-purple text-white">To use scoped slot to render avatar</q-banner>
        <MyList108
          :data="contacts"
          @on-click="handleEvent('onClick', $event)"
          @on-delete="handleEvent('onDelete', $event)"
          @on-edit="handleEvent('onEdit', $event)"
        >
          <template #avatar="{ item }">
            <q-avatar color="primary" text-color="white" size="50px">
              <img v-if="item.avatar" :src="item.avatar" :alt="`${item.name}头像`" />
              <span v-else>{{ item.name?.charAt(0).toUpperCase() }}</span>
            </q-avatar>
          </template>
          <template #default="{ item }">
            <q-icon name="delete" color="purple" size="28px" :title="`删除 ${item.name}`" />
          </template>
          <template #bottom="{ item }">
            <q-icon name="edit" color="purple" size="28px" :title="`编辑 ${item.name}`" />
          </template>
        </MyList108>
        <p v-if="lastEvent" class="event-result" role="status">{{ lastEvent }}</p>
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
  margin: 0 auto;
  background: white;
}
.student-banner {
  min-height: 66px;
  padding: 20px 24px;
  font-size: 18px;
}
.task-body {
  padding: 10px;
}
.slot-banner {
  min-height: 68px;
  padding: 20px;
  font-size: 18px;
}
.event-result {
  margin: 12px 0 0;
  overflow-wrap: anywhere;
}
</style>
