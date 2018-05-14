export default {
  browserslist: [
    '> 1%',
    'last 2 versions',
    'iOS >= 8'
  ],
  extraBabelPlugins: [
    ...(process.env.COVERAGE ? ['babel-plugin-istanbul'] : [])
  ]
};
