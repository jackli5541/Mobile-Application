<script setup lang="ts">
import { reactive, watch } from 'vue'

type Contact = { avatar: string; name: string; address: string }
type AvatarOption = { label: string; value: string; avatar: string }

const props = defineProps<{
  data: Contact
  options: AvatarOption[]
}>()
const emit = defineEmits<{ onSubmit: [data: Contact] }>()

const item = reactive<Contact>(JSON.parse(JSON.stringify(props.data)))

watch(
  () => props.data,
  (value) => Object.assign(item, JSON.parse(JSON.stringify(value))),
  { deep: true },
)

watch(() => item.name, (name) => {
  const selected = props.options.find((option) => option.label === name)
  if (selected) item.avatar = selected.avatar
})

function submit() {
  emit('onSubmit', JSON.parse(JSON.stringify(item)))
}
</script>

<template>
  <q-card style="width: 400px; max-width: 90vw">
    <q-card-section><div class="text-h6">Edit data</div></q-card-section>
    <q-card-section class="q-pt-none">
      <q-item>
        <q-item-section avatar><q-avatar><img :src="item.avatar" :alt="item.name" /></q-avatar></q-item-section>
        <q-item-section>
          <q-select
            v-model="item.name"
            :options="options"
            label="Choose Avatar"
            emit-value
            map-options
            behavior="menu"
          >
            <template #option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar><q-avatar size="32px"><img :src="scope.opt.avatar" /></q-avatar></q-item-section>
                <q-item-section>{{ scope.opt.label }}</q-item-section>
              </q-item>
            </template>
          </q-select>
        </q-item-section>
      </q-item>
      <q-input v-model="item.address" autofocus label="Address" />
    </q-card-section>
    <q-card-actions align="right" class="text-primary">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn flat label="OK" v-close-popup @click="submit" />
    </q-card-actions>
  </q-card>
</template>
