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
      {
        path: 'chapter103/task103',
        name: 'task103',
        component: () => import('pages/chapter103/Task103Page.vue'),
      },
      {
        path: 'chapter104/task104',
        name: 'task104',
        component: () => import('pages/chapter104/Task104Page.vue'),
      },
    ],
  },
]

export default routes
