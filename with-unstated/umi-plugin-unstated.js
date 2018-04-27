import assert from 'assert';

export default (api) => {
  const { RENDER, IMPORT } = api.placeholder;

  // Modify render function in entry file(umi.js)
  api.register('modifyEntryFile', ({ memo }) => {
    assert(
      memo.indexOf(RENDER) > -1,
      `Entry files' render is already modified by other plugin`,
    );
    return memo
      .replace(IMPORT, `
import { Provider } from 'unstated';
${IMPORT}
      `.trim())
      .replace(RENDER, `
ReactDOM.render(React.createElement(
  Provider,
  null,
  React.createElement(require('./router').default)
), document.getElementById('root'));
      `.trim());
  });
}
