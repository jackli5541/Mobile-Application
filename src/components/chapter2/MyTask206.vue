<script setup lang="ts">
import { reactive } from 'vue'
import MyDialog206 from './MyDialog206.vue'

type Contact = { id: number; avatar: string; name: string; address: string }
const options = Array.from({ length: 5 }, (_, index) => ({
  label: `avatar${index + 1}.jpg`,
  value: `avatar${index + 1}.jpg`,
  avatar: `https://cdn.quasar.dev/img/avatar${index + 1}.jpg`,
}))
const contacts = reactive<Contact[]>(Array.from({ length: 20 }, (_, index) => {
  const option = options[index % options.length]
  return { id: index + 1, avatar: option.avatar, name: option.label, address: `Zhejiang wenzhou ${index}` }
}))
const dialogKeys = reactive<Record<number, number>>({})

function resetDialog(id: number) {
  dialogKeys[id] = (dialogKeys[id] || 0) + 1
}

function updateContact(contact: Contact, data: Omit<Contact, 'id'>) {
  Object.assign(contact, data)
}
</script>

<template>
  <q-page>
    <q-banner class="bg-primary text-white">李亚鸿 24211860108</q-banner>
    <div class="q-pa-sm">
      <q-list bordered separator style="max-width: 500px">
        <q-item v-for="contact in contacts" :key="contact.id">
          <q-item-section avatar><q-avatar><img :src="contact.avatar" :alt="contact.name" /></q-avatar></q-item-section>
          <q-item-section>
            <q-item-label>{{ contact.name }}</q-item-label>
            <q-item-label caption>{{ contact.address }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat dense round icon="edit" color="primary">
              <q-popup-proxy breakpoint="600" transition-show="scale" transition-hide="scale" @before-show="resetDialog(contact.id)">
                <MyDialog206 :key="`${contact.id}-${dialogKeys[contact.id] || 0}`" :data="contact" :options="options" @on-submit="(data) => updateContact(contact, data)" />
              </q-popup-proxy>
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>
