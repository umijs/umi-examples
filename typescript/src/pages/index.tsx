import Link from "umi/link";
import Welcome from "@/components/Welcome";
import styles from "./index.css";
import { connect } from "dva";
import { GlobalState } from "@/common/type";
import { actions } from "@/models/counter";
import { bindActionCreators } from "redux";

const mapStateToProps = ({ counter }: GlobalState) => {
  return counter;
};

const useActions = {
  ...actions
};

type PageStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators<PageDispatchProps, PageDispatchProps>(
    useActions,
    dispatch
  )
});
type PageDispatchProps = typeof useActions;
type PageProps = PageStateProps & {
  actions: PageDispatchProps;
};

const page = function(props: PageProps) {
  const handleAdd = () => {
    props.actions.add();
  };

  const handleMinus = () => {
    props.actions.minus();
  };

  return (
    <>
      <div className={styles.normal}>
        <h1>Page index</h1>
      </div>

      <div>
        <div>count {props.number}</div>
        <button onClick={handleAdd}>add</button>
        <button onClick={handleMinus}>minus</button>
      </div>
      <Welcome />
      <Link to="/users">
        <button>go to /users</button>
      </Link>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(page);
