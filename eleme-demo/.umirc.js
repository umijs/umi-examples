const path = require('path');

export default {
  exportStatic: {
    htmlSuffix: true,
  },
  plugins: [
    ['umi-plugin-react', {
      hd: true,
    }],
    ['umi-plugin-datahub', {
      proxy: {
        '^/shopping': {
          hub: 'eleme-demo',
        },
        '^/bgs': {
          hub: 'eleme-demo',
        },
      },
      store: path.join(__dirname, 'data'),
    }],
  ],
};
