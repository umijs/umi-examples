import Link from 'umi/link';
import Welcome from '@/components/Welcome';
import styles from './index.css';

export default function() {
  return (
    <>
      <div className={styles.normal}>
        <h1>Page index</h1>
      </div>
      <Welcome />
      <Link to="/users"><button>go to /users</button></Link>
    </>
  );
}
