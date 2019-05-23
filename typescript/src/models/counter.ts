import { GlobalState } from "@/common/type";
import { actionCreatorFactory, DvaModelBuilder } from "dva-model-creator";

const actionCreator = actionCreatorFactory("counter");

const add = actionCreator("add");
const minus = actionCreator("minus");

const initState: GlobalState["counter"] = {
  number: 0
};

const builder = new DvaModelBuilder(initState, "counter")
  .case(add, ({ number }) => ({ number: number + 1 }))
  .case(minus, ({ number }) => ({ number: number - 1 }));

export default builder.build();
export const actions = {
  add,
  minus
};
