import React, { Fragment, FC } from "react";
import Link from "umi/link";
import Welcome from "@/components/Welcome";
import styles from "./index.css";
import { connect } from "dva";
import { GlobalState, UmiComponentProps } from "@/common/type";
import { add, minus } from "@/actions/counter";

const mapStateToProps = ({ counter }: GlobalState) => {
  return counter;
};

type PageStateProps = ReturnType<typeof mapStateToProps>;

type PageProps = PageStateProps & UmiComponentProps;

const page: FC<PageProps> = function(props) {
  const handleAdd = () => {
    props.dispatch(add());
  };

  const handleMinus = () => {
    props.dispatch(minus());
  };

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default connect(mapStateToProps)(page);
