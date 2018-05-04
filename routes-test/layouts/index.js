import { withRouter, Switch, Route } from 'react-router';

function Foo() {
  return <div>Foo</div>;
}

function Bar() {
  return <div>Bar</div>;
}

function Test() {
  return (
    <>
      <div>Test</div>
      <Route path="/a" exact={true} component={Foo} />
      <Route path="/a/b" exact={true} component={Bar} />
      <Switch>
        <Route
          key="/b/b"
          path="/b/b"
          exact={false}
          strict={false}
          render={props => {
            console.log('test in route /b');
            return <div>Route /b</div>
          }}
        />
      </Switch>
    </>
  );
}

export default withRouter(
  ({ children, location }) => {
    console.log('pathname', location.pathname);
    return (
      <>
        <h1>global layout</h1>
        <div>{children}</div>
        <hr/>
        <Test/>
        <hr/>
      </>
    );
  }
);
