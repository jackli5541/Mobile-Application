<template>
  <router-view v-slot="{ Component }">
    <keep-alive include="MainLayout">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
