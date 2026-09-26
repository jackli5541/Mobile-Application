<script setup lang="ts">
interface Contact {
  id: number
  name: string
  phone: string
  avatar: string
  letter: string
}

defineProps<{
  contacts: Contact[]
}>()

const emit = defineEmits<{
  onClick: [id: number]
}>()
</script>

<template>
  <q-list bordered separator class="contact-list">
    <q-item
      v-for="contact in contacts"
      :key="contact.id"
      clickable
      class="contact-item"
      @click="emit('onClick', contact.id)"
    >
      <q-item-section avatar>
        <q-avatar color="primary" text-color="white" size="64px" class="letter-avatar">
          {{ contact.letter }}
          <q-tooltip class="contact-tooltip" anchor="center left" self="center right" :offset="[8, 0]">
            id={{ contact.id }}
          </q-tooltip>
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="contact-name">{{ contact.name }}</q-item-label>
        <q-item-label caption class="contact-phone">{{ contact.phone }}</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-avatar size="64px">
          <img :src="contact.avatar" :alt="`${contact.name}头像`" />
        </q-avatar>
      </q-item-section>
    </q-item>

    <q-item v-if="contacts.length === 0" class="empty-state">
      <q-item-section>没有匹配的联系人</q-item-section>
    </q-item>
  </q-list>
</template>

<style scoped>
.contact-item {
  min-height: 108px;
  padding: 14px 22px;
  transition: background-color 150ms ease;
}

.contact-item:hover,
.contact-item:focus-visible {
  background: #edf0f3;
}

.letter-avatar {
  font-size: 30px;
}

.contact-name {
  font-size: 23px;
  line-height: 1.3;
}

.contact-phone {
  margin-top: 5px;
  font-size: 18px;
}

.empty-state {
  min-height: 72px;
  color: #6b7280;
}

:global(.contact-tooltip) {
  padding: 8px 14px;
  border-radius: 4px;
  background: #62666a;
  font-size: 18px;
  line-height: 1.4;
}

@media (max-width: 600px) {
  .contact-item {
    min-height: 88px;
    padding: 10px 12px;
  }

  .contact-item :deep(.q-avatar) {
    width: 52px !important;
    height: 52px !important;
  }

  .contact-name {
    font-size: 18px;
  }

  .contact-phone {
    font-size: 15px;
  }
}
</style>
