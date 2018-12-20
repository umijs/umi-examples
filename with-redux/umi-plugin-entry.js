import { join } from "path";

export default function(api) {
  api.modifyEntryRender(memo => {
    memo = `const rootContainer = window.g_plugins.apply('rootContainer', {
    initialValue: React.createElement(require('${join(__dirname, "./redux/index")}').default,
    null,
    React.createElement(require('./router').default),),
  });
  ReactDOM.render(
    rootContainer,
    document.getElementById('root'),
  );`.trim();
    return memo;
  });

  //   api.register('modifyEntryFile', ({ memo }) => {
  //     memo = memo.replace(
  //       '<%= RENDER %>',
  //       `
  // ReactDOM.render(
  //   React.createElement(
  //     require('${join(__dirname, './redux/index')}').default,
  //     null,
  //     React.createElement(require('./router').default),
  //   ),
  //   document.getElementById('root'),
  // );
  //       `.trim(),
  //     );
  //     return memo;
  //   });
}
