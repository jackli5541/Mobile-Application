<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  modelValue?: string
  label?: string
  maxLength?: number
  beforeIcon?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: 'Search',
  maxLength: 12,
  beforeIcon: 'contact_phone',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  onSearch: [value: string]
}>()

const draftValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (value) => {
    draftValue.value = value
  },
)

function search() {
  emit('update:modelValue', draftValue.value)
  emit('onSearch', draftValue.value)
}

function clearSearch() {
  draftValue.value = ''
  search()
}
</script>

<template>
  <q-input
    v-model="draftValue"
    :label="label"
    :maxlength="maxLength"
    :counter="false"
    clearable
    outlined
    color="primary"
    class="search-field"
    @keyup.enter="search"
    @clear="clearSearch"
  >
    <template #prepend>
      <q-icon :name="beforeIcon" />
    </template>
    <template #append>
      <q-btn
        flat
        round
        dense
        icon="search"
        color="grey-7"
        aria-label="Search"
        @click="search"
      />
    </template>
  </q-input>
</template>

<style scoped>
.search-field {
  margin-bottom: 18px;
}

.search-field :deep(.q-field__control) {
  min-height: 64px;
}
</style>
