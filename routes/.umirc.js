
export default {
  pages: {
    '/list': { Route: './routes/PrivateRoute.js' },
  },
  plugins: [
    ['umi-plugin-routes', {
      exclude: [
        /exclude/,
      ],
    }],
  ],
}
