<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import EssentialLink from 'components/EssentialLink.vue'

const route = useRoute()
const leftDrawerOpen = ref(false)
const pageTitle = computed(() =>
  route.name === 'task107' ? 'To use slot' : route.path === '/' || route.name === 'task106' ? 'Customized List' : 'Quasar App',
)
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
        <q-toolbar-title>{{ pageTitle }}</q-toolbar-title>
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

          <q-item clickable :to="{ name: 'task102' }">
            <q-item-section avatar>
              <q-icon name="style" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Reactive 样式</q-item-label>
              <q-item-label caption>Chapter 102 · Task 102</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable :to="{ name: 'task103' }">
            <q-item-section avatar>
              <q-icon name="search" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Computed 数据筛选</q-item-label>
              <q-item-label caption>Chapter 103 · Task 103</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable :to="{ name: 'task104' }">
            <q-item-section avatar>
              <q-icon name="manage_search" />
            </q-item-section>
            <q-item-section>
              <q-item-label>watchEffect 联系人筛选</q-item-label>
              <q-item-label caption>Chapter 104 · Task 104</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable :to="{ name: 'task105' }">
            <q-item-section avatar>
              <q-icon name="tune" />
            </q-item-section>
            <q-item-section>
              <q-item-label>自定义搜索组件</q-item-label>
              <q-item-label caption>Chapter 105 · Task 105</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable :to="{ name: 'task106' }">
            <q-item-section avatar>
              <q-icon name="contacts" />
            </q-item-section>
            <q-item-section>
              <q-item-label>自定义联系人列表</q-item-label>
              <q-item-label caption>Chapter 106 · Task 106</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'task107' }">
            <q-item-section avatar><q-icon name="view_list" /></q-item-section>
            <q-item-section><q-item-label>插槽联系人项</q-item-label><q-item-label caption>Chapter 107 · Task 107</q-item-label></q-item-section>
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
