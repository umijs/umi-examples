export default {
  exportStatic: false,
  plugins: [
    'umi-plugin-dva',
  ],
  routes: [
    {
      path: '/',
      component: 'a',
      indexRoute: { redirect: '/b' },
      childRoutes: [
        { path: '/b', component: 'b' },
        { path: '/users/:name', component: 'c' },
        { path: '/posts/:name', redirect: '/users/:name' },
      ]
    },
  ],
};
