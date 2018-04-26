import Link from 'umi/link';

export default (
  ({ children, location }) => {
    return (
      <>
        <header>
          <Link to="/">Home</Link>
          <span> / </span>
          <Link to="/list">List</Link>
        </header>
        <hr/>
        {children}
      </>
    );
  }
);
