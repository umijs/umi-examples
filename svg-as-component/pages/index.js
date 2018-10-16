import { ReactComponent as Rice } from './rice.svg';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Rice width="120" height="120" />
    </div>
  );
}
