<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const queryObj = reactive<{ id: number | null; isLogin: boolean }>({ id: null, isLogin: false })

watchEffect(() => {
  const id = Array.isArray(route.query.id) ? route.query.id[0] : route.query.id
  const login = Array.isArray(route.query.login) ? route.query.login[0] : route.query.login
  const parsedId = id ? parseInt(id, 10) : NaN
  queryObj.id = Number.isNaN(parsedId) ? null : parsedId
  queryObj.isLogin = login?.toLowerCase() === 'true'
})
</script>

<template>
  <div class="bg-accent text-white route-details">
    <p>This is MyNews page</p>
    <p>route.query: {{ route.query }}</p>
    <p>route.params: {{ route.params }}</p>
    <p>route.path: {{ route.path }}</p>
    <p>Parsed queryObj: {{ queryObj }}</p>
    <p>route: {{ route }}</p>
  </div>
</template>
