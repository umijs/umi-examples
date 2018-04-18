import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('/Users/chencheng/Documents/Work/Misc/umi/examples/with-dva/src/dva.js').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());

app.model({ ...(require('/Users/chencheng/Documents/Work/Misc/umi/examples/with-dva/src/models/global.js').default) });
app.model({ ...(require('/Users/chencheng/Documents/Work/Misc/umi/examples/with-dva/src/pages/index/model.js').default) });
app.model({ ...(require('/Users/chencheng/Documents/Work/Misc/umi/examples/with-dva/src/pages/list/models/a.js').default) });
app.model({ ...(require('/Users/chencheng/Documents/Work/Misc/umi/examples/with-dva/src/pages/list/models/b.js').default) });
app.model({ ...(require('/Users/chencheng/Documents/Work/Misc/umi/examples/with-dva/src/pages/list/search/model.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
