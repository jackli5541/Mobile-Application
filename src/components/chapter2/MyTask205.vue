<script setup lang="ts">
import { reactive } from 'vue'

type Contact = {
  id: number
  avatar: string
  name: string
  address: string
}

const avatarOptions = Array.from({ length: 5 }, (_, index) => ({
  name: `avatar${index + 1}.jpg`,
  avatar: `https://cdn.quasar.dev/img/avatar${index + 1}.jpg`,
}))

const contacts = reactive<Contact[]>(
  Array.from({ length: 20 }, (_, index) => {
    const option = avatarOptions[index % avatarOptions.length]
    return {
      id: index + 1,
      avatar: option.avatar,
      name: option.name,
      address: `Zhejiang wenzhou ${index}`,
    }
  }),
)

function updateContact(contact: Contact, option: (typeof avatarOptions)[number]) {
  contact.avatar = option.avatar
  contact.name = option.name
}
</script>

<template>
  <q-page class="task205-page">
    <q-banner class="bg-primary text-white">李亚鸿 24211860108</q-banner>
    <div class="q-pa-sm">
      <q-list bordered separator class="contact-list">
        <q-item v-for="contact in contacts" :key="contact.id" class="contact-item">
          <q-item-section avatar>
            <q-avatar size="42px">
              <img :src="contact.avatar" :alt="contact.name" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption>{{ contact.address }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn flat dense round icon="menu" color="primary" :aria-label="`修改 ${contact.name} 头像`">
              <q-menu auto-close anchor="bottom right" self="top right">
                <q-list dense style="min-width: 180px">
                  <q-item
                    v-for="option in avatarOptions"
                    :key="option.avatar"
                    clickable
                    v-close-popup
                    @click="updateContact(contact, option)"
                  >
                    <q-item-section>{{ option.name }}</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style scoped>
.task205-page {
  background: #fff;
}

.contact-list {
  background: white;
  max-width: 500px;
}

.contact-item {
  min-height: 68px;
}
</style>
