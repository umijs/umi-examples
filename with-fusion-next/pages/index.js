import { Button } from '@alifd/next';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
      <Button type="primary">Fusion Button</Button>
    </div>
  );
}
