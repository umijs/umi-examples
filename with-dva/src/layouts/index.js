import withRouter from 'umi/withRouter';
import dynamic from 'umi/dynamic';
import { connect } from 'dva';
import { IntlProvider } from 'react-intl';

function mapStateToProps(state) {
  return {
    text: state.global.text,
  };
}

export default dynamic(() => new Promise(resolve => {
  console.log('delay start');
  setTimeout(() => {
    console.log('delay end');
    resolve(withRouter(
      connect(mapStateToProps)(props => {
        return (
          <IntlProvider locale="en">
            <div>
              <h1>MAIN LAYOUT {props.text}</h1>
              {props.children}
            </div>
          </IntlProvider>
        );
      }),
    ))
  }, 2000);
}));
