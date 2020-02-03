import React from 'react';

import counterStore from '../stores/Counter';
import { Provider } from 'mobx-react';

const stores = {
  counterStore,
};

export default class ReduxWrapper extends React.PureComponent {
  render() {
    return <Provider {...stores}>{this.props.children}</Provider>;
  }
}
