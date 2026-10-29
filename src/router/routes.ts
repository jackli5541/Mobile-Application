const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'chapter204/task204',
        name: 'task204',
        component: () => import('../views/chapter2/Task204Page.vue'),
      },
      {
        path: 'chapter205/task205',
        name: 'task205',
        component: () => import('../views/chapter2/Task205Page.vue'),
      },
      {
        path: 'chapter206/task206',
        name: 'task206',
        component: () => import('../views/chapter2/Task206Page.vue'),
      },
      {
        path: 'chapter207/task207',
        name: 'task207',
        component: () => import('../views/chapter2/Task207Page.vue'),
      },
      {
        path: 'chapter202/task202',
        name: 'task202',
        component: () => import('../views/chapter2/Task202Page.vue'),
      },
      {
        path: 'chapter203/task203',
        name: 'task203',
        component: () => import('../views/chapter2/Task203Page.vue'),
      },
      {
        path: 'chapter201/task201',
        name: 'task201',
        component: () => import('../views/chapter2/Task201Page.vue'),
      },
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'big-task01',
        name: 'bigTask01',
        component: () => import('../views/bigTasks/BigTask01.vue'),
      },
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
      {
        path: 'chapter105/task105',
        name: 'task105',
        component: () => import('pages/chapter105/Task105Page.vue'),
      },
      {
        path: 'chapter106/task106',
        name: 'task106',
        component: () => import('pages/chapter106/Task106Page.vue'),
      },
      {
        path: 'chapter107/task107',
        name: 'task107',
        component: () => import('pages/chapter107/Task107Page.vue'),
      },
      {
        path: 'chapter108/task108',
        name: 'task108',
        component: () => import('pages/chapter108/Task108Page.vue'),
      },
    ],
  },
]

export default routes
