import dynamic from 'umi/dynamic';
import { connect } from 'dva';

function mapStateToProps(state) {
  return {
    text: state.global.text,
  };
}

export default dynamic(() => new Promise(resolve => {
  console.log('delay start');
  setTimeout(() => {
    console.log('delay end');
    resolve(connect(mapStateToProps)(props => {
      return (
        <div>
          <h1>Test Delay {props.text}</h1>
          {props.children}
        </div>
      );
    }));
  }, 2000);
}));
