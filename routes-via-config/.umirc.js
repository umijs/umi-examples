export default {
  exportStatic: false,
  routes: [
    {
      path: '/',
      exact: true,
      component: 'a',
    },
    {
      path: '/list',
      component: 'b',
    },
    {
      path: '/users/:name',
      exact: true,
      component: 'c',
    },
  ],
};
