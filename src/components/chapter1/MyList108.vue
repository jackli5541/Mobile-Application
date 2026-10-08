<script setup lang="ts">
defineProps(['data'])

const emit = defineEmits(['onClick', 'onDelete', 'onEdit'])
</script>

<template>
  <q-list bordered separator>
    <q-item v-for="item in data" :key="item.id" clickable class="contact-item" @click="emit('onClick', item)">
      <q-item-section avatar>
        <slot name="avatar" :item="item">
          <q-avatar color="primary" text-color="white" size="50px">
            {{ item.name?.charAt(0).toUpperCase() }}
          </q-avatar>
        </slot>
      </q-item-section>
      <q-item-section>
        <q-item-label class="contact-name">{{ item.name }}</q-item-label>
        <q-item-label caption class="contact-phone">{{ item.phone }}</q-item-label>
      </q-item-section>
      <q-item-section side class="contact-actions">
        <q-btn flat round dense :aria-label="`删除 ${item.name}`" @click.stop="emit('onDelete', item)">
          <slot :item="item"><q-icon name="delete" color="primary" size="28px" /></slot>
        </q-btn>
        <q-btn flat round dense :aria-label="`编辑 ${item.name}`" @click.stop="emit('onEdit', item)">
          <slot name="bottom" :item="item"><q-icon name="edit" color="primary" size="28px" /></slot>
        </q-btn>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<style scoped>
.contact-item {
  min-height: 136px;
  padding: 16px 20px;
}
.contact-name {
  color: #111;
  font-size: 18px;
}
.contact-phone {
  margin-top: 4px;
  font-size: 14px;
}
.contact-actions {
  gap: 22px;
}
</style>
