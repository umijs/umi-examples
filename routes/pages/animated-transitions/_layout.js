import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default withRouter(
  ({ location, match, children }) =>
    <>
      <h1>/animated-transitions</h1>
      <ul>
        <li><Link to={`${match.url}/red`}>red</Link></li>
        <li><Link to={`${match.url}/blue`}>blue</Link></li>
        <li><Link to={`${match.url}/green`}>green</Link></li>
      </ul>
      <hr />
      <div style={{ height: 100, background: 'brown', positoin: 'relative' }}>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            { children }
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
)
