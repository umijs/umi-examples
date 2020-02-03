export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: false,
        antd: false,
      },
    ],
    './umi-plugin-entry.js',
  ],
};
