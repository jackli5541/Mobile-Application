<script setup lang="ts">
const props = withDefaults(defineProps<{
  label?: string
  maxLength?: number
  beforeIcon?: string
}>(), {
  label: 'Search',
  maxLength: 12,
  beforeIcon: 'contact_phone',
})

const searchRef = defineModel<string>({ default: '' })
const emit = defineEmits<{ onSearch: [value: string] }>()
</script>

<template>
  <q-input
    v-model="searchRef"
    :label="props.label"
    :maxlength="props.maxLength"
    @keyup.enter="emit('onSearch', searchRef)"
  >
    <template #before>
      <q-icon :name="props.beforeIcon" />
    </template>
    <template #append>
      <q-btn
        v-if="searchRef"
        flat round dense icon="close" aria-label="清空搜索"
        @click="searchRef = ''"
      />
      <q-btn
        flat round dense icon="search" aria-label="搜索文章"
        @click="emit('onSearch', searchRef)"
      />
    </template>
  </q-input>
</template>
