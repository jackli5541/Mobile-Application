const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'chapter101/task101',
        name: 'task101',
        component: () => import('pages/chapter101/Task101Page.vue'),
      },
    ],
  },
]

export default routes
