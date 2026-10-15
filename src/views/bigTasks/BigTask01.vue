<script setup lang="ts">
import MySearch from '../../components/bigTasks/MySearch01.vue'
import ArticleList from '../../components/bigTasks/ArticleList01.vue'
import { useArticles01 } from '../../composables/useArticles01'

const { data, searchRef, filterItems, info, refreshData, onClickFn, onAddStarFn, onSearch } = useArticles01()
</script>

<template>
  <q-page class="experiment-page">
    <main class="experiment-panel">
      <q-banner class="bg-primary text-white student-banner" inline-actions>
        李亚鸿 24211860108
        <template #action>
          <q-btn flat round icon="refresh" aria-label="刷新文章" @click="refreshData" />
        </template>
      </q-banner>
      <section class="q-pa-sm" aria-label="文章搜索">
        <MySearch
          v-model="searchRef" label="搜索标题或作者" :max-length="60" before-icon="article"
          @on-search="onSearch"
        />
        <p class="text-grey-7 q-my-sm">共 {{ data.length }} 篇文章，当前显示 {{ filterItems.length }} 篇</p>
        <q-banner v-if="info" class="bg-accent text-white q-mb-sm" role="status">
          {{ info }}
        </q-banner>
        <ArticleList :items="filterItems" @on-add-star="onAddStarFn" @on-click="onClickFn" />
      </section>
    </main>
  </q-page>
</template>

<style scoped>
.experiment-page {
  background: #f5f7fa;
}
.experiment-panel {
  width: min(100%, 720px);
  margin: 0 auto;
  background: white;
}
.student-banner {
  min-height: 66px;
  font-size: 18px;
  overflow-wrap: anywhere;
}
</style>
