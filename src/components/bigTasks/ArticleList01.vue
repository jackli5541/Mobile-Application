<script setup lang="ts">
import { date } from 'quasar'
import type { Article } from '../../types/article'

withDefaults(defineProps<{ items?: Article[] }>(), { items: () => [] })
const emit = defineEmits<{
  onClick: [item: Article]
  onAddStar: [item: Article]
}>()

function getTimeStamp(value: Date) {
  return date.formatDate(value, 'YYYY-MM-DD HH:mm:ss')
}
</script>

<template>
  <q-list v-if="items.length" bordered separator aria-label="文章列表">
    <q-item
      v-for="item in items" :key="item.id"
      clickable class="article-item"
      @click="emit('onClick', item)"
    >
      <q-item-section avatar>
        <div class="column flex-center author">
          <q-avatar size="2rem">
            <img :src="item.owner.avatar" :alt="`${item.owner.name}头像`" />
          </q-avatar>
          <span>{{ item.owner.name }}</span>
        </div>
      </q-item-section>
      <q-item-section class="article-content">
        <q-item-label class="article-title">{{ item.title }}</q-item-label>
        <q-item-label caption>发布时间：{{ getTimeStamp(item.modify_time) }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn
          color="accent" flat stack icon="thumb_up"
          :label="String(item.star)" :aria-label="`点赞文章 ${item.id}`"
          @click.stop="emit('onAddStar', item)"
        />
      </q-item-section>
    </q-item>
  </q-list>
  <div v-else class="row flex-center q-pa-lg" role="status">
    <q-chip icon="article">No articles · 没有匹配的文章</q-chip>
  </div>
</template>

<style scoped>
.article-item {
  padding: 14px 10px;
}
.author {
  font-size: 12px;
  gap: 4px;
}
.article-content {
  min-width: 0;
}
.article-title {
  overflow-wrap: anywhere;
  line-height: 1.5 !important;
}
@media (max-width: 420px) {
  .article-item {
    padding: 12px 6px;
  }
  .article-item :deep(.q-item__section--side) {
    padding-right: 8px;
  }
  .article-item :deep(.q-item__section--side:last-child) {
    padding-right: 0;
    padding-left: 4px;
  }
}
</style>
