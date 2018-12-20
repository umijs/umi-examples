import router from "umi/router";
import { connect } from "react-redux";
import { Component } from "../../components/base";
import { List, Stepper, Button, WhiteSpace } from "antd-mobile";
import styles from "./index.css";
import { updateValue } from "../../redux/action";
import { registerReducer } from "../../redux/store";
import Count from "../../components/Count";

registerReducer("extinfo", (state, action) => {
  return { ready: "extinfo" };
});

@connect(state => ({
  value: state.global.value,
  extinfo: state.extinfo
}))
export default class extends Component {
  onChange = value => {
    this.props.dispatch(updateValue(value));
  };

  render() {
    const { value } = this.props;

    return (
      <div>
        <List.Item
          wrap
          extra={
            <Stepper
              style={{ width: "100%", minWidth: "100px" }}
              showNumber
              max={10}
              min={1}
              value={value}
              onChange={this.onChange}
            />
          }
        >
          联动数值
        </List.Item>
        <WhiteSpace />
        {!window.isMobile && (
          <div style={{ background: "#fff", fontSize: "24px" }}>
            因为在电脑上mobile的步进器组件按钮失效,所以我随便放了个组件。如果不想看到这个，你可以开启手机调试模式。
            <Count value={value} onChange={this.onChange} />
          </div>
        )}
        <WhiteSpace />
        <div className={styles.back}>
          <Button onClick={() => router.goBack()}>返回</Button>
        </div>
      </div>
    );
  }
}
