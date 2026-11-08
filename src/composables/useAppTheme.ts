import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const darkMode = ref(false)
let initialized = false

export function useAppTheme() {
  const $q = useQuasar()

  if (!initialized) {
    darkMode.value = $q.dark.isActive
    initialized = true
  }

  watch(darkMode, (value) => $q.dark.set(value), { immediate: true })

  return { darkMode }
}
