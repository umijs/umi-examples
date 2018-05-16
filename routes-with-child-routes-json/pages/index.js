import Link from "umi/link";

export default () => (
  <>
    <h1>Index Page</h1>
    <Link to="/site/b">go to /site/b</Link>
    <br />
    <Link to="/redirect/a">go to /redirect/a</Link>
    <br />
    <Link to="/redirect/b">go to /redirect/b</Link>
    <br />
    <Link to="/redirect">go to /redirect (redirect to /site/b)</Link>
  </>
);
