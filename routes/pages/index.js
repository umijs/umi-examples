import Link from 'umi/link';

export default () =>
  <div>
    <h1>Routes</h1>
    <ul>
      <li><Link to="/list">/list (PrivateRoute)</Link></li>
      <li><Link to="/users/123">/users/123</Link></li>
      <li><Link to="/users">/users</Link></li>
      <li><Link to="/users/posts/123/comments">/users/posts/123/comments</Link></li>
      <li><Link to="/404">/404</Link></li>
      <li><Link to="/routes-dont-exists">/routes-dont-exists</Link></li>
      <li><Link to="/animated-transitions">/animated-transitions</Link></li>
      <li><Link to="/scroll-to-top/a">/scroll-to-top/a</Link></li>
      <li><Link to="/prompt">/prompt</Link></li>
      <li><Link to="/exclude">/exclude (which will show the 404 page)</Link></li>
    </ul>
  </div>
