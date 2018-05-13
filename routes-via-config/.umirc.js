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
      path: '/redirect',
      redirect: '/users/guanguan',
    },
    {
      path: '/users/:name',
      exact: true,
      component: 'c',
    },
  ],
};
