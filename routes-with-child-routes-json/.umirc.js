
export default {
  plugins: [
    [
      'umi-plugin-routes',
      {
        exclude: [
          /pages\/site/,
        ],
        update(routes) {
          return [
            ...(require('./pages/site/_routes')),
            ...routes,
          ];
        },
      },
    ],
  ],
}
