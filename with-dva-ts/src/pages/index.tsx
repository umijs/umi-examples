import React, { useEffect } from 'react';
import styles from './index.css';
import { useDispatch, useSelector } from 'dva';
import { effectAction, notBoundAction } from '@/models/test.model';
// tslint:disable: jsx-no-lambda
// tslint:disable: jsx-no-multiline-js

const Page: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(effectAction.fetch({ id: 'aaaa' }));
    dispatch(effectAction.pollSth.start({ key: 'hahahaha' }));
  });
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
        </li>
      </ul>
      <div>
        <button onClick={() => dispatch(effectAction.pollSth.stop())}>stop poll</button>
      </div>
      <div>
        <label> takeLatest </label>
        <input
          onChange={() => {
            dispatch(effectAction.query({}));
          }}
        />
      </div>
      <div>
        <label> debounced </label>
        <input
          onChange={() => {
            dispatch(effectAction.queryDebounced({}));
          }}
        />
      </div>

      <div>
        <button
          onClick={() => {
            dispatch(notBoundAction.sayHi({ hiFrom: 'pofeng' }));
          }}
        >
          watcher trigger
        </button>
      </div>
    </div>
  );
};
export default Page;
