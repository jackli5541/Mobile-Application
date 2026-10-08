<script setup lang="ts">
interface Props {
  letter?: string
  name?: string
  phone?: string
}

withDefaults(defineProps<Props>(), {
  letter: 'A',
  name: 'Tom',
  phone: '123456',
})
</script>

<template>
  <q-item class="contact-item" clickable>
    <q-item-section avatar>
      <q-avatar color="primary" text-color="white" size="56px">{{ letter }}</q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label class="contact-name">{{ name }}</q-item-label>
      <q-item-label caption class="contact-phone">{{ phone }}</q-item-label>
    </q-item-section>
    <q-item-section side class="actions">
      <slot>
        <q-icon name="delete" color="primary" size="28px" />
      </slot>
      <slot name="middle" />
      <slot name="bottom">
        <q-icon name="edit" color="primary" size="28px" />
      </slot>
    </q-item-section>
  </q-item>
</template>

<style scoped>
.contact-item { min-height: 112px; padding: 16px 24px; border-bottom: 1px solid #e0e0e0; }
.contact-name { color: #111; font-size: 20px; }
.contact-phone { margin-top: 4px; font-size: 16px; }
.actions { gap: 22px; align-items: flex-end; }
</style>
