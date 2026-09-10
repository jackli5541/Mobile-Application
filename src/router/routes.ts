const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'about-me',
        name: 'about-me',
        component: () => import('pages/chapter001/AboutMePage.vue'),
      },
      {
        path: 'chapter001/quasar-basics',
        name: 'quasar-basics',
        component: () => import('pages/chapter001/QuasarBasicsPage.vue'),
      },
      {
        path: 'chapter101/task101',
        name: 'task101',
        component: () => import('pages/chapter101/Task101Page.vue'),
      },
    ],
  },
]

export default routes
