export default {
  '/api/routes': [
    {
      path:"/",
      addRoutes:[
        {
          path: '/home',
        },
      ]
    }
  ],
  '/api/auth_routes': {
    '/': { role: 'admin' },
  },
};
