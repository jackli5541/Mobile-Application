<script setup lang="ts">
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const leftDrawerOpen = ref(false)
const essentialLinks = [
  { title: 'Docs', caption: 'quasar.dev', icon: 'school', link: 'https://quasar.dev' },
  { title: 'Github', caption: 'github.com/quasarframework/quasar', icon: 'code', link: 'https://github.com/quasarframework/quasar' },
  { title: 'Forum', caption: 'forum.quasar.dev', icon: 'forum', link: 'https://forum.quasar.dev' },
  { title: 'Twitter', caption: '@QuasarFramework', icon: 'rss_feed', link: 'https://twitter.com/quasarframework' },
  { title: 'Facebook', caption: '@QuasarFramework', icon: 'public', link: 'https://facebook.com/quasarframework' },
  { title: 'Discord Chat Channel', caption: 'chat.quasar.dev', icon: 'chat', link: 'https://chat.quasar.dev' },
]
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>Quasar App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable :to="{ name: 'task101' }">
            <q-item-section avatar>
              <q-icon name="calculate" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Ref 计数器</q-item-label>
              <q-item-label caption>Chapter 101 · Task 101</q-item-label>
            </q-item-section>
          </q-item>

          <q-item-label header>Essential Links</q-item-label>
          <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
