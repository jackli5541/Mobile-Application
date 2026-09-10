import { createApp } from 'vue'
import { Quasar } from 'quasar'
import langZhCn from 'quasar/lang/zh-CN'
import iconSet from 'quasar/icon-set/material-icons'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './assets/main.css'

import App from './App.vue'

createApp(App)
  .use(Quasar, {
    lang: langZhCn,
    iconSet,
    plugins: {},
  })
  .mount('#app')
