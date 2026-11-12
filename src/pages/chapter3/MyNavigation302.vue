<script setup lang="ts">
const myData = { id: 12345, name: 'Tom', age: 18, login: true }
// params 按参考使用命名路由；布尔值显式转换为路径字符串。
const myParams = { ...myData, login: String(myData.login) }
</script>

<template>
  <q-list bordered separator v-close-popup>
    <q-item clickable to="/my-task302/news?id=12345&name=Tom&age=18&login=false">
      <q-item-section>to="/my-task302/news?id=12345&amp;name=Tom&amp;age=18&amp;login=false"</q-item-section>
    </q-item>
    <q-item clickable :to="{ path: '/my-task302/news', query: myData }">
      <q-item-section>:to="{path:'/my-task302/news',query:myData}"</q-item-section>
    </q-item>
    <q-item clickable :to="{ path: '/my-task302/about', query: myData }" replace>
      <q-item-section>:to="{path:'/my-task302/about',query:myData}" replace</q-item-section>
    </q-item>
    <q-item clickable to="/my-task302/me/56789/Tom/18/true">
      <q-item-section>to="/my-task302/me/56789/Tom/18/true"</q-item-section>
    </q-item>
    <q-item clickable to="/my-task302/me/56789">
      <q-item-section>
        <q-item-label>
          to="/my-task302/me/56789"
          <q-badge align="top" color="negative">Wrong path params</q-badge>
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable to="/my-task302/me/56789/Tom/18">
      <q-item-section>to="/my-task302/me/56789/Tom/18"</q-item-section>
    </q-item>
    <q-item clickable :to="{ name: 'info', params: myParams }">
      <q-item-section>:to="{name:'info',params:myParams}"</q-item-section>
    </q-item>
    <!-- 按参考保留相对路径示例：深层动态路由下可能匹配失败。 -->
    <q-item clickable :to="{ path: 'about' }">
      <q-item-section>
        <q-item-label>
          :to="{path:'about'}"
          <q-badge align="top" color="negative">May trigger wrong path</q-badge>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>
