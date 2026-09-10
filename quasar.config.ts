import { defineConfig } from '#q-app/wrappers'

export default defineConfig(() => ({
  boot: [],
  css: ['app.scss'],
  extras: ['material-icons'],
  build: {
    vueRouterMode: 'hash',
    typescript: {
      strict: true,
    },
  },
  devServer: {
    open: true,
  },
}))
