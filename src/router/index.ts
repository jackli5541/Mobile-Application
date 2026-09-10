import { route } from 'quasar/wrappers'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

export default route(function () {
  return createRouter({
    routes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHashHistory(),
  })
})
