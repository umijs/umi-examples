
import { connect } from 'dva';
import styles from './page.less';

function App({test,global,dispatch}) {
    const { text:globalText } = global;
    const { text } = test;
    return (
        <div className={styles.normal}>
            <h2>
                {globalText}+
                {text}
            </h2>
        </div>
    );
}

export default connect(({test,global})=>({test,global}))(App);
