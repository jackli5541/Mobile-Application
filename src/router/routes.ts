const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'my-task303',
        component: () => import('pages/chapter3/MyTask303.vue'),
        children: [
          { path: '', redirect: { name: 'volume' } },
          {
            path: 'flight',
            name: 'flight',
            meta: { title: 'Flight' },
            component: () => import('pages/chapter3/MyFlight303.vue'),
          },
          {
            path: 'volume',
            name: 'volume',
            meta: { title: 'Volume' },
            component: () => import('pages/chapter3/MyVolume303.vue'),
          },
        ],
      },
      {
        path: 'my-task302',
        component: () => import('pages/chapter3/MyTask302.vue'),
        children: [
          { path: '', name: 'task302Default', redirect: { name: 'news' } },
          {
            path: 'news',
            name: 'news',
            meta: { title: 'MyNews302' },
            component: () => import('pages/chapter3/MyNews302.vue'),
          },
          {
            path: 'about',
            name: 'about',
            meta: { title: 'AboutMe' },
            component: () => import('pages/chapter3/AboutMe302.vue'),
          },
          {
            path: 'me/:id/:name/:age/:login?',
            name: 'info',
            props: true,
            meta: { title: 'Profile' },
            component: () => import('pages/chapter3/MyProfile302.vue'),
          },
        ],
      },
      {
        path: 'big-task02',
        name: 'bigTask02',
        component: () => import('../views/bigTasks/BigTask02.vue'),
        meta: { title: 'Flex layout design and data modification' },
      },
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
        path: 'my-task301',
        name: 'task301',
        component: () => import('../views/chapter3/Task301Page.vue'),
        meta: { title: 'To use vue-router' },
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
        path: 'my-task201',
        alias: 'chapter201/task201',
        name: 'task201',
        component: () => import('../views/chapter2/Task201Page.vue'),
      },
      {
        path: '',
        component: () => import('../views/chapter3/Task301Page.vue'),
        meta: { title: 'To use vue-router' },
      },
      {
        path: 'big-task01',
        name: 'bigTask01',
        component: () => import('../views/bigTasks/BigTask01.vue'),
      },
      {
        path: 'my-task101',
        alias: 'chapter101/task101',
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
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/ErrorNotFound.vue'),
  },
]

export default routes
