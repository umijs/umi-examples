// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: true,
        title: 'runtime-routes-appjs',
        dll: true,
        routes: {
          exclude: [],
        },
        hardSource: true,
      },
    ],
  ],
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        // dashboard
        {
          path: '/',
          component: './index'
        },
        {
          path: '/list',
          component: './list'
        },
      ],
    },
  ],
};
