import { Component } from 'react';
import Breadcrumbs from './Breadcrumbs';

class App extends Component {
  componentDidMount() {
    console.log('mount');
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <div>Header (layouts/index.js)</div>
        <hr/>
        <Breadcrumbs />
        <hr/>
        {
          children
        }
        <hr/>
        <div>Footer (layouts/index.js)</div>
      </div>
    );
  }
}

export default App;
