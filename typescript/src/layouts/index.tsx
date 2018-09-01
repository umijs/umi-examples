import withRouter from 'umi/withRouter';
import dynamic from 'umi/dynamic';
import { connect } from 'dva';

const LazyLoad = dynamic({
  loader: () => import('./LazyLoad'),
});

function BasicLayout(props) {
  return (
    <div>
      <h2>Layouts</h2>
      <h3>message from global model: {props.message}</h3>
      <LazyLoad />
      <hr />
      {
        props.children
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    message: state.global.message,
  };
}

export default withRouter(connect(mapStateToProps)(BasicLayout));
