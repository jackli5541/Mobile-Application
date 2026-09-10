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
      {
        path: 'chapter102/task102',
        name: 'task102',
        component: () => import('pages/chapter102/Task102Page.vue'),
      },
    ],
  },
]

export default routes
