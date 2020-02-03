import { inject, observer } from 'mobx-react';
import React from 'react';
import styles from './index.css';

@inject('counterStore')
@observer
class Editor extends React.Component {
  render() {
    const { count, handleInc, handleDec } = this.props.counterStore;

    return (
      <div className={styles.normal}>
        <h1>{count}</h1>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </div>
    );
  }
}

export default Editor;
