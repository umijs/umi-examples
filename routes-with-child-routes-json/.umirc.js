
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
            ...routes,
            ...(require('./pages/site/_routes')),
          ];
        },
      },
    ],
  ],
}
