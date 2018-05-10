import Link from "umi/link";
import { Button } from "antd-mobile";
import styles from "./index.scss";
export default () => (
  <div>
    <div className={styles.container}>
      <p>Sass Test</p>
    </div>
    <div className={styles.exc}>
      <p>Sass extend Test</p>
    </div>
  </div>
);
