import Link from 'umi/link';
import { Button } from 'antd-mobile';

export default () => (
  <div>
    <h1>Index Page</h1>
    <br />
    <Link to="/list">
      <Button type="primary">go to /list</Button>
    </Link>
  </div>
);
