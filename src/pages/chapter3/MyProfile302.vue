<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = withDefaults(defineProps<{
  id: string
  name: string
  age: string
  login?: string
}>(), { login: 'true' })

const propsComputed = computed(() => ({
  id: Number(props.id),
  name: props.name,
  age: Number(props.age),
  // 可选参数未传递时，路由可能提供空字符串。
  login: (props.login || 'true').toLowerCase() === 'true',
}))
</script>

<template>
  <div class="bg-secondary text-white route-details">
    <p>This is PersonInfo page</p>
    <p>props: {{ props }}</p>
    <p>props computed: {{ propsComputed }}</p>
    <p>route.query: {{ route.query }}</p>
    <p>route.params: {{ route.params }}</p>
    <p>route.path: {{ route.path }}</p>
    <p>route: {{ route }}</p>
  </div>
</template>
