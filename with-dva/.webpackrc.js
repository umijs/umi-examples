export default {
  publicPath: '/static/',
  extraBabelPlugins: [
    ...(process.env.COVERAGE ? ['babel-plugin-istanbul'] : [])
  ]
};
