export default {
  extraBabelPlugins: [
    ...(process.env.COVERAGE ? ['babel-plugin-istanbul'] : [])
  ]
}
