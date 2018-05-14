const path = require('path');

export default {
  hd: true,
  exportStatic: {
    htmlSuffix: true,
  },
  plugins: [
    ['umi-plugin-datahub', {
      proxy: {
        '^/restapi': {
          hub: 'eleme-demo',
        },
      },
      store: path.join(__dirname, 'data'),
    }],
  ],
  disableServiceWorker: true,
  disableDynamicImport: !!process.env.COVERAGE,
};
