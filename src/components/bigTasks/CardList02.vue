<script setup lang="ts">
import { date, useQuasar } from 'quasar'
import type { Article } from '../../types/article'

const $q = useQuasar()
withDefaults(defineProps<{ items?: Article[] }>(), { items: () => [] })
const emits = defineEmits<{
  onClick: [item: Article]
  onAddStar: [item: Article]
  onEdit: [item: Article]
  onDelete: [item: Article]
}>()

function getTimeStamp(t: Date) {
  return date.formatDate(t, 'Do MMM YYYY, HH:mm:ss')
}
</script>

<template>
  <template v-if="items.length > 0">
    <q-list v-if="$q.screen.gt.xs" bordered separator>
      <q-item v-for="item in items" :key="item.id" clickable class="article-item" @click="emits('onClick', item)">
        <q-item-section avatar>
          <div class="column flex-center">
            <q-avatar size="2rem"><img :src="item.owner.avatar" :alt="item.owner.name" /></q-avatar>
            <div>{{ item.owner.name }}</div>
          </div>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption>{{ getTimeStamp(item.modify_time) }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <div class="col">
              <q-btn color="accent" flat icon="thumb_up" :aria-label="`点赞文章 ${item.id}`" @click.stop="emits('onAddStar', item)">{{ item.star }}</q-btn>
            </div>
            <div class="col">
              <q-btn color="negative" flat icon="delete" :aria-label="`删除文章 ${item.id}`" @click.stop="emits('onDelete', item)" />
            </div>
            <div class="col">
              <q-btn color="primary" flat icon="edit" :aria-label="`编辑文章 ${item.id}`" @click.stop="emits('onEdit', item)" />
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
    <template v-else>
      <q-card v-for="item in items" :key="item.id" class="article-item" @click="emits('onClick', item)">
        <q-card-section class="q-mb-none q-pb-none">
          <q-item>
            <q-item-section avatar>
              <div class="column flex-center">
                <q-avatar size="2rem"><img :src="item.owner.avatar" :alt="item.owner.name" /></q-avatar>
                <div>{{ item.owner.name }}</div>
              </div>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ item.title }}</q-item-label>
              <q-item-label caption>{{ getTimeStamp(item.modify_time) }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
        <q-card-section class="q-pt-none q-mb-sm q-mt-none">
          <div class="row">
            <div class="col">
              <q-btn color="accent" flat icon="thumb_up" :aria-label="`点赞文章 ${item.id}`" @click.stop="emits('onAddStar', item)">{{ item.star }}</q-btn>
            </div>
            <div class="col row justify-center">
              <q-btn color="negative" flat icon="delete" :aria-label="`删除文章 ${item.id}`" @click.stop="emits('onDelete', item)" />
            </div>
            <div class="col row justify-end">
              <q-btn color="primary" flat icon="edit" :aria-label="`编辑文章 ${item.id}`" @click.stop="emits('onEdit', item)" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </template>
  </template>
  <div v-else class="row flex-center"><q-chip>No articles</q-chip></div>
</template>
