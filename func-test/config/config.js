import { resolve } from 'path';

export default {
  pages: {
    '/': { context: { title: '首页' } },
    '/list': { document: 'pages/list.ejs', context: { title: '列表页' } },
    '/404': { document: 'pages/404.ejs' },
  },
  plugins: [
    'umi-plugin-dll',
    './plugin1',
    ['./plugin2', 'hihi'],
    // 'umi-plugin-yunfengdie',
  ],
  hd: 1,
  loading: './PageLoadingComponent',
  // disableServiceWorker: true,
  exportStatic: {
    // htmlSuffix: true,
  },
  // disableDynamicImport: true,
  disableFastClick: true,
  disableHash: true,
  outputPath: './www',
  alias: {
    common: resolve(__dirname, '../common'),
  },
  manifest: {
    basePath: '/app/',
  },
  theme: {
    'brand-primary': '#7546c9',
  },
};
