import styles from './index.css';

export default function(props) {
  console.log(props.route);
  
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <h2>role: {props.route.role}</h2>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><a href="https://umijs.org/guide/getting-started.html">Getting Started</a></li>
      </ul>
    </div>
  );
}
