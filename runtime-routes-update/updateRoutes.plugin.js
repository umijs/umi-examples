import { existsSync } from 'fs';
import { join } from 'path';

export default (api) => {
  const { service: { paths }, placeholder: { ROUTES_MODIFIER } } = api;
  const files = [
    join(paths.absSrcPath, 'updateRoutes.js'),
    join(paths.absSrcPath, 'updateRoutes.ts'),
  ];

  function getFile() {
    for (const file of files) {
      if (existsSync(file)) {
        return file;
      }
    }
  }

  api.register('modifyRouterFile', ({ memo }) => {
    const jsFile = getFile();
    if (jsFile) {
      memo = memo.replace(ROUTES_MODIFIER, `
routes = require('${jsFile}').default(routes);
${ROUTES_MODIFIER}
      `.trim());
    }
    return memo;
  });

  api.register('modifyPageWatchers', ({ memo }) => {
    return [...memo, ...files];
  });
}
