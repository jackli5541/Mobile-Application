<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute } from 'vue-router'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({ name: 'MainLayout' })

type Link = { title: string; caption: string; icon: string; link: string }
const $q = useQuasar()
const route = useRoute()
const leftDrawerOpen = ref(false)
const caption = ref('Tcf 移动应用开发')

const chap1Links: Link[] = [
  { title: 'MyTask101', caption: 'Ref variable', icon: 'code', link: '/my-task101' },
  { title: 'MyTask102', caption: 'Reactive style', icon: 'code', link: '/chapter102/task102' },
  { title: 'MyTask103', caption: 'Computed filtering', icon: 'code', link: '/chapter103/task103' },
  { title: 'MyTask104', caption: 'watchEffect contacts', icon: 'code', link: '/chapter104/task104' },
  { title: 'MyTask105', caption: 'Custom search component', icon: 'code', link: '/chapter105/task105' },
  { title: 'MyTask106', caption: 'Customized List', icon: 'code', link: '/chapter106/task106' },
  { title: 'MyTask107', caption: 'To use slot', icon: 'code', link: '/chapter107/task107' },
  { title: 'MyTask108', caption: 'Scoped slot', icon: 'code', link: '/chapter108/task108' },
]
const chap2Links: Link[] = [
  { title: 'MyTask201', caption: 'Row and Column for flex display', icon: 'code', link: '/my-task201' },
  { title: 'MyTask202', caption: 'Alignments with justify and items', icon: 'code', link: '/chapter202/task202' },
  { title: 'MyTask203', caption: 'Card with responsive flex grid', icon: 'code', link: '/chapter203/task203' },
  { title: 'MyTask204', caption: 'Radio and Checkbox', icon: 'code', link: '/chapter204/task204' },
  { title: 'MyTask205', caption: 'List with Menu', icon: 'code', link: '/chapter205/task205' },
  { title: 'MyTask206', caption: 'List with Popup Proxy', icon: 'code', link: '/chapter206/task206' },
  { title: 'MyTask207', caption: 'Editable table', icon: 'code', link: '/chapter207/task207' },
]
const chap3Links: Link[] = [
  { title: 'MyTask301', caption: 'To use vue-router', icon: 'code', link: '/my-task301' },
]
const bigTaskLinks: Link[] = [
  { title: 'BigTask01', caption: 'Reactive UI and Component Encapsulation', icon: 'code', link: '/big-task01' },
]
const chapterLinks = { chap1Links, chap2Links, chap3Links, bigTaskLinks }
const isExpanded = reactive<Record<string, boolean>>({})
for (const key in chapterLinks) {
  isExpanded[key] = true
}

function findPathCaption(path: string) {
  for (const links of Object.values(chapterLinks)) {
    const link = links.find((item) => item.link === path)
    if (link) return link.caption
  }
  return null
}

watch(() => route.path, () => {
  const title = typeof route.meta.title === 'string' ? route.meta.title : null
  caption.value = title ?? findPathCaption(route.path) ?? caption.value
}, { immediate: true })

function expandAll() {
  for (const key of Object.keys(isExpanded)) isExpanded[key] = true
}

function shrinkAll() {
  for (const key of Object.keys(isExpanded)) isExpanded[key] = false
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header reveal elevated :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-primary text-white'">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>{{ caption }}</q-toolbar-title>
        <div>v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <div class="row q-gutter-sm items-center">
            <div class="col">Essential Links</div>
            <div class="col-auto col-shrink row justify-end q-gutter-md">
              <q-btn color="grey" icon="unfold_more" flat dense aria-label="展开全部" @click="expandAll" />
              <q-btn color="grey" icon="unfold_less" flat dense aria-label="收起全部" @click="shrinkAll" />
            </div>
          </div>
        </q-item-label>
        <q-expansion-item v-for="(links, key) in chapterLinks" :key="key" v-model="isExpanded[key]" :label="key" icon="list" expand-separator>
          <EssentialLink v-for="link in links" :key="link.title" v-bind="link" />
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container class="container">
      <router-view v-slot="{ Component }">
        <keep-alive include="MyTask405">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>
