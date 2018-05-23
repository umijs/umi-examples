import { Button } from 'antd-mobile';
import Link from 'umi/link';

export default function() {
  return (
    <div>
      <h1>List Page</h1>
      <ul>
        <li>
          <Link to="/">go to /</Link>
        </li>
        <li>
          <Link to="/users/chencheng">go to /users/chencheng</Link>
        </li>
        <li>
          <Link to="/posts/chencheng">go to /posts/chencheng</Link>
        </li>
      </ul>
    </div>
  );
}
