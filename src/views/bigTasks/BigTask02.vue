<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import CardList from '../../components/bigTasks/CardList02.vue'
import MySearch from '../../components/bigTasks/MySearch01.vue'
import type { Article } from '../../types/article'

const data = ref<Article[]>([])
const titles = [
  'Online Meeting Connects Students and Corporate Leaders for Growth Dialogue',
  'Building Supportive Spaces: Wenzhou University Enhances Mental Wellness for International Students',
  '2026 International New Year Gala and Chinese Competition Awards',
  'Campus Safety in Focus: International Students Complete Mandatory Safety Training',
  'CIE Hosts First Silk Road Student Talent Show',
]

function refreshData() {
  data.value = []
  for (let i = 0; i < 10; i++) {
    const t = (new Date().getMilliseconds() + i) % 10
    data.value.push({
      id: i,
      title: titles[t % titles.length]!,
      star: t,
      modify_time: new Date(),
      owner: {
        name: `Tom${t}`,
        avatar: `https://cdn.quasar.dev/img/avatar${t % 5 + 1}.jpg`,
      },
    })
  }
}

const info = ref('')
let infoTimer: ReturnType<typeof setTimeout> | undefined
function onClickFn(item: Article) {
  clearTimeout(infoTimer)
  info.value = `Item for id=${item.id} is clicked`
  infoTimer = setTimeout(() => { info.value = '' }, 2000)
}
function onDeleteFn(item: Article) {
  const idx = data.value.indexOf(item)
  if (idx !== -1) data.value.splice(idx, 1)
}
function onAddStarFn(item: Article) {
  item.star += 1
}

const isEdit = ref(false)
const editData = reactive<Article>({
  id: 0, title: '', star: 0, modify_time: new Date(), owner: { name: '', avatar: '' },
})
function onEditFn(item: Article) {
  const itemCopy = JSON.parse(JSON.stringify(item))
  Object.assign(editData, itemCopy)
  isEdit.value = true
}
function onDialogSubmit() {
  const item = data.value.find((v) => v.id === editData.id)
  if (item) {
    Object.assign(item, editData)
    item.modify_time = new Date()
  }
  isEdit.value = false
}

const searchRef = ref('')
const filterItems = computed(() => {
  let exp: RegExp
  try {
    exp = new RegExp(searchRef.value, 'i')
  } catch {
    // 未完成的正则表达式按普通文本搜索，避免输入时中断页面渲染。
    const keyword = searchRef.value.toLocaleLowerCase()
    return data.value.filter((v) => v.title.toLocaleLowerCase().includes(keyword) || v.owner.name.toLocaleLowerCase().includes(keyword))
  }
  return data.value.filter((v) => exp.test(v.title) || exp.test(v.owner.name))
})
onMounted(refreshData)
onBeforeUnmount(() => clearTimeout(infoTimer))
</script>

<template>
  <q-page>
    <q-banner class="bg-primary text-white" inline-actions>
      李亚鸿 24211860108
      <template #action>
        <q-btn icon="refresh" flat round aria-label="刷新文章" @click="refreshData" />
      </template>
    </q-banner>
    <MySearch v-model="searchRef" before-icon="article" :max-length="120" />
    <q-banner v-if="info" class="bg-accent text-white" role="status">{{ info }}</q-banner>
    <div class="q-pa-sm">
      <CardList :items="filterItems" @on-add-star="onAddStarFn" @on-delete="onDeleteFn" @on-edit="onEditFn" @on-click="onClickFn" />
    </div>
    <q-dialog v-model="isEdit" persistent>
      <q-card style="width: 350px; max-width: calc(100vw - 48px)">
        <q-card-section>
          <div class="text-h6">Edit for Article id={{ editData.id }}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input v-model.trim="editData.title" dense autofocus autogrow type="textarea" label="Title" @keyup.enter="onDialogSubmit" />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn v-close-popup flat label="Cancel" />
          <q-btn flat label="OK" @click="onDialogSubmit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
