import preval from 'preval.macro'
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index {preval`module.exports = \`hello macros ${1 + 2}\`;`}</h1>
    </div>
  );
}
