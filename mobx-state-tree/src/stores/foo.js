import React from "react";
import { observable, action } from "mobx";
import { types } from "mobx-state-tree";
import { inject, observer } from "mobx-react";


@observer
@types.model
class Foo {
  @observable test = 1;

  @action.bound
  plus() {
    this.test = this.test + 1;
  }
}

export default Foo;
