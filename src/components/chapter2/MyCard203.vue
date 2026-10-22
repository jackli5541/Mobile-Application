<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  author?: string
  content?: string
  image?: string
}>(), {
  title: 'Our Planet',
  author: 'John Doe',
  content: 'The content of the card.',
  image: 'https://cdn.quasar.dev/img/parallax2.jpg',
})
</script>

<template>
  <q-card bordered>
    <q-card-section>
      <div class="row items-center no-wrap">
        <div class="col">
          <div class="text-h6">{{ title }}</div>
          <div class="text-subtitle2">by {{ author }}</div>
        </div>
        <div class="col-auto">
          <q-btn color="grey-7" round flat icon="more_vert" aria-label="打开菜单">
            <q-menu cover auto-close>
              <q-list>
                <q-item v-for="item in ['Remove', 'Send', 'Share']" :key="item" clickable>
                  <q-item-section>{{ item }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-parallax style="height: 10rem" :src="image" />
    </q-card-section>
    <q-card-section>{{ content }}</q-card-section>
    <q-separator />
    <q-card-actions>
      <q-btn flat label="Action 1" />
      <q-btn flat label="Action 2" />
    </q-card-actions>
  </q-card>
</template>
