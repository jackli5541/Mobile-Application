<script setup lang="ts">
const emit = defineEmits<{ onClick: [caption: string] }>()
const props = withDefaults(defineProps<{
  title: string
  caption?: string
  icon?: string
  link?: string
}>(), { caption: '', icon: '', link: '#' })
</script>

<template>
  <q-item clickable :to="props.link" @click="emit('onClick', props.caption)">
    <q-item-section v-if="props.icon" avatar><q-icon :name="props.icon" /></q-item-section>
    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
