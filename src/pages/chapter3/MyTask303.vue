<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let timerId: ReturnType<typeof setInterval> | undefined
const TIMER_OFFSET = 10
const timerCount = ref(TIMER_OFFSET)

function restartTimer() {
  // 重启前清除旧定时器，避免连续点击导致倒计时加速。
  clearInterval(timerId)
  timerCount.value = TIMER_OFFSET
  timerId = setInterval(() => {
    timerCount.value--
  }, 500)
}

function gotoFlight() {
  router.push({ name: 'flight' })
}

function gotoVolume() {
  router.push({ name: 'volume' })
}

watch(timerCount, () => {
  if (timerCount.value <= 0) {
    clearInterval(timerId)
    console.log('Timeout is triggered')
    gotoFlight()
  }
})

onMounted(restartTimer)
onBeforeUnmount(() => clearInterval(timerId))
</script>

<template>
  <q-page>
    <q-banner class="bg-primary text-white">李亚鸿 24211860108</q-banner>
    <q-banner class="bg-accent text-white" inline-actions>
      Timer counter: {{ timerCount }}
      <span v-if="timerCount > 0" class="q-ml-sm">Will goto flight</span>
      <template #action>
        <q-btn flat @click="restartTimer" label="Restart Timer" />
      </template>
    </q-banner>
    <div class="q-pa-sm">
      <q-list bordered separator>
        <q-item clickable @click="gotoFlight">
          <q-item-section>@click="gotoFlight"</q-item-section>
        </q-item>
        <q-item clickable @click="gotoVolume">
          <q-item-section>@click="gotoVolume"</q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="q-pa-sm bg-amber-1">
      <router-view />
    </div>
  </q-page>
</template>
